# Paola Ins — Landing page

Proyecto editable en **React + Vite + Tailwind CSS v4**.

## Abrir en VS Code
1. Descomprimí el ZIP.
2. Abrí la carpeta `paola-ins-landing` en Visual Studio Code.
3. Abrí la terminal integrada (`Ctrl + ñ` o Terminal > New Terminal).
4. Ejecutá `npm install`.
5. Ejecutá `npm run dev`.
6. Abrí la dirección local que muestra la terminal (normalmente http://localhost:5173).

Requiere Node.js 20.19+ o 22.12+ (recomendado: versión LTS actual).

## Personalización
- **Textos, servicios, WhatsApp, Instagram, dirección e imágenes:** `src/data/site.js`.
- **Diseño y secciones:** `src/App.jsx`.
- **Menú superior:** `src/components/Header.jsx`.
- **Estilos generales:** `src/styles.css`.
- **Tipografías y SEO básico:** `index.html`.

**IMPORTANTE:** Los servicios, las imágenes y los datos de contacto son ejemplos ilustrativos, no información verificada de Paola Ins. Completá los datos reales antes de publicar. El botón de WhatsApp dirige a contacto dentro de la página hasta que configures `whatsapp` en `site.js`.

## Publicar
Ejecutá `npm run build`. La carpeta `dist/` resultante se puede subir a un hosting estático o desplegar en Vercel/Netlify.

Las fotografías de muestra se cargan desde Unsplash y requieren conexión a Internet. Para usar fotos propias, guardalas en `public/images/` y cambiá las rutas en `site.js` a `/images/nombre.jpg`.
