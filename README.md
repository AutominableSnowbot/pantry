# My Pantry PWA — Phone-only deployment guide

Everything you need is in this folder. You can deploy this entirely from your phone.

## What you get
- A real installable app icon on your home screen
- Works offline after first load
- Data stored locally on your phone (localStorage)
- Free hosting, no account costs

## Deploy via GitHub Pages (from your phone)

### 1. Create a GitHub account (if you don't have one)
Go to github.com in your phone browser, sign up. Takes 2 minutes.

### 2. Create a new repository
- Tap the **+** icon top right → **New repository**
- Name it something like `pantry` (short name = nicer URL)
- Make it **Public** (required for free GitHub Pages)
- Tick **Add a README file**
- Tap **Create repository**

### 3. Upload the files
- In your new repo, tap **Add file** → **Upload files**
- Upload all 5 files from this bundle:
  - `index.html`
  - `manifest.json`
  - `sw.js`
  - `icon-192.png`
  - `icon-512.png`
- Scroll down, tap **Commit changes**

### 4. Enable GitHub Pages
- In the repo, tap **Settings** (you may need to tap the `...` menu first)
- Scroll down to **Pages** in the left menu (or search in settings)
- Under **Source**, select **Deploy from a branch**
- Branch: **main**, folder: **/ (root)**
- Tap **Save**
- Wait 1-2 minutes

### 5. Get your URL
Your app will be live at:
```
https://YOUR_USERNAME.github.io/pantry/
```

### 6. Install on your phone
- Open that URL in Chrome on your phone
- Tap the **⋮** menu → **Add to Home screen** (or **Install app** if it appears)
- Done! It now lives on your home screen like a real app.

## Updating later
When you want to change something, just edit the files directly in GitHub's web interface (tap any file → pencil icon). The app on your phone will update automatically next time it can connect.

## Troubleshooting
- **"Add to Home screen" doesn't show the install prompt**: Give it 30 seconds after loading, or refresh. Service worker needs to register first.
- **Changes don't appear**: Service worker caches aggressively. Force-refresh (pull down in Chrome) or close and reopen.
- **I want to wipe my data**: Use the "Reset to original contents" button at the bottom.
