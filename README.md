# justinbhayes.com React Rebuild

This project rebuilds the legacy PHP site as a modern Vite + React application with route-based navigation and migrated static assets.

## Routes

- `/` Home (index)
- `/bio` Bio
- `/contact` Contact
- `/portfolio` Portfolio
- `/404` Not Found page

Unknown routes redirect to `/404`.

## Folder Structure

- `src/components` shared layout sections (`Header`, `Footer`, `Testimonials`, `Layout`)
- `src/pages` route-level page components
- `src/data` reusable content data used by pages/components
- `public/assets/css` migrated legacy CSS files
- `public/assets/js` migrated legacy JavaScript files
- `public/assets/images` migrated site images/icons

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

The build now prerenders route-specific HTML files in `dist`, so `View Source` on deployed pages includes each page's own title and meta tags.

Preview the production build locally:

```bash
npm run preview
```
