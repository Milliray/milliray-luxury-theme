# Milliray Luxury Theme — Starter (Updated)

This branch contains a minimal Shopify Online Store–compatible starter theme scaffold focused on a photography-forward luxury aesthetic.

What's new in this update
- Added logo fallback and header navigation (Male/Female/Accessories).
- Added hero section with image picker and a bundled hero.svg placeholder.
- Bundled product placeholder SVG used in the theme preview.
- Added a demo products CSV (data/products-demo.csv) you can import to seed your store with sample products (uses Unsplash source images).

Preview locally
1. Install Shopify CLI: https://shopify.dev/themes/tools/cli
2. From your machine:
   - git clone git@github.com:Milliray/milliray-luxury-theme.git
   - git checkout luxury-theme-starter
   - cd milliray-luxury-theme
   - shopify theme serve

This will run a local preview server where you can test templates/sections.

Quick upload (no CLI)
1. Download branch ZIP:
   https://github.com/Milliray/milliray-luxury-theme/archive/refs/heads/luxury-theme-starter.zip
2. In Shopify Admin → Online Store → Themes → Upload theme → choose the downloaded ZIP
3. After upload, open Customize to adjust the header (upload your logo via the Header section) and set the Hero section image or leave the bundled hero.

Import demo products (optional)
1. In Shopify Admin → Products → Import
2. Choose the file: data/products-demo.csv from the branch (download it separately from the repo or use the direct raw URL in GitHub)
3. After import, create automated collections:
   - Male: Condition -> Product tag equals "male"
   - Female: Condition -> Product tag equals "female"
   - Accessories: Condition -> Product tag equals "accessories"
4. Assign products to collections via tags or manually if needed.

Next steps I can do for you
- Replace bundled placeholders with your real hero image and product photography (upload here or via Theme Editor and I will swap into the branch).
- Create a PR from luxury-theme-starter → main with a detailed description (I can prepare the PR body for you to paste into the GitHub UI).
- Add advanced features: swatches, filters, quick view, product gallery, structured data, etc.

