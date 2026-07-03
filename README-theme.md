# Milliray Luxury Theme — Starter

This branch contains a minimal Online Store–compatible starter theme scaffold focused on a photography-forward luxury aesthetic.

What is included
- layout/theme.liquid
- templates: index, product, collection, cart
- sections: hero, featured-collection, product-template, footer
- snippets: product-card
- assets: base.css, theme.js
- config/settings_schema.json and locales

Preview locally
1. Install Shopify CLI: https://shopify.dev/themes/tools/cli
2. From your machine:
   - git clone git@github.com:Milliray/milliray-luxury-theme.git
   - git checkout luxury-theme-starter
   - cd milliray-luxury-theme
   - shopify theme serve

This will run a local preview server where you can test templates/sections.

To install on your store
- Use Shopify CLI deploy commands (shopify theme push) or upload the theme zip via the Shopify admin Themes page.

Next steps I can do for you
- Add product templates, swatches, filters, and improved accessibility.
- Integrate a refined stylesheet and custom fonts (Playfair Display + Inter) and replace placeholder images.
- Create a PR against main with this branch ready for review.

