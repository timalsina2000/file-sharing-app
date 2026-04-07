# Setup Guide

Complete step-by-step setup instructions for the File Sharing App.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Firebase Setup](#firebase-setup)
3. [Clerk Setup](#clerk-setup)
4. [Local Development](#local-development)
5. [Testing](#testing)
6. [Deployment](#deployment)

## Prerequisites

Required tools:
- Node.js 18 or higher ([Download](https://nodejs.org/))
- npm, yarn, or pnpm
- Git
- A text editor (VS Code recommended)
- A GitHub account (for version control)

Accounts needed:
- [Firebase Account](https://firebase.google.com) - Free tier available
- [Clerk Account](https://clerk.com) - Free tier available

## Firebase Setup

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create project" or "Add project"
3. Enter project name: `file-sharing-app`
4. Click "Continue"
5. Disable Google Analytics (optional)
6. Click "Create project"

### Step 2: Enable Firestore Database

1. In Firebase Console, click "Build" → "Firestore Database"
2. Click "Create Database"
3. Select "Start in test mode" (for development)
4. Choose location closest to you
5. Click "Create"

### Step 3: Enable Storage

1. In Firebase Console, click "Build" → "Storage"
2. Click "Get Started"
3. Click "Start in test mode"
4. Click "Done"

### Step 4: Get Firebase Configuration

1. Click Project Settings (gear icon) → "General"
2. Scroll to "Your apps" section
3. Click Web icon (</>) if not created
4. Name your app: `file-sharing-app`
5. Click "Register app"
6. Copy the configuration object

### Step 5: Add to Environment Variables

Add these to your `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Clerk Setup

### Step 1: Create Clerk Application

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Click "Create Application"
3. Choose authentication methods (Email/Password recommended for start)
4. Click "Create application"

### Step 2: Get API Keys

1. Go to "API Keys" in left sidebar
2. Copy "Publishable Key" and "Secret Key"

### Step 3: Add to Environment Variables

Add to your `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### Step 4: Create Sign-in/Sign-up Pages

Clerk provides hosted UIs. Create these pages:

1. Create `app/sign-in/[[...index]]/page.js`:
```javascript
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}
```

2. Create `app/sign-up/[[...index]]/page.js`:
```javascript
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return <SignUp />;
}
```

## Local Development

### Step 1: Clone Repository

```bash
git clone https://github.com/timalsina2000/file-sharing-app.git
cd file-sharing-app
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create `.env.local`

```bash
cp .env.example .env.local
```

Fill in all the environment variables from Firebase and Clerk setup.

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] Sign-up page works
- [ ] Can create new account
- [ ] Sign-in with new account works
- [ ] Dashboard loads after sign-in
- [ ] Can upload files
- [ ] Can share files
- [ ] Can delete files
- [ ] Sign-out works

### Testing File Upload

1. Sign in to application
2. Go to Dashboard
3. Upload a test file
4. Verify file appears in list
5. Generate share link
6. Copy link and test in incognito window

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Add environment variables from `.env.local`
6. Click "Deploy"

### Deploy to Other Platforms

See deployment guides:
- [Netlify](https://www.netlify.com/with/nextjs/)
- [Railway](https://railway.app)
- [Render](https://render.com)

## Troubleshooting

### Issue: Firebase credentials not loading
**Solution**: Ensure all `NEXT_PUBLIC_FIREBASE_*` variables are in `.env.local` and restart dev server.

### Issue: Clerk authentication not working
**Solution**: Verify `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are correct.

### Issue: Port 3000 already in use
**Solution**: `npm run dev -- -p 3001` to use different port.

### Issue: Module not found errors
**Solution**: 
```bash
rm -rf node_modules
npm install
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Need help? Check the README.md or open an issue on GitHub.