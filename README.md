# Minimalist Academic & Professional Personal Website

A clean, modern, accessible, and responsive personal website designed for researchers, scholars, educators, and professionals.

## 🌟 Pages & Structure

1. **`index.html` (Home)**
   - Two-column hero section (stacked on mobile) with photo placeholder, bio, contact email, and subtle Google Scholar & LinkedIn links.
   - **Current Updates**: Chronological list of recent news, publications, awards, or talks (newest first).

2. **`current-work.html` (Current Work)**
   - Page overview of research agenda.
   - Dedicated sections for projects / research areas with key questions, methods, collaborators, status badges, and output links.

3. **`aac-parent-support.html` (AAC Parent Support Group)**
   - Community engagement, public education & outreach, and service initiatives.
   - Selected activities list with dates, partner organizations, and resource links.

4. **`cv.html` (Curriculum Vitae)**
   - Academic CV formatting with Education, Appointments, Publications, Grants & Honors, Teaching, and Service.
   - Includes a PDF download button placeholder and print-optimized stylesheet (`@media print`).

---

## 🚀 How to View Locally

You can open `index.html` directly in any web browser (Chrome, Safari, Firefox, Edge), or start a local development server using Python:

```bash
# In this directory:
python3 -m http.server 8000
```
Then visit [`http://localhost:8000`](http://localhost:8000) in your browser.

---

## ✏️ Customization & Editing Guide

All personal information is explicitly marked with clear `[PLACEHOLDERS]` across the HTML files:

| Placeholder | How to replace |
|---|---|
| `[YOUR NAME]` | Replace with your full name across all HTML files. |
| `[YOUR EMAIL]` | Replace with your email address (and in `mailto:` links). |
| `[GOOGLE SCHOLAR URL]` | Replace with your Google Scholar profile URL. |
| `[LINKEDIN URL]` | Replace with your LinkedIn profile URL. |
| `assets/images/photo-placeholder.svg` | Replace with your profile photo (e.g. `assets/images/photo.jpg`), updating the `src` attribute in `index.html`. |
| `[Write a short 2–4 sentence biography...]` | Replace with your short intro bio on `index.html`. |

---

## 📱 Features & Accessibility

- **Responsive Design**: Mobile hamburger menu, flexible CSS grid/flexbox layouts.
- **Accessibility**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`), keyboard navigation, focus indicators, and WCAG AA contrast standards.
- **Fast Loading & Lightweight**: Zero build step required, static HTML/CSS/JS.
- **Print Friendly**: Built-in print stylesheet on the CV page for clean PDF generation directly from the browser print dialog (`Cmd + P` or `Ctrl + P`).

---

## 🌐 Free Deployment Options

- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages in Repository Settings -> Pages.
- **Netlify / Vercel**: Drag and drop this folder or connect your Git repository for instant automated hosting.
