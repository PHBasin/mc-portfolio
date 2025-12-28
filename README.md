# Portfolio Maxime Colin

A static portfolio website built with HTML, Tailwind CSS, Alpine.js, and Fancybox.

## Features

*   **Static Architecture:** Fully static, requiring no backend. Compatible with `file://` protocol, GitHub Pages, Netlify, Vercel, or any S3 bucket.
*   **Component Factorization:** Header and Footer are centrally managed in `src/js/layout.js` and injected dynamically using Alpine.js, eliminating code duplication while maintaining static compatibility.
*   **Centralized Data:** Portfolio categories and gallery data are managed in `src/js/categories.js`.
*   **Performance:** Optimized with Tailwind CSS and minimal runtime dependencies.

## Project Structure

*   `index.html`: Main landing page (Category grid).
*   `gallery.html`: Dynamic gallery template. Uses URL query parameters (`?id=...`) to load specific category data.
*   `about.html`, `contact.html`: Static information pages.
*   `src/js/`:
    *   `layout.js`: Contains `headerHTML` and `footerHTML` strings.
    *   `categories.js`: Verified source of truth for portfolio data.
    *   `fade_in.js`: Animation utilities.
*   `src/input.css`: Main Tailwind CSS source.
*   `dist/output.css`: Compiled CSS (generated).

## Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Watch CSS Changes:**
    ```bash
    npm run watch:css
    ```

## Deployment

Simply upload the entire project folder to any static hosting provider.
- **GitHub Pages:** Deploy from the root branch.
- **Netlify/Vercel:** Set the publish directory to `.`.
- **S3/Storage Bucket:** Upload all files and ensure `index.html` is the entry point.

## Note on "Lint" Errors
You may see warnings about `@source` or `@theme` in `input.css`. These are valid Tailwind CSS v4 directives and can be ignored if your editor doesn't support v4 syntax highlighting yet. The build process handles them correctly.
