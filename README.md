# File Sharing App

A modern, secure file-sharing application built with Next.js 14, React 18, Firebase, and Clerk authentication.

## Features

- 🔐 **Secure Authentication** - User authentication via Clerk
- 📁 **File Upload & Storage** - Upload and store files in Firebase Storage
- 🔗 **File Sharing** - Generate and share secure file links
- 👥 **User Management** - Manage your files and shared links
- 🎨 **Modern UI** - Built with Tailwind CSS and Lucide React icons
- ⚡ **Fast Performance** - Next.js 14 with server-side optimization

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Lucide React
- **Authentication**: Clerk
- **Backend/Storage**: Firebase (Firestore, Storage)
- **Deployment Ready**: Vercel compatible

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- A Firebase project ([Create one here](https://firebase.google.com))
- A Clerk account ([Sign up here](https://clerk.com))

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/timalsina2000/file-sharing-app.git
cd file-sharing-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

### 4. Configure Firebase

1. Go to your [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select an existing one
3. Go to Project Settings → General
4. Scroll down to "Your apps" and click "Web" if not already created
5. Copy your Firebase configuration values
6. Update your `.env.local` file with these values:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. Configure Clerk

1. Go to your [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Copy your API keys from the "API Keys" section
4. Update your `.env.local` file:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

### 6. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
file-sharing-app/
├── app/                    # Next.js app directory
│   ├── page.js            # Home page
│   ├── layout.js          # Root layout
│   ├── sign-in/           # Clerk sign-in page
│   └── sign-up/           # Clerk sign-up page
├── public/                # Static files
├── firebaseConfig.js      # Firebase initialization
├── middleware.ts          # Clerk authentication middleware
├── .env.example           # Environment variables template
├── .env.local            # Local environment variables (not committed)
└── package.json          # Project dependencies
```

## Security Best Practices

⚠️ **IMPORTANT**: Never commit `.env.local` to version control. The `.gitignore` file is configured to exclude it.

- Firebase API keys are prefixed with `NEXT_PUBLIC_` - they're safe to expose in the browser
- `CLERK_SECRET_KEY` should NEVER be exposed - it's kept server-side only
- Always use environment variables for sensitive configuration
- Never hardcode credentials in your source code

## Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and select your repository
4. Add your environment variables in the dashboard
5. Click "Deploy"

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## API Reference

### Authentication

User authentication is handled by Clerk middleware. Protected routes automatically redirect unauthenticated users to the sign-in page.

### File Operations

- Upload files to Firebase Storage
- Generate secure download links
- Delete files from storage
- Share files with other users

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please [open an issue](https://github.com/timalsina2000/file-sharing-app/issues) on GitHub.

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)