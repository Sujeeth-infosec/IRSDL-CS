# 📤 Hostinger File Manager Upload Guide

## ✅ Your Build is Ready!
The `dist` folder now contains all your production files ready for upload.

---

## 🚀 Step-by-Step Upload Instructions

### Step 1: Login to Hostinger
1. Go to https://www.hostinger.com
2. Click **Login** (top right)
3. Enter your email and password
4. Click **Sign In**

### Step 2: Access hPanel
1. After login, you'll see your **hPanel Dashboard**
2. Find your website/domain in the list
3. Click on it to manage

### Step 3: Open File Manager
1. In the left sidebar, look for **Files** section
2. Click on **File Manager**
3. A new tab will open with the File Manager interface

### Step 4: Navigate to public_html
1. You'll see a folder structure on the left
2. Click on **public_html** folder
   - This is where your website files go
   - If you have a specific domain folder, navigate to it instead

### Step 5: Clean Up Old Files (If Any)
1. If there are existing files in public_html:
   - Select all files (checkbox at top)
   - Click **Delete** button
   - Confirm deletion
2. If it's empty, skip this step

### Step 6: Upload Your Files

#### Option A: Upload as ZIP (Recommended - Faster)
1. First, create a ZIP of your dist folder:
   - Go to your project folder: `E:\IRSDL Projects\IRSDL CS\IRSDL-CS`
   - Right-click on the **dist** folder
   - Select **Send to → Compressed (zipped) folder**
   - Name it `dist.zip`

2. In Hostinger File Manager:
   - Make sure you're in **public_html**
   - Click **Upload** button (top right)
   - Click **Select Files**
   - Choose your `dist.zip` file
   - Wait for upload to complete (progress bar will show)

3. Extract the ZIP:
   - Right-click on `dist.zip` in File Manager
   - Select **Extract**
   - Choose **Extract Here**
   - Wait for extraction to complete

4. Move files to root:
   - You'll now have a `dist` folder inside public_html
   - Open the `dist` folder
   - Select ALL files inside (Ctrl+A or checkbox)
   - Click **Move** button
   - Navigate back to `public_html`
   - Click **Move Here**
   - Delete the empty `dist` folder
   - Delete `dist.zip`

#### Option B: Upload Files Directly (Slower but Simple)
1. In Hostinger File Manager:
   - Make sure you're in **public_html**
   - Click **Upload** button (top right)

2. Select files from your computer:
   - Navigate to: `E:\IRSDL Projects\IRSDL CS\IRSDL-CS\dist`
   - Select ALL files and folders inside dist
   - Click **Open**

3. Wait for upload:
   - Progress bar will show upload status
   - Don't close the browser until complete
   - This may take 5-10 minutes depending on your internet speed

### Step 7: Verify Upload
After upload completes, your public_html should contain:

```
public_html/
├── index.html          ✓ Main file
├── .htaccess          ✓ Routing config (IMPORTANT!)
├── _redirects         ✓ Backup routing
├── assets/            ✓ Folder with CSS, JS, images
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── IRSDL LOGO-01-[hash].png
│   └── [other files]
└── vite.svg           ✓ Favicon
```

### Step 8: Check .htaccess File
**IMPORTANT:** The .htaccess file is hidden by default!

1. In File Manager, click **Settings** (gear icon, top right)
2. Check the box: **Show Hidden Files**
3. Click **Save**
4. Now you should see `.htaccess` in the file list
5. If you DON'T see it:
   - Click **New File** button
   - Name it `.htaccess`
   - Copy the content from `public/.htaccess` in your project
   - Paste and save

### Step 9: Set File Permissions (If Needed)
1. Right-click on `index.html`
2. Select **Permissions**
3. Set to **644** (usually default)
4. Do the same for `.htaccess`

### Step 10: Test Your Website
1. Open a new browser tab
2. Go to your domain (e.g., `https://yourdomain.com`)
3. Your website should load!

---

## 🧪 Testing Checklist

