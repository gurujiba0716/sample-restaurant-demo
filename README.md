# Sample Restaurant React Demo Site

This is a premium React + Vite demo website for a fictional cafe / restaurant named **Sample Restaurant** in Phnom Penh, Cambodia.

The site is designed for sales demos. It uses warm colors, large restaurant images, clear contact buttons, and a mobile-friendly layout.

## 1. File Structure

```text
index.html
package.json
vite.config.js
vercel.json
public/
  images/
src/
  main.jsx
  App.jsx
  data/
    siteData.js
  components/
  pages/
  styles/
    style.css
README.md
```

Main folders:

- `public/images/` contains the restaurant images used on the website.
- `src/data/siteData.js` contains the restaurant name, contact details, menu items, and CTA links.
- `src/components/` contains reusable website parts such as the header, footer, buttons, form, and menu items.
- `src/pages/` contains the four pages: Top, Menu, About Us, and Contact.
- `src/styles/style.css` contains the design colors, spacing, layout, responsive styles, and animations.

## 2. How To Change The Company Name

Open:

```text
src/data/siteData.js
```

Find:

```js
name: 'Sample Restaurant'
```

Change it to the new restaurant or company name.

You can also change:

```js
locationShort: 'Phnom Penh, Cambodia'
tagline: 'Good food, good vibes, great moments.'
```

## 3. How To Change The Colors

Open:

```text
src/styles/style.css
```

At the top, edit the color variables:

```css
:root {
  --color-green: #0f3425;
  --color-gold: #b98a31;
  --color-ivory: #f8f2e7;
}
```

For example:

- Change `--color-green` for the main dark brand color.
- Change `--color-gold` for buttons and highlights.
- Change `--color-ivory` or `--color-cream` for the background color.

## 4. How To Change Menu Items

Open:

```text
src/data/siteData.js
```

Find these sections:

```js
export const drinks = [...]
export const food = [...]
```

Each item has:

```js
{
  name: 'Espresso',
  price: '$2.00',
  description: 'Rich and bold espresso shot.',
  image: '/images/drink-espresso.jpg',
}
```

Change the name, price, description, or image path.  
To add a new item, copy one item block and edit the text.

## 5. How To Change Images

Put new images inside:

```text
public/images/
```

Then open:

```text
src/data/siteData.js
```

Update image paths such as:

```js
homeHero: '/images/hero-interior.jpg'
introDish: '/images/intro-dish.jpg'
```

Recommended image types:

- Use `.jpg` for photos.
- Use `.png` for transparent images.
- Keep image names simple, lowercase, and without spaces.

## 6. How To Change Telegram / Messenger Links

Open:

```text
src/data/siteData.js
```

Find:

```js
telegramLink: 'https://t.me/sample_restaurant_demo'
messengerLink: 'https://m.me/sample.restaurant.demo'
```

Replace them with the real business links.

You can also change the booking link:

```js
bookingLink: '/contact#reservation'
```

## 7. How To Publish On GitHub Pages

1. Install Node.js on your computer.
2. Open this folder in a terminal.
3. Run:

```bash
npm install
npm run build
```

4. Upload the project to GitHub.
5. In GitHub, go to **Settings > Pages**.
6. Choose the branch and the build output folder.

For a Vite project, the production files are created in:

```text
dist/
```

If using GitHub Pages with a subfolder URL, you may need to set the Vite `base` option in `vite.config.js`.

## 8. How To Publish On Vercel

1. Upload the project to GitHub.
2. Go to [Vercel](https://vercel.com/).
3. Import the GitHub repository.
4. Use these settings:

```text
Framework: Vite
Build command: npm run build
Output directory: dist
```

5. Click **Deploy**.

The included `vercel.json` helps Vercel serve the React routes correctly.

## 9. Next Steps For WordPress Theme Conversion

To convert this demo into a WordPress theme later:

1. Convert `Header.jsx` into `header.php`.
2. Convert `Footer.jsx` into `footer.php`.
3. Convert each page in `src/pages/` into a WordPress page template.
4. Move colors and layout from `src/styles/style.css` into the theme stylesheet.
5. Replace `src/data/siteData.js` with WordPress custom fields or theme settings.
6. Convert menu items into WordPress custom post types or Advanced Custom Fields.
7. Replace the demo contact form with a WordPress form plugin or custom form handler.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the small validation tests:

```bash
npm test
```

## Demo Note

This is a demo concept. Replace the sample business details, links, and images before using it for a real restaurant.
