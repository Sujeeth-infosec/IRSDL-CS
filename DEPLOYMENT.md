# Hostinger Deployment Guide

## Prerequisites
- Node.js installed (v18 or higher)
- npm or yarn package manager
- Hostinger hosting account with file manager or FTP access

## Step 1: Install Dependencies
```bash
npm install
```

If you get any errors, install the Vite React plugin:
```bash
npm install -D @vitejs/plugin-react
```

## Step 2: Build for Production
```bash
npm run build
```

This will create a `dist` folder with your production-ready files.

## Step 3: Upload to Hostinger

### Option A: Using File Manager
1. Log in to your Hostinger control panel (hPanel)
2. Go to **File Manager**
3. Navigate to `public_html` directory (or your domain's root directory)
4. Delete any existing files in the directory
5. Upload all files from the `dist` folder to `public_html`
6. Make sure `.htaccess` file is uploaded (enable "Show hidden files" if needed)

### Option B: Using FTP
1. Connect to your Hostinger account via FTP (use FileZilla or similar)
   - Host: Your domain or FTP hostname from Hostinger
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
2. Navigate to `public_html` directory
3. Upload all contents from the `dist` folder
4. Ensure `.htaccess` is uploaded

## Step 4: Verify Deployment
1. Visit your domain in a browser
2. Test navigation between pages
3. Check that all routes work correctly (no 404 errors)
4. Verify images and assets load properly

## Important Files
- `.htaccess` - Handles client-side routing and caching
- `_redirects` - Backup routing configuration
- All files in `dist/` folder after build

## Troubleshooting

### Routes showing 404 errors
- Ensure `.htaccess` file is in the root directory
- Check that mod_rewrite is enabled on your server
- Contact Hostinger support if needed

### Images not loading
- Check that image paths are correct
- Verify all files from `dist/assets` are uploaded
- Clear browser cache

### Blank page or errors
- Check browser console for errors (F12)
- Verify all files were uploaded correctly
- Check file permissions (should be 644 for files, 755 for directories)

## Performance Optimization
The build is already optimized with:
- ✅ Code splitting
- ✅ Minification
- ✅ GZIP compression (via .htaccess)
- ✅ Browser caching
- ✅ Asset optimization

## SSL Certificate
Make sure to enable SSL in Hostinger:
1. Go to hPanel → SSL
2. Install free Let's Encrypt SSL certificate
3. Force HTTPS redirect

## Custom Domain
If using a custom domain:
1. Update nameservers to Hostinger's nameservers
2. Wait 24-48 hours for DNS propagation
3. Install SSL certificate after domain is active

## Support
For Hostinger-specific issues, contact Hostinger support:
- Live chat available 24/7
- Email: support@hostinger.com
- Knowledge base: https://support.hostinger.com
