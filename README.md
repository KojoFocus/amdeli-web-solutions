# Amdeli Web Solutions

A minimalistic, modern website for a Ghanaian web solutions company, built with Next.js and Tailwind CSS.

## Features

- 🎨 Dark, minimalistic design inspired by the original flyer
- 📱 Fully responsive (mobile-first approach)
- ⚡ Fast loading with Next.js optimization
- 🎭 Smooth animations with Framer Motion
- 💳 Ghana-focused (MoMo integration mentioned)
- 🎯 Clear call-to-actions
- 📊 Service showcase
- 💰 Simple pricing display

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
amdeli-web/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main landing page
├── public/               # Static assets
├── package.json
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## Sections

1. **Hero** - Powerful message from the original flyer
2. **Services** - 6 core service offerings with details
3. **Pricing** - Two clear pricing tiers (Basic & Online Store)
4. **About** - Why choose Amdeli + urgency CTA (8 spots left)
5. **Contact** - Phone and email with CTA
6. **Footer** - Links and company info

## Customization

### Colors

The main brand colors are defined in `tailwind.config.js`:
- Dark background: `#1a1a1a`
- Gold accent: `#c4a747`

### Content

All content is in `app/page.tsx`:
- Update the `services` array for service offerings
- Update the `pricingPlans` array for pricing tiers
- Modify text directly in JSX for other sections

### Contact Information

Update these throughout the site:
- Phone: `0540 484 052`
- Email: `hello@amdeli.gh`

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Performance

- Server-side rendering with Next.js
- Optimized fonts (Google Fonts with display=swap)
- Minimal JavaScript bundle
- Mobile-first responsive design

## Deployment

Deploy easily to Vercel:

```bash
vercel
```

Or build and deploy to any hosting provider that supports Node.js.

## License

This project is for Amdeli Web Solutions.
