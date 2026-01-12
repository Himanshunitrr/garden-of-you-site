# Garden of You — Simple Landing Page

This is a tiny static site you can host on Render (or anywhere) for:
- **Marketing URL** (App Store Connect)
- **Support URL**
- **Privacy Policy URL**

## What to edit
- **App Store button**: open `index.html` and replace the `href="#"` with your App Store URL after your app is live.
- **Support email**: open `support.html` and change the `mailto:` address if needed.

## Run locally
Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deploy on Render (Static Site)
1. Push this folder to GitHub.
2. Render → **New** → **Static Site**
3. Select your repo
4. Build Command: *(leave empty)*
5. Publish Directory: `.`

Done.
