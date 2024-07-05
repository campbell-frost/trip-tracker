# Trip Tracker

Trip Tracker is a Next.js application that helps users track their vacations using Supabase for backend services.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Supabase](https://supabase.com/)
  - PostgreSQL database
  - Authentication
- [Vercel](https://vercel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Features

- User authentication
- Create, read, update, and delete vacation entries
- View vacation history

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/campbell-frost/trip-tracker
    ```

2. **Navigate to the project directory:**
    ```sh
    cd trip-tracker
    ```

3. **Install dependencies:**
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

4. **Set up environment variables:**
    Create a `.env.local` file in the root directory and add the following:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

5. **Run the development server:**
    ```sh
    npm run dev
    ```
    or
    ```sh
    yarn dev
    ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.**

## Deployment

This project is set up to be easily deployed on Vercel. Connect your GitHub repository to Vercel, and it will automatically deploy your main branch.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
