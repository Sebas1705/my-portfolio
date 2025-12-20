# AGENTS.MD - Normas y Arquitectura del Portfolio

## 📋 Visión General

Este proyecto es un portafolio web personal construido con **Astro** siguiendo los principios de **Clean Architecture**. El objetivo es crear una aplicación web moderna, escalable, mantenible y completamente testeada.

## 🏗️ Arquitectura del Proyecto

### Clean Architecture

El proyecto está estructurado en capas concéntricas siguiendo los principios de Clean Architecture:

```
src/
├── core/                # Utilidades y constantes transversales (date, constants, helpers)
├── domain/              # Capa de Dominio (Modelos, contratos y casos de uso)
│   ├── i-repositories/  # Interfaces de repositorios (contratos)
│   ├── models/          # Entidades y tipos del dominio
│   └── use-cases/       # Casos de uso (GetAllProjectsUseCase, etc.)
├── data/                # Implementaciones de infraestructura y datos
│   ├── datasources/     # Archivos JSON y fuentes de datos
│   └── repositories/    # Implementaciones concretas (InMemory...)
└── presentation/        # Capa de Presentación (UI / Astro)
    ├── components/   # Componentes .astro
    ├── layouts/      # Layouts de página
    ├── pages/        # Rutas y páginas (`src/pages/[lang]/*`)
    └── styles/       # CSS global (Tailwind / variables)
```

### Principios de Dependencias

1. **Las capas internas no conocen las externas**: El dominio no conoce la infraestructura ni la presentación
2. **Las dependencias apuntan hacia adentro**: Application depende de Domain, Infrastructure depende de Domain y Application
3. **Las abstracciones están en capas internas**: Las interfaces (contratos) están en el dominio

### Flujo de Datos

```
Usuario → Presentación → Casos de Uso → Repositorios → Datos
                                ↓              ↓              ↓
                        Astro      Application      Infrastructure
```

## 🎨 Tecnologías y Herramientas

### Core
- **Astro 4.16+**: Framework principal para generación de sitios estáticos
- **TypeScript 5.6+**: Tipado estático para mayor seguridad
- **Vitest 2.1+**: Framework de testing

### Características
- **Internacionalización (i18n)**: Soporte para Español e Inglés
- **Temas**: Modo claro y oscuro con persistencia
- **Responsive Design**: Diseño adaptativo móvil-primero
- **Accesibilidad**: Cumplimiento de estándares WCAG

## 📂 Estructura de Carpetas Detallada

### Domain Layer (`src/domain/`)

**Propósito**: Define las entidades del negocio y las reglas fundamentales.

**Entidades**:
- `Project`: Representa un proyecto (laboral, académico o personal)
- `WorkExperience`: Experiencia laboral
- `AcademicExperience`: Formación académica
- `PersonalInfo`: Información personal del usuario
- `Language`: Tipos de idioma soportados
- `Theme`: Configuración de tema (claro/oscuro)

**Repositorios (Interfaces)**:
- `ProjectRepository`: Operaciones CRUD para proyectos
- `WorkExperienceRepository`: Gestión de experiencias laborales
- `AcademicExperienceRepository`: Gestión de formación académica
- `PersonalInfoRepository`: Acceso a información personal

**Reglas**:
- ✅ Solo tipos, interfaces y entidades puras
- ✅ Sin dependencias externas
- ❌ No debe importar de otras capas
- ❌ Sin lógica de infraestructura o presentación

### Application / Use Cases (`src/domain/use-cases/`)

**Propósito**: Implementa los casos de uso de la aplicación. En este proyecto los use-cases viven bajo `src/domain/use-cases` (no hay una capa `src/application` separada).

**Casos de Uso (ejemplos)**:
- `GetAllProjectsUseCase`: Obtener todos los proyectos
- `GetProjectsByTypeUseCase`: Filtrar proyectos por tipo
- `GetWorkExperiencesUseCase`: Obtener experiencias laborales
- `GetAcademicExperiencesUseCase`: Obtener formación académica
- `GetPersonalInfoUseCase`: Obtener información personal
- `GetRelatedProjectsUseCase`: Obtener proyectos relacionados

**Reglas**:
- ✅ Puede depender del Domain
- ✅ Implementa lógica de negocio
- ✅ Coordina el flujo de datos
- ❌ No conoce detalles de implementación
- ❌ No depende de frameworks

### Infrastructure / Data Layer (`src/data/`)

**Propósito**: Implementaciones concretas, datos de ejemplo y adaptadores.

**Componentes**:
- `datasources/`: Archivos JSON y fuentes de datos (ej. `projectsData.json`, `labels/`)
- `repositories/`: Implementaciones concretas de repositorios (InMemory...)
- `repositories/.../labels`: Repositorios de etiquetas y traducciones

**Reglas**:
- ✅ Implementa las interfaces del Domain (`src/domain/i-repositories`)
- ✅ Maneja persistencia y servicios externos
- ✅ Puede usar librerías de terceros
- ❌ No debe tener lógica de negocio compleja

### Presentation Layer (`src/presentation/`)

**Propósito**: Interfaz de usuario y componentes visuales.

**Componentes**:
- `Header`: Navegación, tema, idioma
- `Hero`: Sección de portada
- `About`: Sobre mí
- `WorkExperience`: Experiencia laboral con timeline
- `Education`: Formación académica
- `Projects`: Proyectos personales
- `Contact`: Información de contacto
- `Footer`: Pie de página

**Reglas**:
- ✅ Usa casos de uso para obtener datos
- ✅ Solo lógica de presentación
- ✅ Componentes reutilizables
- ❌ No accede directamente a repositorios
- ❌ No contiene lógica de negocio

## 🎯 Normas de Desarrollo con Astro

### 1. Componentes

**Estructura de Componente Astro**:
```astro
---
// Script (TypeScript)
import type { Props } from './types';

```

**Mejores Prácticas**:
- ✅ Usar TypeScript para props
- ✅ Estilos con scope local por defecto
- ✅ Minimizar JavaScript del cliente
- ✅ Usar componentes .astro para contenido estático
- ✅ Extraer lógica compleja a funciones

## 🧪 Testing

### Estrategia de Testing

**Cobertura mínima**: 80%

El proyecto usa dos capas de tests principales:

- **Unit / Integration tests**: escritos con **Vitest** y ubicados en `app/src/**` (archivos `*.test.ts`). Cubren casos de uso (`domain/use-cases`), utilidades (`core`) y repositorios `InMemory`.
- **E2E tests**: escritos con **Playwright** y ubicados en `app/tests/e2e`. Cubren navegación, accesibilidad básica, interacciones (tema, idioma, menú) y validaciones de meta/SEO.

**Tipos de Tests (ejemplos)**:

1. Tests Unitarios (Use Cases y Repositorios)

```typescript
describe('GetProjectsUseCase', () => {
    it('returns all projects', async () => {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetAllProjectsUseCase(repository);

        const projects = await useCase.execute();

        expect(projects).toBeDefined();
        expect(projects.length).toBeGreaterThan(0);
    });
});
```

2. Tests E2E (Playwright)

```ts
import { test, expect } from '@playwright/test';

test('home shows header and hero', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('h1')).toContainText(/Sebasti/);
});
```

### Ejecutar Tests

```bash
# Ir al workspace del frontend
cd app

# Tests unitarios / integración (Vitest)
pnpm test
pnpm run test:coverage

# Tests E2E (Playwright)
pnpm run test:e2e
```

### Cobertura y exclusiones

El reporte de cobertura se genera con `v8` (configurado en `vitest.config.ts`). Para obtener métricas útiles se excluyen intencionalmente archivos de solo datos y modelos tipo-only que distorsionan el porcentaje (por ejemplo `src/data/datasources/**` y `src/domain/models/**`). Si deseas incluirlos, elimina esas rutas de la propiedad `coverage.exclude` en `vitest.config.ts`.

### Estado actual (resumen)

- Tests E2E adaptados a nuevas interfaces y ampliados para cubrir páginas principales (`app/tests/e2e/*`).
- Nuevos unit tests añadidos para utilidades (`core/linkify`, `core/date`) y validación de datasources (`app/src/data/datasources/datasources.test.ts`).
- Ejecuciones locales muestran: **~38 tests E2E** y **~36 archivos de test unitarios**, con cobertura global de Statements 100%, Functions 100%, Lines 100% y Branches ~91.66% (valor obtenido en ejecución local de ejemplo).
### 2. Routing

```
src/pages/
    index.astro          → /
    about.astro          → /about
    blog/
        index.astro        → /blog
        [slug].astro       → /blog/:slug
## 🤝 Contribuir

Las contribuciones son bienvenidas. Flujo recomendado:

1. Fork / crear rama (`git checkout -b feat/mi-cambio`)
2. Implementar cambios y tests
3. Ejecutar `pnpm test` y `pnpm run test:coverage`
4. Crear PR a `develop`

### Checklist antes de PR

- [ ] Tests pasan (`pnpm test`)
- [ ] Cobertura >= 80% (`pnpm run test:coverage`)
- [ ] Build exitoso (`pnpm run build`)
- [ ] Sin errores de TypeScript (`npm run astro check`)
- [ ] Documentación actualizada si aplica
@domain/        → src/domain/
@data/          → src/data/
@presentation/  → src/presentation/
```

**Orden de importaciones**:
```typescript
// 1. Dependencias externas
import { defineConfig } from 'astro/config';

// 2. Tipos
import type { Language } from '@domain/entities/Language';

// 3. Casos de uso
import { GetProjectsUseCase } from '@domain/use-cases';

// 4. Repositorios
import { InMemoryProjectRepository } from '@data/repositories';

// 5. Componentes
import Header from '@presentation/components/Header.astro';
```

### 4. Estilos

**Variables CSS**:
```css
:root {
    /* Colores */
    --color-primary: #3b82f6;
    --color-bg-primary: #ffffff;
    --color-text-primary: #0f172a;
    
    /* Espaciado */
    --spacing-md: 1rem;
    
    /* Transiciones */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