After upload, test these:

- [ ] Homepage loads without errors
- [ ] Construction banner appears at top
- [ ] Navigation menu works
- [ ] Click on different pages (Services, About, Training, etc.)
- [ ] Refresh a page - should NOT show 404
- [ ] Images display correctly
- [ ] Logo appears in navbar
- [ ] Footer displays properly
- [ ] Mobile view works (resize browser)
- [ ] No console errors (Press F12 → Console tab)

---

## 🔧 Troubleshooting

### Problem: 404 Error on Page Refresh
**Solution:**
- Make sure `.htaccess` file is uploaded
- Enable "Show Hidden Files" in File Manager settings
- Check that `.htaccess` is in the root of public_html

### Problem: Images Not Loading
**Solution:**
- Verify `assets` folder is uploaded
- Check that all files in `assets` folder are present
- Clear browser cache (Ctrl+Shift+Delete)

### Problem: Blank White Page
**Solution:**
- Press F12 to open browser console
- Look for error messages
- Usually means JavaScript files didn't upload
- Re-upload the `assets` folder

### Problem: CSS Not Applied (Unstyled Page)
**Solution:**
- Check that CSS file is in `assets` folder
- Clear browser cache
- Re-upload `assets` folder

### Problem: Can't See .htaccess
**Solution:**
- Click Settings (gear icon) in File Manager
- Enable "Show Hidden Files"
- Click Save

---

## 📊 Your File Structure Should Look Like This

```
public_html/
├── .htaccess                                    (Hidden file - routing)
├── _redirects                                   (Backup routing)
├── index.html                                   (Main HTML)
├── vite.svg                                     (Favicon)
└── assets/                                      (All resources)
    ├── IRSDL LOGO-01-zTozP7Nx.png              (Logo)
    ├── index-CJDfSXF-.css                       (Styles)
    ├── index-Cu01i0NR.js                        (Main JS)
    ├── animation-vendor-BbdCu1p-.js             (Animations)
    ├── react-vendor-BOQNXsYI.js                 (React)
    └── three-vendor-CZQH2qsq.js                 (3D Graphics)
```

---

## 🎯 Quick Reference

### File Manager Location
**hPanel → Files → File Manager**

### Upload Location
**public_html/** (or your domain's root folder)

### Files to Upload
**Everything inside the `dist` folder**

### Important Files
- ✅ `index.html` - Must be in root
- ✅ `.htaccess` - Must be in root (hidden file)
- ✅ `assets/` folder - All CSS, JS, images

### Enable Hidden Files
**File Manager → Settings (gear icon) → Show Hidden Files → Save**

---

## 🆘 Need Help?

### Hostinger Support
- **Live Chat**: Available 24/7 in hPanel (bottom right)
- **Email**: support@hostinger.com
- **Knowledge Base**: https://support.hostinger.com

### Common Support Questions
1. "My .htaccess file isn't working for routing"
2. "How do I enable mod_rewrite?"
3. "Files uploaded but site shows 404"

---

## ✨ After Successful Upload

### Enable SSL (HTTPS)
1. Go to hPanel
2. Click **SSL** in left sidebar
3. Click **Install SSL** for your domain
4. Choose **Free SSL** (Let's Encrypt)
5. Wait 5-10 minutes for activation
6. Enable **Force HTTPS**

### Update Google Analytics (Optional)
1. Open `src/App.tsx` in your code
2. Replace `'G-XXXXXXXXXX'` with your actual GA4 ID
3. Rebuild: `npm run build`
4. Re-upload the new `dist` files

---

## 🎉 Success!

Once your site loads at your domain with:
- ✅ Construction banner visible
- ✅ All pages working
- ✅ Images loading
- ✅ No 404 errors
- ✅ HTTPS enabled

**Your site is live! 🚀**

---

**Last Updated**: Ready for deployment
**Build Status**: ✅ Production build complete
**Files Location**: `E:\IRSDL Projects\IRSDL CS\IRSDL-CS\dist`
