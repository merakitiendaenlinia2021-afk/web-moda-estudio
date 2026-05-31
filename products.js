/* PRODUCTS.JS — FASE 1: galería de imágenes + descripciones */

window.SITE_CONFIG = {
  brandName: "MODA ESTUDIO",
  brandDot: ".",
  tagline: "Comfort-tech wear hecho en Colombia.",
  announcements: ["Envío gratis en compras superiores a $300.000 COP","Hasta 4 cuotas sin interés","Cambios y devoluciones gratis","Hecho en Colombia"],
  hero: { eyebrow: "— Colección Nexis · Otoño 2026", titleLine1: "Comfort", titleLine2Italic: "tech", titleLine2Rest: "wear", ctaPrimary: "Comprar ahora", ctaSecondary: "Nuestra filosofía", image: "https://picsum.photos/seed/techwear1/1920/1200?grayscale" },
  features: ["Travel-friendly","Sport-proof","All day-wear","Hecho en Colombia","Confección de lujo","Tecnología textil"],
  socials: { instagram: "#", tiktok: "#", linkedin: "#" }
};

window.COLLECTIONS = [
  { id: "nexis", name: "Nexis", description: "Moda y funcionalidad sin esfuerzo.", image: "https://picsum.photos/seed/nexis/800/1100?grayscale" },
  { id: "horizon", name: "Horizon", description: "Libertad de movimiento sin restricciones.", image: "https://picsum.photos/seed/horizon/800/1100?grayscale" },
  { id: "ascend", name: "Ascend", description: "Tecnología textil para nuevos horizontes.", image: "https://picsum.photos/seed/ascend/800/1100?grayscale" }
];

window.PRODUCTS = [
  { id:"verge", name:"Buzo Verge — Cuello redondo", collection:"nexis", price:379900, oldPrice:null, tag:"new", images:["https://picsum.photos/seed/p1/600/750?grayscale","https://picsum.photos/seed/p1b/600/750?grayscale"], shortDescription:"Buzo techwear de cuello redondo.", longDescription:"Diseñado con tela performance que respira y se siente suave en la piel. Ideal para el día a día urbano o para tus aventuras.", colors:["#0A0A0A","#6B5D4F","#D4CFC4"], sizes:["S","M","L","XL"], sku:"VRG-001", active:true },
  { id:"cling", name:"Camiseta Cling — Café", collection:"nexis", price:264900, oldPrice:329900, tag:"sale", images:["https://picsum.photos/seed/p2/600/750?grayscale","https://picsum.photos/seed/p2b/600/750?grayscale"], shortDescription:"Camiseta relaxed fit.", longDescription:"Tejido de algodón premium con caída relajada.", colors:["#6B5D4F","#0A0A0A"], sizes:["S","M","L","XL"], sku:"CLG-002", active:true },
  { id:"blaze", name:"Short Blaze — Negro", collection:"horizon", price:249900, oldPrice:null, tag:null, images:["https://picsum.photos/seed/p3/600/750?grayscale","https://picsum.photos/seed/p3b/600/750?grayscale"], shortDescription:"Short técnico semi-ajustado.", longDescription:"Diseñado para deportistas y aventureros.", colors:["#0A0A0A","#3A4D3A"], sizes:["S","M","L"], sku:"BLZ-003", active:true },
  { id:"drift", name:"Pantalón Drift — Cargo técnico", collection:"horizon", price:429900, oldPrice:null, tag:"bestseller", images:["https://picsum.photos/seed/p4/600/750?grayscale","https://picsum.photos/seed/p4b/600/750?grayscale"], shortDescription:"Pantalón cargo con bolsillos funcionales.", longDescription:"Estilo urbano-outdoor con múltiples bolsillos.", colors:["#0A0A0A","#5C5045","#2B3329"], sizes:["28","30","32","34","36"], sku:"DRF-004", active:true },
  { id:"flux", name:"Chaqueta Flux — Shell impermeable", collection:"ascend", price:649900, oldPrice:null, tag:null, images:["https://picsum.photos/seed/p5/600/750?grayscale","https://picsum.photos/seed/p5b/600/750?grayscale"], shortDescription:"Chaqueta shell impermeable.", longDescription:"Protección contra lluvia y viento.", colors:["#0A0A0A","#4A4A4A"], sizes:["S","M","L","XL"], sku:"FLX-005", active:true },
  { id:"orbit", name:"Hoodie Orbit — Oversize", collection:"nexis", price:399900, oldPrice:499900, tag:"sale", images:["https://picsum.photos/seed/p6/600/750?grayscale","https://picsum.photos/seed/p6b/600/750?grayscale"], shortDescription:"Hoodie oversize.", longDescription:"Comodidad extrema con corte amplio.", colors:["#0A0A0A","#D4CFC4","#6B5D4F"], sizes:["S","M","L","XL","XXL"], sku:"ORB-006", active:true },
  { id:"trail", name:"Camiseta Trail — Performance", collection:"ascend", price:219900, oldPrice:null, tag:null, images:["https://picsum.photos/seed/p7/600/750?grayscale","https://picsum.photos/seed/p7b/600/750?grayscale"], shortDescription:"Camiseta deportiva.", longDescription:"Tela técnica anti-sudor.", colors:["#FFFFFF","#0A0A0A","#6B5D4F"], sizes:["S","M","L"], sku:"TRL-007", active:true },
  { id:"pulse", name:"Buzo Pulse — Tech fleece", collection:"ascend", price:459900, oldPrice:null, tag:"new", images:["https://picsum.photos/seed/p8/600/750?grayscale","https://picsum.photos/seed/p8b/600/750?grayscale"], shortDescription:"Buzo tech fleece.", longDescription:"Aislamiento térmico premium.", colors:["#0A0A0A","#4A4A4A"], sizes:["S","M","L","XL"], sku:"PLS-008", active:true }
];