[data-theme="dark"] {
    --color-bg-primary: #0f172a;
    --color-text-primary: #f1f5f9;
}
```

**Responsive Design**:
```css
/* Mobile First */
.container {
    padding: 1rem;
}

@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
}
```

### 5. Performance

**Optimizaciones**:
- ✅ Lazy loading de imágenes: `loading="lazy"`
- ✅ Minimizar JavaScript del cliente
- ✅ Usar `Astro.glob()` para colecciones
- ✅ Preload de fuentes críticas
- ✅ Optimizar imágenes con formatos modernos

### 6. Accesibilidad

**Checklist**:
- ✅ `alt` text en todas las imágenes
- ✅ `aria-label` en botones icónicos
- ✅ Contraste de color adecuado (WCAG AA)
- ✅ Navegación por teclado
- ✅ Landmarks semánticos (`<header>`, `<main>`, `<footer>`)
- ✅ Focus visible en elementos interactivos

## 🧪 Testing

### Estrategia de Testing

**Cobertura mínima**: 80%

**Tipos de Tests**:

1. **Tests Unitarios** (Use Cases y Repositorios)
```typescript
describe('GetProjectsUseCase', () => {
    it('should return all projects', async () => {
        const repository = new InMemoryProjectRepository();
        const useCase = new GetProjectsUseCase(repository);
        
        const projects = await useCase.execute();
        
        expect(projects).toBeDefined();
        expect(projects.length).toBeGreaterThan(0);
    });
});
```

2. **Tests de Integración** (i18n, Flujos completos)
```typescript
describe('i18n', () => {
    it('should translate keys correctly', () => {
        expect(translate('es', 'nav.home')).toBe('Inicio');
    });
});
```

### Ejecutar Tests

```bash
# Tests con watch mode
npm run test:watch

