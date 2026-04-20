import { prisma } from '../lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.admin.create({
    data: {
      email: 'admin@amdeli.gh',
      password: hashedPassword,
      name: 'Amdeli Admin'
    }
  })

  // Create services
  const services = [
    {
      title: 'Basic Website',
      description: 'Perfect for small businesses looking to establish an online presence',
      tags: 'Custom domain, Business email, Google SEO, Mobile-ready, Contact form',
      href: '/services/basic-website'
    },
    {
      title: 'Online Store',
      description: 'Full-featured e-commerce solution for selling products online',
      tags: 'Product dashboard, Order tracking, Paystack, MoMo, Inventory management',
      href: '/services/online-store'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive marketing services to grow your online presence',
      tags: 'Google SEO, Google Business, Social media setup, Monthly reports',
      href: '/services/digital-marketing'
    },
    {
      title: 'Maintenance',
      description: 'Ongoing support and updates for your website',
      tags: 'Monthly updates, Security monitoring, Backups, Content edits',
      href: '/services/maintenance'
    },
    {
      title: 'Custom Development',
      description: 'Tailored web applications for your specific business needs',
      tags: 'Web apps, Booking systems, Portals, API integrations',
      href: '/services/custom-development'
    },
    {
      title: 'Business Consulting',
      description: 'Strategic guidance for your digital transformation',
      tags: 'Digital strategy, Competitor research, Growth roadmap',
      href: '/services/consulting'
    }
  ]

  for (const service of services) {
    await prisma.service.create({
      data: service
    })
  }

  // Create portfolio items
  const portfolio = [
    {
      title: 'Focus Honey',
      image: '/images/focushoney.png',
      href: 'https://focushoney.com',
      description: 'E-commerce platform for honey products'
    },
    {
      title: 'Pimpinis',
      image: '/images/pimpinis1.png',
      href: 'https://pimpinis.vercel.app',
      description: 'Fashion retail website'
    },
    {
      title: 'Folio',
      image: '/images/folio.png',
      href: 'https://folio-1cvo.vercel.app/',
      description: 'Portfolio template for creatives'
    },
    {
      title: 'Juro',
      image: '/images/juro.png',
      href: 'https://juro-one.vercel.app/',
      description: 'Legal tech platform'
    },
    {
      title: 'Born Seen',
      image: '/images/bornseen.png',
      href: 'https://born-seen.vercel.app/',
      description: 'Music artist portfolio'
    }
  ]

  for (const item of portfolio) {
    await prisma.portfolio.create({
      data: item
    })
  }

  // Create hero image
  await prisma.heroImage.create({
    data: {
      imageUrl: '/images/hero-image.png',
      altText: 'Amdeli web design showcase'
    }
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })