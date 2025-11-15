# Email Setup Guide for Contact Form

Your contact form is configured to send messages to: **lennyymartin773@gmail.com**

## ✅ Setup Complete!

Your Web3Forms access key is already configured in `.env.local` and ready to use!

### Test Your Contact Form

1. **Restart your dev server** (if running):
   ```bash
   npm run dev
   ```

2. **Go to the Contact section** on your portfolio

3. **Submit a test message**

4. **Check your email**: lennyymartin773@gmail.com

### Important Notes

- ✅ Access key is stored securely in `.env.local`
- ✅ `.env.local` is in `.gitignore` (won't be pushed to GitHub)
- ✅ Form sends to: lennyymartin773@gmail.com
- ✅ Includes sender's name, email, subject, and message

## ✅ What's Already Configured

- ✅ Form sends to: lennyymartin773@gmail.com
- ✅ Includes sender's name, email, subject, and message
- ✅ Shows success/error messages
- ✅ Clears form after successful submission
- ✅ Fallback to direct email if form fails

## 🔒 Security Note

Web3Forms is:
- Free for up to 250 submissions/month
- No backend required
- Spam protection included
- GDPR compliant

## Alternative: Use Formspree

If you prefer Formspree instead:

1. Go to https://formspree.io
2. Sign up with your email
3. Create a new form
4. Copy the form endpoint
5. Update Contact.tsx to use Formspree endpoint

## Need Help?

If you have issues:
1. Check spam folder for verification email
2. Make sure access key is correct (no extra spaces)
3. Test in production (some services don't work on localhost)
4. Contact Web3Forms support if needed

---

**Current Status**: Needs access key to be fully functional
**Time to Complete**: ~5 minutes
