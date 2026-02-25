# Google Analytics Setup Guide

## ✅ What's Already Implemented

The code is ready to go! I've added:

1. **Google Analytics script** in `index.html`
2. **Automatic page view tracking** on route changes
3. **Project click tracking** to see which projects get the most interest
4. **Custom event tracking** utility for future analytics needs

---

## 🚀 Final Setup Steps

### 1. Get Your Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **Admin** (gear icon in bottom left)
4. Under **Account**, create a new account or select existing
5. Under **Property**, click **Create Property**
6. Fill in:
   - **Property name**: "Alex Tran Portfolio"
   - **Time zone**: Your timezone
   - **Currency**: Your currency
7. Click **Next** and fill in business details (optional)
8. Click **Create**
9. Under **Data Streams**, click **Add stream** → **Web**
10. Enter your website URL:
    - **Development**: `http://localhost:5173`
    - **Production**: `https://your-portfolio.com`
11. **Copy your Measurement ID** (looks like `G-XXXXXXXXXX`)

---

### 2. Add Your Measurement ID to the Code

Open `index.html` and replace **both instances** of `GA_MEASUREMENT_ID` with your actual ID:

```html
<!-- BEFORE -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- AFTER (example) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123XYZ');
</script>
```

Also update `src/hooks/useAnalytics.ts` line 26:

```typescript
// BEFORE
window.gtag('config', 'GA_MEASUREMENT_ID', {

// AFTER (example)
window.gtag('config', 'G-ABC123XYZ', {
```

---

### 3. Test It Locally

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Open your browser to `http://localhost:5173`

3. Check the browser console - you should see GA debug messages

4. Go to Google Analytics → **Reports** → **Realtime**

5. You should see yourself as an active user!

6. Click through your portfolio projects - each click should be tracked

---

### 4. Deploy to Production

After deploying to AWS Amplify (or your hosting):

1. In Google Analytics, add a **second data stream** for production
2. Use your production URL: `https://your-domain.com`
3. Get the production Measurement ID
4. Update your **production** build to use this ID (you can use environment variables)

---

## 📊 What You Can Track

### Automatic Tracking (Already Set Up)
- ✅ **Page views** - Every page visit
- ✅ **Route changes** - Navigation between projects
- ✅ **Project clicks** - Which projects get the most interest
- ✅ **Session duration** - How long visitors stay
- ✅ **Bounce rate** - Single-page visits
- ✅ **Device type** - Desktop vs Mobile
- ✅ **Geographic location** - Where visitors are from

### Custom Events You Can Add

Use the `trackEvent` function anywhere in your code:

```typescript
import { trackEvent } from './hooks/useAnalytics';

// Track contact button clicks
trackEvent('contact_click', {
  contact_type: 'email', // or 'linkedin', 'github'
});

// Track scroll depth
trackEvent('scroll_depth', {
  depth_percentage: 75,
});

// Track time spent on project pages
trackEvent('project_time', {
  project_name: 'GivePrism',
  time_seconds: 120,
});
```

---

## 🔍 Viewing Your Data

### Realtime Reports
- **Reports** → **Realtime** - See live visitors right now

### Standard Reports
- **Reports** → **Acquisition** - How people find your site
- **Reports** → **Engagement** - What pages they visit
- **Reports** → **Demographics** - Age, gender, interests
- **Reports** → **Tech** - Device, browser, screen size

### Custom Events
- **Reports** → **Engagement** → **Events**
- Look for `project_click` to see which projects are most popular

---

## 🚨 Important Privacy Notes

1. **Add a Privacy Policy** to your site mentioning analytics
2. **Cookie Consent** may be required depending on your audience (especially EU/GDPR)
3. Consider using **IP Anonymization** (GA4 does this by default)

---

## 🎯 Pro Tips

1. **Set up goals** in GA4 for:
   - Contact form submissions
   - Project page views
   - Time on site

2. **Create custom reports** to track:
   - Which project gets the most views
   - Conversion funnel (Home → Project → Contact)

3. **Connect to Google Search Console** to see:
   - What keywords bring people to your site
   - How you rank in search results

---

## 🐛 Troubleshooting

### Not Seeing Data?
1. Check browser console for errors
2. Make sure you replaced `GA_MEASUREMENT_ID` in **both** files
3. Disable ad blockers (they block GA)
4. Wait 24-48 hours for full data (Realtime works immediately)

### Data Looks Wrong?
1. Make sure you're filtering out your own visits
2. Check that you're using the correct Measurement ID
3. Verify the script loads (check Network tab in DevTools)

---

## ✅ You're All Set!

Once you add your Measurement ID and deploy, you'll be tracking:
- Who visits your portfolio
- Which projects they're interested in
- How they found you
- What devices they use

This data will help you understand your audience and improve your portfolio! 🎉
