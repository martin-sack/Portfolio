# Getform Setup - Contact Form

## Quick Setup (2 minutes)

Your contact form is configured to use Getform.io - you just need to create your form endpoint.

### Step 1: Create Getform Account

1. Go to https://getform.io
2. Click "Sign Up Free"
3. Sign up with: **lennyymartin773@gmail.com**
4. Verify your email

### Step 2: Create a Form

1. Click "+ Create Form"
2. Name it: "Portfolio Contact"
3. Set email to: **lennyymartin773@gmail.com**
4. Copy your form endpoint (looks like: `https://getform.io/f/YOUR_FORM_ID`)

### Step 3: Update Contact.tsx

Open `src/components/Contact.tsx` and find this line:

```typescript
const response = await fetch('https://getform.io/f/bkkgvdob', {
```

Replace `bkkgvdob` with your actual form ID:

```typescript
const response = await fetch('https://getform.io/f/YOUR_FORM_ID', {
```

### Step 4: Test It

1. Save and redeploy
2. Submit a test message
3. Check your email: lennyymartin773@gmail.com

## ✅ Benefits

- **Free**: 50 submissions/month
- **No confirmation needed** - works immediately
- **Email notifications**
- **Spam protection**
- **Submissions dashboard**
- **Export data as CSV**

## Why Getform?

- More reliable than Web3Forms
- Simpler than Formspree
- Works immediately after setup
- Better free tier
- No verification delays
