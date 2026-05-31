// netlify/functions/publish.js
// ============================================================
// Función serverless que publica los cambios del admin
// Actualiza products.js en GitHub → Netlify redespliega solo
// ============================================================

exports.handler = async (event) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { password, config, collections, products } = body;

    // Validar contraseña de publicación
    const expectedPassword = process.env.PUBLISH_PASSWORD;
    if (!expectedPassword) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Falta configurar PUBLISH_PASSWORD en Netlify' }) };
    }
    if (!password || password !== expectedPassword) {
      return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ error: 'Contraseña de publicación incorrecta' }) };
    }

    // Validar configuración de GitHub
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;
    const branch = process.env.GITHUB_BRANCH || 'main';
    const filePath = 'products.js';

    if (!token || !owner || !repo) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Faltan variables GITHUB_TOKEN, GITHUB_OWNER o GITHUB_REPO en Netlify' }) };
    }

    // Generar el contenido del archivo
    const fileContent = generateProductsJS(config, collections, products);
    const fileContentBase64 = Buffer.from(fileContent, 'utf-8').toString('base64');

    // 1. Obtener SHA actual del archivo en el repo
    const apiBase = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    const getResp = await fetch(`${apiBase}?ref=${branch}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'Netlify-Publish-Function',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (!getResp.ok) {
      const errText = await getResp.text();
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ 
        error: `No se pudo leer el archivo en GitHub (HTTP ${getResp.status}). Revisa que el token tenga permisos y que el repo exista.`,
        details: errText.substring(0, 200)
      })};
    }

    const currentFile = await getResp.json();
    const sha = currentFile.sha;

    // 2. Actualizar archivo via PUT
    const putResp = await fetch(apiBase, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'Netlify-Publish-Function',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Update from admin · ${new Date().toISOString()}`,
        content: fileContentBase64,
        sha: sha,
        branch: branch
      })
    });

    if (!putResp.ok) {
      const errText = await putResp.text();
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ 
        error: `Error al actualizar GitHub (HTTP ${putResp.status})`,
        details: errText.substring(0, 200)
      })};
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        success: true,
        message: 'Cambios publicados. El sitio se actualizará automáticamente en ~30-60 segundos.',
        commitTime: new Date().toISOString()
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Error interno: ' + (err.message || 'desconocido') })
    };
  }
};

function generateProductsJS(config, collections, products) {
  const ts = new Date().toLocaleString('es-CO');
  return `/* ============================================================
   PRODUCTS.JS — Publicado desde el panel admin
   ${ts}
   ============================================================ */

window.SITE_CONFIG = ${JSON.stringify(config, null, 2)};

window.COLLECTIONS = ${JSON.stringify(collections, null, 2)};

window.PRODUCTS = ${JSON.stringify(products, null, 2)};
`;
}
