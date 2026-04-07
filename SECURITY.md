# Security Policy

## Overview

This document outlines the security practices and policies for the File Sharing App.

## Environment Variables

### Public Variables (Safe to expose)
Variables prefixed with `NEXT_PUBLIC_` are exposed in the browser and are considered public:
- `NEXT_PUBLIC_FIREBASE_*` - Firebase configuration (public keys only)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk public key

### Secret Variables (NEVER expose)
These variables should ONLY exist on the server and in `.env.local`:
- `CLERK_SECRET_KEY` - Clerk secret key
- Any database credentials
- Any API secrets

## Security Best Practices

### 1. Never Commit Secrets
```bash
# ✅ Good - .gitignore prevents accidental commits
.env.local
.env.*.local

# ❌ Bad - Never commit these files
git add .env.local
```

### 2. Use Environment Variables
```javascript
// ✅ Good
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

// ❌ Bad
const apiKey = "AIzaSyCtyJ0kuvbIN30oLdQw6ji5GFZYihFdYuw";
```

### 3. Firebase Security Rules
Ensure your Firebase Firestore and Storage rules are properly configured:
```
- Only authenticated users can upload files
- Users can only access their own files
- Shared files have specific permissions
```

### 4. Clerk Authentication
- Always use Clerk middleware for protecting routes
- Verify user identity before operations
- Use server-side validation

### 5. File Upload Validation
- Validate file types on the server
- Limit file sizes
- Scan for malicious content
- Implement rate limiting

## Reporting Security Issues

If you discover a security vulnerability, please email security@example.com instead of using the issue tracker.

## Credential Rotation

### Firebase Credentials
1. Go to Firebase Console
2. Project Settings → Service Accounts
3. Generate new keys
4. Update `.env.local`
5. Redeploy application

### Clerk Credentials
1. Go to Clerk Dashboard
2. API Keys section
3. Rotate secret keys
4. Update `.env.local`
5. Redeploy application

## Deployment Checklist

Before deploying to production:
- [ ] All secrets are in environment variables
- [ ] `.env.local` is in `.gitignore`
- [ ] No hardcoded credentials in source code
- [ ] Firebase security rules are configured
- [ ] Clerk environment variables are set
- [ ] HTTPS is enabled
- [ ] Rate limiting is implemented
- [ ] File upload validation is enabled
- [ ] User authentication is required for file access

## Audit Log

Keep track of:
- User registrations
- File uploads/deletions
- File sharing actions
- Access attempts to shared files

## Additional Resources

- [Firebase Security Best Practices](https://firebase.google.com/docs/security/best-practices)
- [Clerk Security Documentation](https://clerk.com/docs/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/basic-features/environment-variables)

---

Last Updated: 2026-04-07