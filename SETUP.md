# IGP Ventures Website - Setup Guide

## Environment Variables Setup

To enable email functionality and other features, you need to configure environment variables.

### Step 1: Create .env file

Copy the example file:
```bash
cp .env.example .env
```

### Step 2: Configure Email Settings

Edit `.env` and add your GoDaddy email credentials:

```env
# Email Configuration
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=info@igp-ventures.com
SMTP_PASS=your-actual-password-here
RECIPIENT_EMAIL=info@igp-ventures.com
```

**Important:** Replace `your-actual-password-here` with your actual GoDaddy email password.

### Step 3: Configure Preview URL

```env
VITE_PREVIEW_URL=https://0x3a1i74xc.preview.c24.airoapp.ai
```

### Step 4: Restart the Server

After configuring environment variables, restart the development server:

```bash
npm run dev
```

## Email Configuration Options

### Option 1: GoDaddy Email (Current Setup)
- Host: `smtpout.secureserver.net`
- Port: `587` (TLS)
- Requires GoDaddy email account

### Option 2: Gmail (Alternative)
If GoDaddy SMTP doesn't work, you can use Gmail:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Update `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
RECIPIENT_EMAIL=info@igp-ventures.com
```

### Option 3: SendGrid (Recommended for Production)
For reliable production email delivery:

1. Sign up at https://sendgrid.com (free tier available)
2. Get your API key
3. Update `.env`:

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
RECIPIENT_EMAIL=info@igp-ventures.com
```

## Security Notes

- **Never commit `.env` file to git** (it's already in `.gitignore`)
- Keep your email passwords secure
- Use app-specific passwords when possible
- For production, use environment variables in your hosting platform

## Testing Email

After setup, test the contact form:
1. Go to `/contact` page
2. Fill out the form
3. Submit
4. Check your inbox at the configured `RECIPIENT_EMAIL`

## Troubleshooting

### Email not sending?
- Check SMTP credentials are correct
- Verify port 587 is not blocked
- Check server logs for error messages
- Try alternative email service (Gmail or SendGrid)

### Environment variables not loading?
- Ensure `.env` file is in project root
- Restart the development server
- Check for typos in variable names
