Plum & Thread

A responsive, single-page B2B apparel manufacturing website for Plum & Thread, showcasing custom garment production, product specifications, manufacturing capabilities, and an interactive quotation workflow. The website is positioned around Tiruppur, Tamil Nadu, India, and presents apparel options for brands, businesses, institutions, and bulk buyers.



Project type: Front-end web application
Build tool: Vite
UI library: React
Styling: Tailwind CSS




Table of Contents


Overview

Key Features

Pages and Sections

Technology Stack

Project Structure

Getting Started

Available Scripts

Quotation Calculation

Product Data

Current Scope and Limitations

Customization

Deployment

License


Overview

Plum & Thread is a product-focused business website concept for a custom clothing and garment manufacturer. It helps visitors explore garment categories, review fabric and customization specifications, estimate bulk-order costs, and prepare a printable quotation.


The interface uses a plum-and-gold visual identity, responsive layouts, product imagery, interactive modals, and dedicated sections describing the manufacturing workflow and business advantages.


Key Features

1. Responsive landing page


Single-page layout with navigation to the main website sections.

Responsive navigation menu for smaller screens.

Hero section with calls to action for product exploration and sample requests.

Consistent Plum & Thread brand styling.


2. Product catalogue


Product catalogue covering multiple apparel and accessory categories.

Search and category filtering.

Grid and table/list presentation options.

Product cards with pricing and key information.

Product detail modal with fabric information, available colours, customization options, recommended minimum quantities, and turnaround estimates.

Add products and quantities to the quotation.


3. Interactive quotation studio


Add products to a quotation and update quantities.

Remove individual products or clear the quotation.

Live calculation of total pieces and estimated order value.

Product-specific GST rates.

Item-level and overall quotation calculations.

Printable quotation view.


4. Sample request interface


Sample request modal with contact and company information fields.

Captures delivery address and fabric/specification notes in the form UI.

Displays an on-screen confirmation state after submission.


5. Manufacturing process


Seven-stage manufacturing process presentation:
Yarn sourcing and knitting
Dyeing and compacting
Pattern making and cutting
Printing and embroidery
Garment assembly and stitching
Quality inspection
Ironing, packaging, and dispatch

Stage descriptions, lead-time information, and process highlights.


6. Business information and trust sections


Manufacturing credibility statistics.

Reasons to choose the manufacturer.

Customer testimonial section.

FAQ accordion.

Footer with business location and contact information.


7. UI and interaction details


Product, printable quotation, and sample request modals.

Icons from Lucide React.

Confetti effect in the sample request experience.

Currency and quotation formatting utilities.

Google Fonts integration for Inter and Playfair Display.


Pages and Sections

The application is currently a single-page website, not a multi-route application.


Section	Purpose
Navbar	Brand navigation and quotation item count
Hero	Brand introduction and primary calls to action
Credibility Stats	Manufacturing metrics and credibility indicators
Product Catalogue	Browse, search, filter, and inspect products
Quotation Studio	Manage quantities and calculate estimated costs
Manufacturing Process	Explain the seven-stage production workflow
Why Choose Us	Present manufacturer advantages
Testimonials	Display customer testimonial content
FAQ	Answer common buyer questions
Footer / Contact	Show location and contact information

Technology Stack

Core technologies

Technology	Purpose
HTML5	Application document structure
CSS3	Styling foundations and custom styles
JavaScript (ES Modules)	Application logic and interactions
React 19	Component-based user interface
React DOM	Rendering the React application
Vite 8	Development server and production build
Tailwind CSS 4	Utility-first styling
@tailwindcss/vite	Tailwind CSS integration with Vite

Libraries and tools

Package	Purpose
lucide-react	Icons used throughout the interface
canvas-confetti	Confetti animation in the sample request experience
autoprefixer	CSS vendor-prefix processing
postcss	CSS transformation tooling
oxlint	JavaScript/JSX linting

Development dependencies


@vitejs/plugin-react – React integration for Vite.

@types/react and @types/react-dom – React type definitions included in the development toolchain.

vite – Local development and production bundling.

oxlint – Static code analysis.


Fonts


Inter – Main interface/body font.

Playfair Display – Editorial/serif heading font.


Fonts are loaded from Google Fonts in index.html.


Project Structure

Plum-and-Thread/
├── public/
│   ├── favicon.svg
│   └── icons.svg
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
│   ├── data/
│   │   └── products.js
│   ├── utils/
│   │   └── formatters.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md

Important files


