# ✅ Hostinger Deployment Checklist

## Before Building

- [x] All dependencies installed
- [x] Site tested locally
- [x] Construction banner added
- [x] All routes working
- [x] Images loading correctly
- [x] Forms tested
- [x] Mobile responsive checked

## Build Process

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build Production Files
```bash
npm run build
```

**Expected Output:**
- ✅ TypeScript compilation successful
- ✅ Vite build completes
- ✅ `dist` folder created
- ✅ No errors in console

## Files to Upload

Upload **ALL** files from `dist/` folder to Hostinger's `public_html`:

### Critical Files:
- [ ] `index.html` - Main entry point
- [ ] `.htaccess` - Routing configuration (IMPORTANT!)
- [ ] `assets/` folder - All CSS, JS, images
- [ ] `_redirects` - Backup routing
- [ ] All image files (IRSDL-LOGO-white.png, etc.)

### Verify Upload:
- [ ] All files transferred successfully
- [ ] No upload errors
- [ ] `.htaccess` is visible (enable "Show hidden files")
- [ ] File permissions correct (644 for files, 755 for folders)

## Post-Deployment Testing

### Basic Functionality:
- [ ] Homepage loads without errors
- [ ] Navigation menu works
- [ ] All pages accessible
- [ ] Images display correctly
- [ ] Construction banner visible
- [ ] Footer displays properly

### Routing Test:
- [ ] Direct URL access works (e.g., yourdomain.com/about)
- [ ] Page refresh doesn't show 404
- [ ] Browser back/forward buttons work
- [ ] All pentest pages accessible
- [ ] Training pages load

### Performance:
- [ ] Page loads in under 3 seconds
- [ ] No console errors (F12)
- [ ] Images optimized and loading
- [ ] Smooth animations

### Mobile Testing:
- [ ] Responsive on mobile devices
- [ ] Touch navigation works
- [ ] Images scale properly
- [ ] Text readable on small screens

## SSL & Security

- [ ] SSL certificate installed (Hostinger → SSL)
- [ ] HTTPS enabled
- [ ] Force HTTPS redirect enabled
- [ ] Security headers working (check .htaccess)

## SEO & Analytics

- [ ] Update Google Analytics ID in App.tsx
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags in index.html
- [ ] Check robots.txt if needed

## Final Checks

- [ ] Domain pointing to correct directory
- [ ] DNS propagated (if new domain)
- [ ] Email tested (if using domain email)
- [ ] Backup of dist folder saved locally
- [ ] Contact form working (if applicable)

## Hostinger-Specific Settings

### In hPanel:
- [ ] PHP version set (if needed)
- [ ] File Manager accessible
- [ ] FTP credentials saved
- [ ] Database created (if needed for future)
- [ ] Email accounts set up (if needed)

## Troubleshooting

### If site doesn't load:
1. Check File Manager - files in correct location?
2. Check .htaccess uploaded
3. Clear browser cache
4. Check Hostinger status page
5. Contact Hostinger support

### If routes show 404:
1. Verify .htaccess in public_html root
2. Check mod_rewrite enabled
3. Re-upload .htaccess file
4. Contact Hostinger support

### If images missing:
1. Check assets folder uploaded
2. Verify image paths in code
3. Check file permissions
4. Re-upload assets folder

## Support Resources

- **Hostinger Support**: 24/7 live chat in hPanel
- **Knowledge Base**: https://support.hostinger.com
- **Community**: Hostinger community forums
- **Email**: support@hostinger.com

## Build Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Success Indicators

✅ Site loads at your domain
✅ All pages accessible
✅ No 404 errors
✅ Images display
✅ Navigation works
✅ Mobile responsive
✅ HTTPS enabled
✅ No console errors

---

**Last Updated**: Ready for deployment
**Build Status**: Production ready
**Hosting**: Hostinger