# Tests con cobertura
npm run test:coverage

# Tests en CI
npm test
```

## 🌍 Internacionalización (i18n)

### Estructura

```typescript
src/infrastructure/i18n/
    es.ts    # Traducciones en español
    en.ts    # Traducciones en inglés
    index.ts # Utilidades y funciones
```

### Uso

```typescript
import { translate } from '@infrastructure/i18n';

const greeting = translate('es', 'hero.greeting'); // "Hola, soy"
```

### Agregar nuevo idioma

1. Crear archivo `src/infrastructure/i18n/{lang}.ts`
2. Añadir al array `supportedLanguages` en `index.ts`
3. Actualizar el selector de idioma en `LanguageSelector.astro`

## 🎨 Temas

### Sistema de Temas

**Implementación**:
- CSS Variables para tokens de diseño
- `data-theme` attribute en `<html>`
- LocalStorage para persistencia
- Script inline para evitar flash

**Agregar nuevo tema**:
```css
[data-theme="nuevo-tema"] {
    --color-primary: #...;
    --color-bg-primary: #...;
    /* ... más variables */
}
```

## 🚀 Comandos

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Build
npm run build        # Genera build de producción

# Preview
npm run preview      # Previsualiza build

# Tests
npm test            # Ejecuta tests
npm run test:watch  # Tests en modo watch
npm run test:coverage # Tests con cobertura

# Linting
npm run astro check # Verifica tipos y errores
```

