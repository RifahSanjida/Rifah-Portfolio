# 🚀 Deployment Guide

## Prerequisites

- Git installed on your computer
- GitHub account
- Vercel account (sign up with GitHub at [vercel.com](https://vercel.com))

## Step 1: Prepare Your Repository

1. Make sure all your files are ready
2. Check that `Rifah_Sanjida_CV.pdf` is in the `public` folder
3. Verify all images are in place

## Step 2: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio website ready for deployment"

# Create a new repository on GitHub named "portfolio" or "rifah-portfolio"
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"
6. Wait 1-2 minutes for deployment
7. Your site will be live at `your-project.vercel.app`

### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Step 4: Custom Domain (Optional)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Step 5: Verify Deployment

Check these things:

- [ ] Homepage loads correctly
- [ ] All sections are visible (Home, About, Projects, Skills, Contact, Achievements)
- [ ] Images load properly
- [ ] CV download/preview works
- [ ] Dark/Light mode toggle works
- [ ] Navigation works
- [ ] Contact form opens email client
- [ ] All links work (GitHub, LinkedIn, etc.)
- [ ] Mobile responsive design works

## Common Issues & Solutions

### Issue: CV not loading
**Solution:** Make sure `Rifah_Sanjida_CV.pdf` is in the `public` folder

### Issue: Images not showing
**Solution:** Check image paths and ensure images are in `src/assets/`

### Issue: 404 on page refresh
**Solution:** `vercel.json` is already configured to handle this

### Issue: Build fails
**Solution:** Run `npm run build` locally to check for errors

## Environment Variables (if needed later)

If you add backend features, set environment variables in Vercel:

1. Go to Project Settings
2. Click "Environment Variables"
3. Add your variables

## Update Deployment

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push

# Vercel will automatically deploy the changes
```

## Performance Optimization Tips

- Images are already optimized with WebP format
- Lazy loading is enabled
- CSS is minified by Vite
- JavaScript is code-split automatically

## Monitoring

- Vercel provides analytics in the dashboard
- Check deployment logs for any issues
- Monitor site performance with Lighthouse

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review browser console for errors
3. Verify all files are committed to GitHub

---

**Ready to Deploy!** 🚀

Your portfolio is production-ready. Just follow the steps above and you'll be live in minutes!
