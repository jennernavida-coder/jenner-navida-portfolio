# Jenner Alperez Navida — Portfolio

A static portfolio website built with HTML, CSS, and JavaScript. The Projects section contains four student activity examples with local images in `assets/projects/`.

## Run locally

From this folder, run:

```bash
python3 server.py
```

Then open `http://localhost:3000`. You may also use Live Server in VS Code by opening this folder and starting it from `index.html`.

## Edit project cards

Project entries are in the `projects` array near the top of `script.js`. Edit the title, category, description, year, tools, role, status, features, image path, and optional links there. Category and year filters update from the project data. Image files belong in `assets/projects/`; the full instructions are in `PROJECTS-EDITING-GUIDE.md`.

The current cards are drafts based on supplied coursework files. Before publishing, confirm your personal contribution, dates, and exact tools. The Maze material documents test setup, not participant results; the Figma file shows design screens but does not establish a working clickable prototype.

## Before publishing

Replace `assets/cv-placeholder.pdf` with your real CV. Update the email, phone, social links, canonical URL, and sitemap in `index.html` and the metadata files. Test the site on desktop and mobile and check every link before submission. The project has no build step and can be hosted on GitHub Pages or another static host.