## 📝 Convenciones de Código

### Naming

- **Archivos**: PascalCase para componentes (`Header.astro`), camelCase para utilidades
- **Variables**: camelCase (`personalInfo`)
- **Constantes**: UPPER_SNAKE_CASE (`DEFAULT_LANGUAGE`)
- **Tipos/Interfaces**: PascalCase (`PersonalInfo`)
- **Funciones**: camelCase (`getProjects`)

### Comentarios

```typescript
// ✅ Buenos comentarios
// Calcula el promedio ponderado de las calificaciones
const average = calculateWeightedAverage(grades);

// ❌ Malos comentarios
// Incrementa i
i++;
```

### Commits

**Formato**: `tipo(scope): descripción`

**Tipos**:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Formato, punto y coma, etc.
- `refactor`: Refactorización
- `test`: Tests
- `chore`: Mantenimiento

**Ejemplos**:
```
feat(hero): añadir animación de entrada
fix(i18n): corregir traducción en español
docs(readme): actualizar instrucciones de instalación
```

## 🔧 Troubleshooting

### Errores Comunes

**1. Error de alias de importación**
```
Error: Cannot find module '@domain/...'
```
**Solución**: Verificar `tsconfig.json` y `astro.config.mjs`

**2. Tests fallan con imports**
```
Error: Unknown file extension ".ts"
```
**Solución**: Verificar `vitest.config.ts` tiene la configuración de alias

**3. Tema no persiste**
```
El tema vuelve al default al recargar
```
**Solución**: Verificar que el script inline en `Layout.astro` se ejecuta

## 📚 Referencias

### Astro
- [Documentación oficial](https://docs.astro.build)
- [Guía de componentes](https://docs.astro.build/en/core-concepts/astro-components/)
- [Routing](https://docs.astro.build/en/core-concepts/routing/)

### Clean Architecture
- [The Clean Architecture - Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Clean Architecture Principles](https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/)

### Testing
- [Vitest Documentation](https://vitest.dev/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

## 🤝 Contribuir

### Workflow

1. Crear rama desde `develop`: `git checkout -b feat/nueva-funcionalidad`
2. Desarrollar siguiendo las normas de este documento
3. Escribir tests (mínimo 80% cobertura)
4. Ejecutar `npm run build` para verificar
5. Commit siguiendo convenciones
6. Push y crear Pull Request a `develop`

### Checklist antes de PR

- [ ] Tests pasan (`npm test`)
- [ ] Cobertura >= 80% (`npm run test:coverage`)
- [ ] Build exitoso (`npm run build`)
- [ ] Sin errores de TypeScript (`npm run astro check`)
- [ ] Documentación actualizada si aplica
- [ ] Accesibilidad verificada
- [ ] Responsive en móvil, tablet y desktop

## 📄 Licencia

Este proyecto es de código abierto bajo licencia MIT.

---

**Versión**: 1.0.0  
**Última actualización**: Diciembre 2025  
**Mantenedor**: Sebastián
