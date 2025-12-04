# Quick Build & Deploy Instructions

## 🚀 Quick Start

### 1. Install Dependencies (First Time Only)
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

This creates a `dist` folder with all your production files.

### 3. What Gets Built
After running `npm run build`, you'll have:
```
dist/
├── index.html          (Main HTML file)
├── assets/            (All CSS, JS, images)
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images and fonts]
├── .htaccess          (Routing configuration)
├── _redirects         (Backup routing)
└── [other static files]
```

### 4. Upload to Hostinger

**Upload EVERYTHING from the `dist` folder to your `public_html` directory**

#### Using Hostinger File Manager:
1. Login to hPanel
2. Click "File Manager"
3. Go to `public_html`
4. Delete old files (if any)
5. Click "Upload" and select all files from `dist` folder
6. Wait for upload to complete

#### Using FTP (FileZilla):
1. Connect to your Hostinger FTP
2. Navigate to `public_html`
3. Drag all files from `dist` folder to the server
4. Wait for transfer to complete

### 5. Test Your Site
Visit your domain and check:
- ✅ Homepage loads
- ✅ Navigation works
- ✅ All pages accessible
- ✅ Images display correctly
- ✅ No console errors (press F12)

## 📝 Important Notes

### File Structure on Server
Your `public_html` should look like:
```
public_html/
├── index.html
├── .htaccess
├── assets/
└── [other files from dist]
```

### Common Issues

**404 on page refresh?**
- Make sure `.htaccess` file is uploaded
- Enable "Show hidden files" in File Manager to see it

**Images not loading?**
- Check that `assets` folder is uploaded
- Verify image paths in code use `/` prefix

**Blank page?**
- Check browser console (F12) for errors
- Verify all files uploaded successfully
- Clear browser cache

## 🔄 Updating Your Site

When you make changes:
1. Make your code changes
2. Run `npm run build`
3. Upload new files from `dist` to `public_html`
4. Clear browser cache to see changes

## 🔒 Enable HTTPS (Recommended)

In Hostinger hPanel:
1. Go to SSL section
2. Install free SSL certificate
3. Enable "Force HTTPS"

## 📞 Need Help?

- Hostinger Support: 24/7 live chat
- Check DEPLOYMENT.md for detailed instructions
- Browser console (F12) shows error messages
