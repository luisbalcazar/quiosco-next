## Quiosco App

E-commerce web application for a restaurant, featuring screens to browse and add products by category, manage products and orders, and review and approve orders.

## Tech Stack

- Frontend: React / Next.js / Zustand / ZOD
- Database: PostgreSQL
- ORM/ODM: Prisma
- Styling: TailwindCSS / CSS

## Features

- Routing management with App Router and Next.js
- CRUD operations using Prisma and PostgreSQL
- Global state management with Zustand
- Responsive UI built with TailwindCSS
- Schema validation using Zod

## Project Structure

/client → Frontend (React / Next)
/server → Next (SSR)
/prisma → Database schema

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/luisbalcazar/quiosco-next

# Install dependencies
npm install

# Run project
npm run dev
```

## Technical Highlights

- Database implementation and integration using Prisma ORM
- Full-stack application structure using Next.js
- Implementation of Server-Side Rendering (SSR) to improve performance

## Future Improvements

- Add testing with Jest
- Improve UX
- Add full-screen product modal
- Add user authentication and role management
