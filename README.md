# TOXFIT - Tienda de Ropa Deportiva Premium

![TOXFIT Logo](./assests/img/logo.png)

Ropa deportiva de alto rendimiento diseñada para mujeres fuertes y poderosas. Catsuits y prendas deportivas que combinan estilo, tecnología y comodidad.

## 📌 Descripción

TOXFIT es una marca de ropa deportiva premium que combina estilo, comodidad y tecnología en prendas diseñadas para mujeres activas. Nuestra colección incluye:

- **Catsuits de alto rendimiento** - Diseños únicos y funcionales
- **Conjuntos deportivos** - Prendas técnicas para entrenamiento
- **Materiales inteligentes** - Transpirables y de secado rápido
- **Diseños innovadores** - Desde looks atrevidos hasta clásicos elegantes

## ✨ Características Principales

✅ **Tecnología avanzada** - Materiales transpirables y de secado rápido  
✅ **Diseño ergonómico** - Prendas que se adaptan perfectamente a tu cuerpo  
✅ **Variedad de estilos** - Para todos los gustos y ocasiones  
✅ **Tallaje inclusivo** - Para todos los tipos de cuerpo  
✅ **Animaciones suaves** - Experiencia de usuario mejorada  
✅ **Responsive design** - Optimizado para todos los dispositivos  

## 🛠 Stack Tecnológico

### Frontend
- **HTML5** semántico y accesible
- **SCSS/SASS** con arquitectura modular
- **Bootstrap 5** - Framework CSS
- **Font Awesome 6** - Iconografía moderna
- **JavaScript** - Interactividad

### Arquitectura SCSS
```
├── sass/                    # Componentes modulares SCSS
    ├── styles.scss          # Archivo principal de compilación
    ├── styles.css.map       # Source map para debugging
    ├── _variables.scss     # Variables de colores y fuentes
    ├── _mixins.scss        # Mixins reutilizables
    ├── _base.scss          # Estilos base y reset
    ├── _components.scss    # Componentes personalizados
    ├── _header.scss        # Estilos del header
    ├── _footer.scss        # Estilos del footer
    ├── _animations.scss    # Animaciones y keyframes
    └── _responsive.scss    # Media queries y responsive
```

## 🎨 Guía de Estilos

### Paleta de Colores
```scss
$primary: #79734c;       // Marrón calido
$primary-dark: #6a6642;  // Marrón  
$secondary: #4d4026;     // Marrón oscuro
$accent: #c7b388;        // Beige dorado
$background: #cac7c0;    // Gris claro
$text: #333;             // Texto principal
$light: #eee6ca;         // Beige claro
$white: #ffffff;         // Blanco puro
```

### Tipografía
- **Principal**: "DM Serif Display" (Google Fonts)
- **Secundaria**: Sans-serif del sistema
- **Pesos**: 400 (regular), 600 (semibold), 700 (bold)

### Componentes Personalizados
- **Botones animados** con efectos hover y transiciones
- **Cards de productos** con elevación y animaciones
- **Formularios estilizados** con validación visual
- **Navbar sticky** con blur effect y transiciones suaves
- **Testimonios** en grid responsive de 3 columnas

## 🚀 Estructura del Proyecto

```
toxfit-store/
├── index.html              # Página principal
├── pages/
│   ├── products.html       # Catálogo de productos
│   ├── sales.html          # Productos en oferta
│   ├── aboutMe.html        # Sobre la marca
│   └── contact.html        # Formulario de contacto
├── sass/                   # Código fuente SCSS
│   ├── styles.scss         # Archivo principal de importación
│   ├── styles.css.map      # Source map para debugging
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _base.scss
│   ├── _components.scss
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _animations.scss
│   └── _responsive.scss
├── css/                    # CSS compilado (output)
│   └── styles.css
├── assests/
│   ├── img/                # Imágenes y logos
│   └── (otros recursos)
├── vscode/                 # Configuración de VS Code
├── wireframe/              # Diseños y prototipos
├── package.json            # Dependencias y scripts
└── README.md
```

## 📱 Responsive Design

El sitio está completamente optimizado para:

- **📱 Móviles** (375px+) - 1 columna
- **📟 Tablets** (768px+) - 2 columnas  
- **💻 Laptops** (992px+) - 3 columnas
- **🖥️ Desktop** (1200px+) - 3 columnas

## ✨ Animaciones y Efectos

### Implementados con SCSS
- **Fade In/Out** - Transiciones suaves de elementos
- **Pulse** - Efectos de latido para elementos destacados
- **Expand Line** - Animación de líneas decorativas
- **Hover effects** - Transformaciones y sombras en botones
- **Slide effects** - Desplazamientos suaves

### Mixins Personalizados
```scss
@mixin transition($property: all, $duration: 0.3s, $easing: ease);
@mixin flex-column;
@mixin button-base; // Base para botones animados
```

## 🌐 Enlaces Importantes

- [Instagram](https://www.instagram.com/toxfitn) - Síguenos para novedades
- [WhatsApp](https://wa.link/do7ka0) - Contacto directo
- [Mercado Libre](https://listado.mercadolibre.com.ar/pagina/toxfit/) - Tienda oficial

## 📬 Contacto

**📧 Email**: info@toxfit.com  
**📞 Teléfono**: +54 911 3459 6708  
**🏢 Dirección**: Av. Deportiva 123, Ciudad Autónoma de Buenos Aires

## 💻 Desarrollo y Contribución

### Compilación SCSS
```bash
# Compilar SCSS desde la raíz del proyecto
sass --watch sass/styles.scss:css/styles.css

# Compilar con source maps para desarrollo
sass --watch sass/styles.scss:css/styles.css --source-map

# Compilación de producción (minificado)
sass sass/styles.scss:css/styles.css --style=compressed
```

### Estructura de Importación
El archivo `sass/styles.scss` importa todos los partials:
```scss
@use 'partials/animations';
@use 'partials/base';
@use 'partials/components';
@use 'partials/mixins';
@use 'partials/variables';
@use 'partials/header';
@use 'partials/footer';
@use 'partials/responsive';
```

### Cómo Contribuir
1. Haz fork del proyecto
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Modifica los archivos SCSS en `/sass/partials/`
4. Compila los estilos: `sass sass/styles.scss:css/styles.css`
5. Haz commit: `git commit -m 'Agrega nueva funcionalidad'`
6. Haz push: `git push origin feature/nueva-funcionalidad`
7. Abre un Pull Request

---

✨ **Demuestra tus posibles en "imposibles" con TOXFIT** ✨

*Diseñado y desarrollado con ❤️ para mujeres fuertes*