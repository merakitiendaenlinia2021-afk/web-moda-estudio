# TUMARCA — Sitio web con panel admin

Sitio estático con panel de administración tipo Shopify para gestionar productos sin tocar código.

## 📁 Archivos

| Archivo | Qué hace |
|---|---|
| `index.html` | El sitio público que ven tus clientes |
| `admin.html` | Panel para gestionar productos (tu "Shopify") |
| `products.js` | Base de datos (productos, colecciones, config) |

## 🚀 Cómo subir a Netlify (primera vez)

1. Entra a https://app.netlify.com
2. **Add new site → Deploy manually**
3. Arrastra este ZIP completo (o la carpeta descomprimida) a la zona de drop
4. Listo, te da una URL pública

## ✏️ Cómo editar productos (uso diario)

1. **Entra al panel admin**: ve a `tu-sitio.netlify.app/admin.html`
2. **Contraseña inicial**: `admin` (cámbiala en Configuración después)
3. Agrega, edita o elimina productos visualmente con formularios
4. Cuando termines, ve a **"Publicar cambios"** → clic en **"Descargar products.js"**
5. **Sube el archivo** a Netlify:
   - **Si usas drag & drop**: ve a tu sitio en Netlify → **Deploys** → arrastra el archivo descargado
   - **Si usas GitHub**: reemplaza el archivo en tu repo y el deploy es automático
6. Espera ~30 segundos y refresca el sitio

> ⚠️ Importante: el admin guarda los cambios en tu navegador (localStorage). Si limpias el cache o cambias de dispositivo, los cambios no exportados se pierden. **Siempre descarga y sube el archivo después de editar.**

## 🎨 Qué puedes editar desde el admin

### Productos
- Nombre, precio, precio anterior (descuentos)
- Imágenes (principal y hover)
- Colores disponibles (con color picker)
- Tallas
- Etiquetas (Nuevo, Sale, Bestseller)
- Asignar a colección
- Activar/ocultar del sitio

### Colecciones
- Crear/editar/eliminar colecciones
- Cada producto puede asignarse a una colección

### Configuración
- Nombre de la marca
- Texto del hero (portada)
- Imagen del hero
- Redes sociales
- Cambiar contraseña del admin

## 🔒 Seguridad del admin

- La contraseña se guarda en `localStorage` del navegador
- **No es seguro al 100%** (cualquiera con acceso al código puede ver los productos), pero impide acceso casual
- Para seguridad real, en Netlify ve a **Site settings → Visitor access → Password protection** y protege solo `/admin.html`
- Más seguro aún: con tu plan pago de Netlify puedes usar **Netlify Identity** (login real con email)

## 💡 Tips

**Imágenes:** lo más fácil es subirlas a un servicio gratis y pegar la URL:
- https://imgbb.com (gratis, sin registro)
- https://cloudinary.com (gratis hasta 25GB)
- https://imagekit.io
- Si tienes Shopify aún: copia las URLs de las imágenes de tu admin actual

**Backup:** desde "Publicar cambios" puedes descargar un JSON con todos tus datos. Guárdalo cada cierto tiempo.

**Múltiples editores:** cada persona usa su propio navegador y exporta. El último que sube el archivo a Netlify "gana". Para trabajo en equipo coordinen quién edita cuándo.

## 🛠 Personalización avanzada

Si quieres tocar código:
- **Colores del sitio**: en `index.html` busca `:root {` (variables CSS)
- **Tipografías**: en el `<link>` de Google Fonts dentro de `<head>`
- **Sección "Manifesto" / "Nosotros"**: hardcoded en `index.html`, búscala
- **Footer**: hardcoded en `index.html`

## ✅ Compatibilidad

- Chrome, Safari, Firefox, Edge (últimas versiones)
- Mobile (iOS Safari, Chrome Android)
- Responsive de 320px a 4K
