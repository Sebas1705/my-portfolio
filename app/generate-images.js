import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, 'public/projects');

// Crear directorio si no existe
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

const images = [
  { filename: 'erp-system.jpg', title: 'ERP System', color: '#FF6B6B' },
  { filename: 'dashboard.jpg', title: 'Dashboard', color: '#4ECDC4' },
  { filename: 'ecommerce.jpg', title: 'E-commerce', color: '#45B7D1' },
  { filename: 'hexagonal.jpg', title: 'Hexagonal Architecture', color: '#FFA07A' },
  { filename: 'mobile-app.jpg', title: 'Mobile App', color: '#98D8C8' },
  { filename: 'portfolio.jpg', title: 'Portfolio Website', color: '#F7DC6F' },
  { filename: 'api-template.jpg', title: 'API Template', color: '#BB8FCE' },
  { filename: 'blog.jpg', title: 'Blog Platform', color: '#85C1E2' }
];

images.forEach(({ filename, title, color }) => {
  const canvas = createCanvas(600, 400);
  const ctx = canvas.getContext('2d');

  // Fondo con color
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 600, 400);

  // Texto
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(title, 300, 180);

  ctx.font = '24px Arial';
  ctx.fillText('(Reemplaza con tu imagen)', 300, 240);

  // Guardar imagen
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(projectsDir, filename), buffer);
  console.log(`✓ ${filename} creado`);
});

console.log('\n✓ Todas las imágenes creadas exitosamente en app/public/projects/');
