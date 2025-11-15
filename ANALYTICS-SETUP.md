# Google Analytics 4 Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Google Analytics Account

1. Go to https://analytics.google.com/
2. Click "Start measuring"
3. Create an account name (e.g., "Martin Portfolio")
4. Click "Next"

### Step 2: Create a Property

1. Property name: "Portfolio Website"
2. Time zone: Select your timezone (Ghana - GMT+0)
3. Currency: GHS (Ghana Cedi) or USD
4. Click "Next"

### Step 3: Set Up Data Stream

1. Choose platform: **Web**
2. Website URL: Your deployed portfolio URL
3. Stream name: "Portfolio"
4. Click "Create stream"

### Step 4: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
2. It looks like: `G-XXXXXXXXXX`
3. Copy this ID

### Step 5: Add to Your Portfolio

Open `.env.local` and replace:

```
VITE_GA_MEASUREMENT_ID=YOUR_GA_MEASUREMENT_ID
```

With your actual Measurement ID:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 6: Deploy

When deploying, add this environment variable to your hosting platform:
- **Variable**: `VITE_GA_MEASUREMENT_ID`
- **Value**: `G-XXXXXXXXXX`

## ✅ What's Being Tracked

Your portfolio now tracks:

### Automatic Tracking:
- **Page views** - Every time someone visits
- **Session duration** - How long visitors stay
- **Bounce rate** - Single-page visits
- **User location** - Country, city
- **Device type** - Desktop, mobile, tablet
- **Browser** - Chrome, Safari, etc.
- **Traffic sources** - Where visitors come from

### Custom Events:
- **Contact form submissions** - When someone sends a message
- **Resume downloads** - When someone downloads your resume
- **External link clicks** - GitHub, LinkedIn clicks
- **Button clicks** - Explore work, etc.

## 📊 View Your Analytics

1. Go to https://analytics.google.com/
2. Select your property
3. View reports:
   - **Realtime** - See current visitors
   - **Acquisition** - Where visitors come from
   - **Engagement** - What they do on your site
   - **Demographics** - Who your visitors are

## 🎯 Key Metrics to Watch

- **Users** - Total unique visitors
- **Sessions** - Total visits
- **Engagement rate** - % of engaged sessions
- **Average session duration** - Time spent on site
- **Events** - Form submissions, downloads, clicks

## 🔒 Privacy

Google Analytics 4 is:
- GDPR compliant
- Cookie-less tracking available
- Privacy-focused
- No personal data collected

## Troubleshooting

If analytics don't show up:
1. Wait 24-48 hours for data to appear
2. Check Measurement ID is correct
3. Verify environment variable is set
4. Check browser console for errors
5. Use "Realtime" view to test immediately

## Advanced: Custom Events

You can track more events by using the analytics utility:

```typescript
import { trackEvent } from '@/utils/analytics';

// Track any custom event
trackEvent('Category', 'Action', 'Label');

// Examples:
trackEvent('Project', 'View', 'JamFind');
trackEvent('Certificate', 'Download', 'AWS Certified');
```

---

**Status**: Ready to track once you add your Measurement ID!
