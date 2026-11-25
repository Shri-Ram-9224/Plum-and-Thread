<div align="center">

# 🍇 Plum & Thread

### Custom Apparel Manufacturing & Bulk Garment Quotations

**A responsive B2B apparel website built with React, Vite, and Tailwind CSS.**

<br />

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Status](https://img.shields.io/badge/Project-Frontend-blue?style=flat-square)
![License](https://img.shields.io/badge/License-Not_Specified-lightgrey?style=flat-square)

</div>

---

## 📌 About the Project

**Plum & Thread** is a product-focused business website for a custom apparel and garment manufacturer based in **Tiruppur, Tamil Nadu, India**.

The website allows visitors to explore garment categories, view product and fabric specifications, configure bulk quantities, calculate estimated quotations with GST, and prepare a printable quotation.

The design uses a plum-and-gold brand identity, responsive layouts, product imagery, interactive modals, and sections explaining the manufacturing process.

> **Project type:** Frontend web application  
> **Architecture:** Single-page React application  
> **Build tool:** Vite

---

## ✨ Features

| Feature | Description |
|:--|:--|
| 📱 **Responsive Design** | Layout adapts to desktop, tablet, and mobile screens. |
| 🛍️ **Product Catalogue** | Browse apparel products with search and category filters. |
| 🎨 **Product Details** | View fabric details, GSM, colours, customization options, MOQ, and estimated turnaround. |
| 🧮 **Quotation Calculator** | Add products, update quantities, and calculate estimated order values. |
| 🧾 **GST Calculation** | Calculate item-level GST and the overall quotation total using configured product rates. |
| 🖨️ **Printable Quotation** | View and print the prepared quotation. |
| 📦 **Sample Request Form** | Enter contact, company, delivery, and fabric requirement details. |
| 🏭 **Manufacturing Workflow** | Explore the seven stages of garment production. |
| 📊 **Business Highlights** | Display manufacturing statistics and business information. |
| 💬 **Testimonials & FAQ** | Review testimonial content and expand frequently asked questions. |
| 🎉 **Interactive UI** | Product modals, quotation interactions, icons, and confetti animation. |

---

## 🧭 Website Sections

The project is currently a **single-page website**. Navigation links move visitors between sections of the same page.

| Section | What it contains |
|:--|:--|
| 🧭 Navbar | Brand navigation and quotation item count |
| 🏠 Hero | Brand introduction and primary calls to action |
| 📊 Credibility Stats | Manufacturing metrics and highlights |
| 👕 Product Catalogue | Product search, filters, and product details |
| 🧮 Quotation Studio | Product quantities and estimated quotation |
| 🏭 Manufacturing Process | Seven-stage production workflow |
| ⭐ Why Choose Us | Manufacturer advantages |
| 💬 Testimonials | Customer testimonial content |
| ❓ FAQ | Frequently asked questions |
| 📍 Footer & Contact | Business location and contact information |

---

## 🛠️ Tech Stack

### Core technologies

| Technology | Usage |
|:--|:--|
| ⚛️ **React 19** | Component-based user interface |
| 🟨 **JavaScript (ES Modules)** | Application logic and interactions |
| ⚡ **Vite 8** | Development server and production bundler |
| 🎨 **Tailwind CSS 4** | Utility-first styling |
| 🧩 **HTML5** | Web document structure |
| 🎨 **CSS3** | Global and component styling |

### Libraries and development tools

| Package | Usage |
|:--|:--|
| `react` | Builds the user interface |
| `react-dom` | Renders React components in the browser |
| `lucide-react` | Interface icons |
| `canvas-confetti` | Confetti animation in the sample request experience |
| `tailwindcss` | Utility CSS framework |
| `@tailwindcss/vite` | Tailwind CSS integration for Vite |
| `vite` | Development and production build tool |
| `@vitejs/plugin-react` | React support in Vite |
| `oxlint` | JavaScript and JSX linting |
| `@types/react` / `@types/react-dom` | React type definitions in the development toolchain |

### Typography

- **Inter** — Primary interface and body font.
- **Playfair Display** — Editorial-style headings.

Both fonts are loaded through Google Fonts in `index.html`.

---

## 📂 Project Structure

```text
Plum-and-Thread/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── CredibilityStats.jsx
│   │   ├── FaqSection.jsx
│   │   ├── FloatingQuoteBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ManufacturingProcess.jsx
│   │   ├── Navbar.jsx
│   │   ├── PrintableQuoteModal.jsx
│   │   ├── ProductCatalog.jsx
│   │   ├── ProductModal.jsx
│   │   ├── QuotationTool.jsx
│   │   ├── SampleRequestModal.jsx
│   │   ├── Testimonials.jsx
│   │   └── WhyChooseUs.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── utils/
│   │   └── formatters.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

### 📄 Important Files

| File | Responsibility |
|:--|:--|
| `src/App.jsx` | Main application component and shared state |
| `src/data/products.js` | Product catalogue and website content data |
| `src/utils/formatters.js` | Currency, percentage, and quotation formatting helpers |
| `src/components/ProductCatalog.jsx` | Product search, filtering, and catalogue UI |
| `src/components/QuotationTool.jsx` | Quotation items, quantities, and calculations |
| `src/components/PrintableQuoteModal.jsx` | Printable quotation interface |
| `src/components/SampleRequestModal.jsx` | Sample request form and confirmation UI |
| `src/index.css` | Global styles |
| `src/App.css` | Application-specific styles |
| `index.html` | HTML entry point, page metadata, favicon, and font imports |
| `vite.config.js` | Vite and Tailwind plugin configuration |

---

## 🚀 Getting Started

### ✅ Prerequisites

Install these tools before running the project:

- [Node.js](https://nodejs.org/) — use a version compatible with the installed Vite release.
- **npm** — included with Node.js.
- [Git](https://git-scm.com/) — optional, for cloning and version control.

### 1️⃣ Clone the repository

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/Plum-and-Thread.git
```

### 2️⃣ Navigate to the project

```bash
cd Plum-and-Thread
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

Open the local URL printed in your terminal. Vite commonly uses:

```text
http://localhost:5173/
```

### 5️⃣ Build for production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### 6️⃣ Preview the production build

```bash
npm run preview
```

---

## 📜 Available Commands

| Command | Description |
|:--|:--|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs Oxlint checks |

---

## 🧮 How the Quotation Works

The quotation interface uses React state to manage selected products and quantities.

The calculations include:

| Calculation | Formula |
|:--|:--|
| Item Subtotal | Unit Price × Quantity |
| Item GST | Item Subtotal × GST Rate |
| Item Total | Item Subtotal + Item GST |
| Grand Total | Sum of all item totals |
| Total Pieces | Sum of all selected quantities |

**Note:** Product prices and GST rates are stored in local product data. Verify the applicable prices and tax rates before using the generated figures for an actual commercial quotation.

---

## 👕 Product Data

Product information is maintained in:

```text
src/data/products.js
```

Product entries can contain:

- Product ID and name
- Product category
- Unit price and GST rate
- Description
- Fabric composition and GSM
- Use cases
- Customization methods
- Available colours
- Minimum order quantity (MOQ)
- Estimated turnaround time
- Product image URL

To add or edit a product, update the `PRODUCTS` array. Product categories are maintained in the `CATEGORIES` array.

---

## ⚠️ Current Scope & Limitations

This repository contains a **frontend-only React application**. The inspected source does not include a backend API, database, authentication system, or payment integration.

| Area | Current implementation |
|:--|:--|
| 🧮 Quotation | Managed in frontend React state |
| 💾 Persistent storage | Cart persistence is not implemented |
| 📩 Sample requests | Client-side form handling and on-screen confirmation |
| 🗄️ Database | Not included |
| 🔐 Authentication | Not included |
| 💳 Payment gateway | Not included |
| 🛠️ Admin dashboard | Not included |

### Before using it in production

- Connect the sample request form to a backend API or trusted form service so requests are actually delivered and stored.
- Add server-side validation and spam protection.
- Add suitable privacy and consent messaging before collecting customer information.
- Verify product prices, GST rates, testimonials, statistics, and business claims.
- Confirm contact details and address.
- Consider hosting optimized product images locally or through an image service.

---

## 🎨 Customization

| What you want to change | Where to edit |
|:--|:--|
| Products and prices | `src/data/products.js` |
| Product categories | `src/data/products.js` |
| Manufacturing stages and FAQ content | `src/data/products.js` |
| Brand colours and theme | `tailwind.config.js`, `src/index.css` |
| Component styles | `src/App.css` |
| Contact details | `src/components/Footer.jsx` |
| Page title and metadata | `index.html` |
| Font imports | `index.html` |

---

## 🌐 Deployment

The project produces a static website build and can be deployed to:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

### General deployment steps

1. Push the project to your GitHub repository.
2. Import the repository into your hosting provider.
3. Set the install command to `npm install`.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy and test the live website on desktop and mobile.

> **GitHub Pages note:** For a repository-based Pages URL, configure the Vite `base` option to match the repository path before building.

---

## 📄 License

No `LICENSE` file was present in the supplied project. Add a license file and choose the appropriate license before allowing others to reuse, modify, or redistribute this project.

---

<div align="center">

### 🍇 Plum & Thread

**Crafting quality. Stitching trust.**

Built with ❤️ using React, Vite, and Tailwind CSS.

</div>
