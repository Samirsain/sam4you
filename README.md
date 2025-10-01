# Sam4You - Digital Agency Website

A modern, responsive marketing website for Sam4You digital agency built with Next.js, Tailwind CSS, and shadcn/ui with Supabase integration.

## Features

- 🎨 Modern dark theme with indigo accent colors
- 📱 Fully responsive design (mobile-first)
- ⚡ Built with Next.js 15 App Router
- 🎭 Smooth animations and transitions
- 🔍 SEO optimized with meta tags
- 🎯 Conversion-focused design
- 📝 Blog-ready structure (MDX support)
- 🛠️ AI Tools showcase section
- 💼 Portfolio/Projects section
- 💬 Testimonials carousel
- ❓ FAQ accordion
- 📧 Contact form with WhatsApp integration

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **Fonts:** Geist Sans & Geist Mono
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this project

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and theme
│   ├── blog/               # Blog pages
│   ├── tools/              # AI tools pages
│   ├── privacy/            # Privacy policy
│   └── terms/              # Terms of service
├── components/
│   ├── header.tsx          # Sticky header with navigation
│   ├── hero.tsx            # Hero section
│   ├── services.tsx        # Services grid
│   ├── ai-tools.tsx        # AI tools showcase
│   ├── portfolio.tsx       # Featured projects
│   ├── blog-section.tsx    # Latest blog posts
│   ├── testimonials.tsx    # Client testimonials
│   ├── faq.tsx             # FAQ accordion
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer with links
│   └── ui/                 # shadcn/ui components
└── README.md
\`\`\`

## Customization

### Update Content

1. **Company Name:** Search and replace "Same4You" throughout the project
2. **Contact Info:** Update email and WhatsApp links in `components/contact.tsx`
3. **Social Media:** Update social links in `components/footer.tsx`
4. **Services:** Edit the services array in `components/services.tsx`
5. **Projects:** Update portfolio items in `components/portfolio.tsx`
6. **Blog Posts:** Add MDX files to `/content/posts/` (structure ready)

### Theme Colors

Edit `app/globals.css` to customize the color scheme:
- `--primary`: Main brand color (currently indigo)
- `--background`: Page background
- `--foreground`: Text color
- `--accent`: Accent color for highlights

### Add Blog Posts

Create MDX files in a `/content/posts/` directory:

\`\`\`mdx
---
title: "Your Post Title"
date: "2025-03-15"
category: "SEO"
excerpt: "Brief description..."
---

Your content here...
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Supabase Setup

1. **Create a Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Get your project URL and anon key

2. **Set up Database:**
   - Run the SQL schema from `supabase/schema.sql` in your Supabase SQL editor
   - This creates the `contact_messages` table with proper security policies

3. **Environment Variables:**
   Create a `.env.local` file in your project root:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

Get these values from: Project Settings → API → Project URL & anon public key

## SEO

The site includes:
- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with Next.js Image
- Sitemap ready (add `sitemap.ts` in app directory)
- robots.txt ready

## Performance

- Optimized images with Next.js Image component
- Code splitting with App Router
- Lazy loading for components
- Minimal JavaScript bundle

## Support

For issues or questions:
- Email: devxmir@gmail.com
- WhatsApp: +91 9352410667

## License

This project is ready for commercial use. Customize as needed for your agency.

---

Built with ❤️ using Next.js and v0
