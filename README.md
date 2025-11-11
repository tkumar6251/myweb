# CC Website (React, Vite)

Modern 4-page website rebuilt in React with an interactive, cursor-reactive hero, subtle 3D effects, and infinity-styled gradients. Assets are reused from the existing `images/` folder in the workspace via Vite's `publicDir`.

## Pages
- Home `/`
- About `/about`
- Services `/services`
- Contact `/contact`

## Requirements
- Node 18+ (Node 20 recommended)

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Production Build
```bash
npm run build
npm run preview
```

## Assets
This project points `publicDir` to `../images`. At build time, Vite copies those files into `dist/`. Ensure your images and favicon set live in `E:/CC Website/images`.

## Deploy to DigitalOcean

### Option A: App Platform (Static Site)
1. Push this folder (`react-site`) to a Git repository.
2. Create a new App in DigitalOcean App Platform.
3. Choose "Static Site".
4. Build Command: `npm run build`
5. Publish Directory: `dist`

### Option B: Docker on Droplet
Build and run using the included Dockerfile (serves via Nginx):
```bash
docker build -t cc-website .
docker run -p 80:80 cc-website
```

For HTTPS and domain, configure a reverse proxy or load balancer in front of the container.


