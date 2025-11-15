# EmailJS Setup Guide - WORKING SOLUTION

EmailJS is the most reliable free email service for contact forms. Follow these steps:

## Step 1: Create EmailJS Account (2 minutes)

1. Go to https://www.emailjs.com/
2. Click "Sign Up Free"
3. Sign up with any email (or use: lennyymartin773@gmail.com)
4. Verify your email

## Step 2: Add Email Service (1 minute)

1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account" and sign in with: **lennyymartin773@gmail.com**
5. Note your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template (2 minutes)

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save and note your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abc123XYZ`)

## Step 5: Update Contact.tsx

Open `src/components/Contact.tsx` and replace these values:

```typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

Example:
```typescript
const result = await emailjs.send(
  'service_abc123',
  'template_xyz789',
  templateParams,
  'abc123XYZ'
);
```

## Step 6: Test It!

1. Save the file
2. Redeploy your site
3. Submit a test message
4. Check your email: lennyymartin773@gmail.com

## ✅ Benefits

- **Free**: 200 emails/month
- **Works immediately** - no delays
- **Reliable** - used by thousands of developers
- **No backend needed**
- **Email notifications**
- **Dashboard to view submissions**

## Troubleshooting

If emails don't arrive:
1. Check EmailJS dashboard for errors
2. Verify Service ID, Template ID, and Public Key are correct
3. Make sure Gmail service is connected
4. Check spam folder

## Alternative: Environment Variables (Recommended)

Store your keys securely in `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then use in code:
```typescript
const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
```

This is the BEST solution - it will work 100%!
