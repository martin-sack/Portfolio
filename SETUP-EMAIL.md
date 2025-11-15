# Email Setup Guide for Contact Form

Your contact form is configured to send emails to: **lennyymartin773@gmail.com**

## 🚀 Quick Setup with Formspree (Recommended - FREE)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Sign up with your email (lennyymartin773@gmail.com)
3. It's FREE for up to 50 submissions/month

### Step 2: Create a New Form
1. Click "New Form" in your Formspree dashboard
2. Name it: "Portfolio Contact Form"
3. Set email to: lennyymartin773@gmail.com
4. Copy your Form ID (looks like: `xyzabc123`)

### Step 3: Update Your Code
In `src/components/Contact.tsx`, replace:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

With:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
```

### Step 4: Deploy and Test
1. Deploy your portfolio
2. Submit a test message
3. Check your email inbox!

---

## 🔧 Alternative Options

### Option 2: EmailJS (Also Free)
- Website: https://www.emailjs.com/
- Free tier: 200 emails/month
- Setup: Similar to Formspree

### Option 3: Netlify Forms (If deploying to Netlify)
- Automatically included with Netlify hosting
- Just add `netlify` attribute to your form
- No code changes needed

### Option 4: Web3Forms
- Website: https://web3forms.com/
- Free, no account needed
- Just get an API key

---

## 📧 Current Configuration

**Your Email:** lennyymartin773@gmail.com
**Form Location:** Contact section at bottom of portfolio
**Fields:** Name, Email, Subject, Message

Once you complete Step 3 above, all contact form submissions will be sent directly to your email!
