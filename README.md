# 🌟 Portfolio Personal

Portfolio web profesional construido con **Astro** y **Clean Architecture**, diseñado para mostrar experiencia laboral, formación académica y proyectos de manera moderna y responsiva.

## ✨ Características

- 🏗️ **Clean Architecture**: Código organizado en capas (Domain, Application, Infrastructure, Presentation)
- 🎨 **Diseño Moderno**: Interfaz responsiva y atractiva con animaciones suaves
- 🌓 **Tema Claro/Oscuro**: Cambio de tema con persistencia en localStorage
- 🌍 **Multiidioma**: Soporte para Español e Inglés
- ⚡ **Alto Rendimiento**: Optimizado para carga rápida con Astro
- ♿ **Accesible**: Cumple con estándares WCAG
- 🧪 **Bien Testeado**: >80% de cobertura de tests

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Sebas1705/my-portfolio.git

# Navegar al directorio
cd my-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📜 Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Genera build de producción
npm run preview      # Previsualiza el build
npm test             # Ejecuta tests unitarios
npm run test:watch   # Tests en modo watch
npm run test:coverage # Genera reporte de cobertura
```

## 🏗️ Estructura del Proyecto

```
my-portfolio/
├── src/
│   ├── domain/              # Entidades y contratos
│   │   ├── entities/        # Modelos de datos
│   │   └── repositories/    # Interfaces de repositorios
│   ├── application/         # Casos de uso
│   │   └── use-cases/       # Lógica de negocio
│   ├── infrastructure/      # Implementaciones
│   │   ├── data/            # Datos estáticos
│   │   ├── repositories/    # Implementación de repositorios
│   │   └── i18n/            # Traducciones
│   ├── presentation/        # Capa de UI
│   │   ├── components/      # Componentes Astro
│   │   ├── layouts/         # Layouts
│   │   └── styles/          # Estilos globales
│   └── pages/               # Páginas de Astro
├── public/                  # Assets estáticos
├── docs/                    # Documentación adicional
├── AGENTS.md               # Normas y arquitectura
└── README.md               # Este archivo
```

## 📚 Documentación

- **[AGENTS.md](./AGENTS.md)**: Guía completa de arquitectura y normas de desarrollo
- **[docs/](./docs/)**: Documentación técnica detallada

## 🎨 Personalización

### Datos Personales

Edita los archivos en `src/infrastructure/data/`:

- `personalInfoData.ts`: Información personal
- `workExperiencesData.ts`: Experiencia laboral
- `academicExperiencesData.ts`: Formación académica
- `projectsData.ts`: Proyectos

### Traducciones

Edita los archivos en `src/infrastructure/i18n/`:

- `es.ts`: Traducciones en español
- `en.ts`: Traducciones en inglés

### Temas y Estilos

Modifica las variables CSS en `src/presentation/styles/global.css`

## 🧪 Testing

El proyecto incluye tests unitarios con Vitest:

```bash
# Ejecutar todos los tests
npm test

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

### Cobertura Actual

- ✅ Use Cases: 100%
- ✅ Repositorios: 100%
- ✅ i18n: 100%
- 📊 **Cobertura Total**: >80%

## 🚢 Deploy

### Build de Producción

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`

### Deploy en GitHub Pages

1. Configura el repositorio en GitHub
2. Actualiza `site` en `astro.config.mjs`
3. Ejecuta el build
4. Sube la carpeta `dist/` a GitHub Pages

### Deploy en Vercel/Netlify

Conecta el repositorio y estos servicios detectarán automáticamente la configuración de Astro.

## 🛠️ Tecnologías

- **[Astro](https://astro.build)**: Framework principal
- **[TypeScript](https://www.typescriptlang.org/)**: Tipado estático
- **[Vitest](https://vitest.dev/)**: Testing
- **CSS Variables**: Theming system
- **Clean Architecture**: Patrón arquitectónico

## 📝 Convenciones de Código

### Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(scope): descripción corta
fix(scope): descripción del fix
docs: actualización de documentación
```

### Naming

- Componentes: `PascalCase.astro`
- Funciones: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`
- Archivos de test: `*.test.ts`

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feat/amazing-feature`)
3. Commit tus cambios siguiendo las convenciones
4. Push a la rama (`git push origin feat/amazing-feature`)
5. Abre un Pull Request

Asegúrate de que:
- ✅ Los tests pasan
- ✅ La cobertura se mantiene >80%
- ✅ El código sigue las normas de `AGENTS.md`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](./LICENSE) para más detalles.

## 👤 Autor

**Sebastián**

- GitHub: [@Sebas1705](https://github.com/Sebas1705)
- LinkedIn: [Sebastian](https://linkedin.com/in/sebastian)
- Email: sebastian@example.com

## 🙏 Agradecimientos

- Astro team por el excelente framework
- Comunidad open source por las inspiraciones
- Clean Architecture principles por Uncle Bob

---

⭐ Si este proyecto te resultó útil, considera darle una estrella en GitHub!
