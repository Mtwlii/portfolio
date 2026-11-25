export const links = {
  github: 'https://github.com/Mtwlii',
  linkedin: 'https://www.linkedin.com/in/mtwlii',
  email: 'mailto:metwlii.dev@gmail.com',
}

export type Project = {
  n: string
  title: string
  kind: string
  story: string
  stack: string
  live?: string
  code: string
}

export const projects: Project[] = [
  {
    n: '01',
    title: 'FreshCart',
    kind: 'Online store',
    story:
      'A full store on the Next.js App Router: server-rendered product pages, login with NextAuth and protected routes, and a Stripe checkout with cart, wishlist and order history. Deployed on Vercel.',
    stack: 'Next.js, TypeScript, Tailwind, NextAuth, Stripe',
    live: 'https://e-commerce-jet-phi.vercel.app/',
    code: 'https://github.com/Mtwlii/E-Commerce',
  },
  {
    n: '02',
    title: 'SocialHub',
    kind: 'Social app',
    story:
      'Posts with image upload, follows, bookmarks and profiles. I used it to get serious about server state: TanStack Query caching so the app stops refetching the same data, forms checked with React Hook Form and Zod, plus a dark mode and Framer Motion animations.',
    stack: 'React, Vite, TanStack Query, Zod, Framer Motion',
    live: 'https://socialhub-blond-delta.vercel.app/login',
    code: 'https://github.com/Mtwlii/social-app',
  },
  {
    n: '03',
    title: 'NGL App',
    kind: 'Backend API',
    story:
      'The backend for an anonymous messaging app. Sign-up with hashed passwords, email OTP codes that expire after 5 minutes, JWT login, password reset and Google Sign-In. Requests and env variables are validated with Zod, OTP routes are rate limited, and repeated GET requests are cached in Redis.',
    stack: 'Node.js, Express, MongoDB, Redis, JWT',
    code: 'https://github.com/Mtwlii/ngl-app',
  },
  {
    n: '04',
    title: 'EVO Café menu',
    kind: 'Website for a café',
    story:
      'A bilingual menu site, Arabic right-to-left and English, with more than 15 categories. Dark with gold details to match the café. Plain HTML, CSS and JavaScript, live on Vercel.',
    stack: 'HTML, CSS, JavaScript',
    live: 'https://evo-caffe-menu.vercel.app/',
    code: 'https://github.com/Mtwlii/EVO-Caffe-Menu',
  },
]

export const stack = [
  ['Front end', 'React, Next.js (App Router), TypeScript, Redux, Tailwind, TanStack Query, React Hook Form, Framer Motion'],
  ['Back end', 'Node.js, Express, MongoDB with Mongoose, Redis, JWT, Google OAuth, Zod, Stripe, Nodemailer'],
  ['Tools', 'Git, GitHub, Vercel, Postman, Figma, Chrome DevTools'],
  ['Also', 'C++ and Python, which I teach'],
]

export const timeline = [
  ['2026', 'Online instructor', 'Teaching C++, Python and CS fundamentals to university students.'],
  ['2026', 'Elevate', 'About 3 months of advanced React and Next.js as a front-end trainee.'],
  ['2023 to now', 'Freelance full-stack developer', 'EVO Café menu site, third-party APIs and Stripe payments in store projects.'],
  ['2023 to 2024', 'Route Academy', 'Front-end track (React, Next.js, TypeScript). The back-end track is in progress.'],
  ['2019 to 2023', 'Mansoura University', "Bachelor's degree, Faculty of Commerce."],
]