src/App.jsx – Main application component and shared quotation/modal state.

src/data/products.js – Product catalogue, categories, manufacturing stages, metrics, testimonials, and FAQ content.

src/utils/formatters.js – Currency, percentage, and quotation helper functions.

src/components/ProductCatalog.jsx – Product search, filtering, and catalogue presentation.

src/components/QuotationTool.jsx – Interactive quotation management and calculations.

src/components/PrintableQuoteModal.jsx – Printable quotation interface.

src/components/SampleRequestModal.jsx – Sample request form and confirmation UI.

src/index.css and src/App.css – Global styles and application-specific styles.

vite.config.js – Vite and Tailwind CSS plugin configuration.


Getting Started

Prerequisites

Install the following before running the project:



Node.js (a current version compatible with the installed Vite release)

npm (included with Node.js)

Git (optional, for cloning and version control)


1. Clone the repository

git clone https://github.com/YOUR_USERNAME/Plum-and-Thread.git

2. Open the project folder

cd Plum-and-Thread

3. Install dependencies

npm install

4. Start the development server

npm run dev

Vite will print a local URL in the terminal, usually:


http://localhost:5173/

Open that address in your browser.


5. Create a production build

npm run build

The optimized production files are generated in the dist/ directory.


6. Preview the production build locally

npm run preview

Available Scripts

Command	Description
npm run dev	Starts the Vite development server
npm run build	Builds the production application into dist/
npm run preview	Serves the production build locally
npm run lint	Runs Oxlint checks

Quotation Calculation

The quotation interface maintains product quantities in React state. The application calculates:



Item subtotal: product unit price × selected quantity.

Item GST: item subtotal × the GST rate configured for that product.

Item total: item subtotal + item GST.

Grand total: sum of all item totals.

Total pieces: sum of all selected product quantities.


The product prices and GST rates are currently maintained in the local product data file. Treat displayed prices and tax rates as configurable example/business data and verify them before using the application for actual commercial quotations.


Product Data

Product definitions are maintained in src/data/products.js. Each product can include:



Product ID and display name

Category

Unit price

GST rate

Product description

Fabric composition and GSM

Intended use cases

Customization methods

Available colours and colour values

Recommended minimum quantity

Estimated turnaround time

Product image URL


To add or edit a product, update the PRODUCTS array in that file. Category names are maintained in the CATEGORIES array.


Current Scope and Limitations

This repository contains a front-end React application. The inspected project does not include a server-side API, database, authentication system, or payment integration.


Important implementation notes:



Quotation items are held in React component state; persistent cart storage is not implemented.

The sample request form currently provides client-side form handling and an on-screen success state. A backend or email service must be connected to actually deliver and store submitted requests.

The printable quotation interface is part of the front-end experience; validate the final document and business/tax details before issuing it as an official quotation.

Product information, testimonials, manufacturing statistics, contact details, and prices are maintained as local website content. Confirm that all business claims and contact details are accurate before publishing.

Product photographs are referenced through external image URLs. For production use, consider hosting approved, optimized images in the project or a dedicated image service.

No admin dashboard or content management system is included.


Customization

Update products and prices

Edit src/data/products.js, especially the PRODUCTS and CATEGORIES arrays.


Update manufacturing stages and website content

The same data file contains manufacturing steps, metrics, testimonials, and FAQ data. Update those entries with verified business information.


Update brand colours and fonts


Tailwind theme configuration: tailwind.config.js

Global styles: src/index.css

Component styles: src/App.css

Font imports and page metadata: index.html


Update contact information

Edit the contact details and address content in src/components/Footer.jsx.


Add a real sample-request workflow

Connect the form in src/components/SampleRequestModal.jsx to a backend endpoint or a trusted form/email service. Add server-side validation, spam protection, consent/privacy messaging, and secure handling of personal information before collecting real customer data.


Deployment

The production build is a static website and can be deployed to static hosting providers such as:



Vercel

Netlify

GitHub Pages (with the appropriate Vite base-path configuration)


General deployment steps:



Push the project to a GitHub repository.

Configure the hosting provider to install dependencies with npm install.

Set the build command to npm run build.

Set the publish/output directory to dist.

Deploy and test the production URL, including responsive layouts and modal interactions.


For GitHub Pages project sites, configure Vite's base option to match the repository path before building.


License

No license file was present in the supplied project. Add a LICENSE file and choose an appropriate license before permitting reuse, modification, or redistribution.



Built with React, Vite, and Tailwind CSS.

