# KMS Website - Build and Deployment Guide

## 📍 GitHub Repository

**Repository URL:** `https://github.com/NikulPatelCW/kms-website.git`

**Website Domain:** After deployment, your site will be available at:
- GitHub Pages: `https://nikulpatelcw.github.io/kms-website/` (if GitHub Pages is enabled)

---

## 🚀 Build and Deploy Steps

### Prerequisites

1. **Node.js** (v20 or higher)
2. **npm** (comes with Node.js)
3. **Git** installed and configured
4. **GitHub account** with repository access

---

## 📦 Local Build Steps

### 1. Clone the Repository

```bash
git clone https://github.com/NikulPatelCW/kms-website.git
cd kms-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build for Production

```bash
npm run build:prod
```

This creates optimized production files in `dist/kms-advisors/browser/`

### 4. Test Locally (Optional)

```bash
# Serve the built files locally
npm run serve:local
```

Access at: `http://localhost:8080`

---

## 🌐 GitHub Pages Deployment (Automatic)

### Setup GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository: `https://github.com/NikulPatelCW/kms-website`
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Automatic Deployment:**
   - The GitHub Actions workflow (`.github/workflows/build-and-deploy.yml`) will automatically:
     - Build the Angular app on every push to `main` or `master` branch
     - Deploy to GitHub Pages
   - No manual steps required!

3. **Access Your Website:**
   - After deployment, your site will be available at:
     - `https://nikulpatelcw.github.io/kms-website/`
   - It may take a few minutes for the first deployment

---

## 🔄 Manual Deployment Steps

### Option 1: Using GitHub Actions (Recommended)

1. **Push your changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Monitor the deployment:**
   - Go to **Actions** tab in your GitHub repository
   - Watch the workflow run
   - Wait for it to complete

3. **Verify deployment:**
   - Visit your GitHub Pages URL
   - Check that the site is live

### Option 2: Manual Build and Deploy

1. **Build locally:**
   ```bash
   npm run build:prod
   ```

2. **Deploy to GitHub Pages manually:**
   ```bash
   # Install gh-pages package (one-time)
   npm install --save-dev gh-pages
   
   # Add deploy script to package.json
   # "deploy": "gh-pages -d dist/kms-advisors/browser"
   
   # Deploy
   npm run deploy
   ```

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
npm run docker:build
```

### Run Docker Container

```bash
npm run docker:run
```

Access at: `http://localhost`

### Deploy to Cloud (AWS, Azure, GCP, etc.)

1. **Build and push Docker image:**
   ```bash
   docker build -t kms-website .
   docker tag kms-website your-registry/kms-website:latest
   docker push your-registry/kms-website:latest
   ```

2. **Deploy to your cloud provider** using their container services

---

## 📋 Build Commands Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm start` | Start development server (localhost:4200) |
| `npm run start:host` | Start dev server with network access |
| `npm run build` | Build for development |
| `npm run build:prod` | Build for production (optimized) |
| `npm test` | Run unit tests |
| `npm run serve:local` | Serve production build locally |
| `npm run docker:build` | Build Docker image |
| `npm run docker:run` | Run Docker container |

---

## 🔧 Troubleshooting

### Build Fails

1. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version:**
   ```bash
   node --version  # Should be v20 or higher
   ```

### Deployment Issues

1. **GitHub Pages not updating:**
   - Check Actions tab for workflow errors
   - Verify GitHub Pages is enabled in Settings
   - Wait 5-10 minutes for changes to propagate

2. **404 Errors on Routes:**
   - Ensure `nginx.conf` is properly configured (for Docker)
   - GitHub Pages should handle routing automatically

### Test Errors

- Tests may fail if `provideZonelessChangeDetection()` is missing in test files
- All test files should include: `providers: [provideZonelessChangeDetection()]`

---

## 📝 GitHub Actions Workflow

The workflow (`.github/workflows/build-and-deploy.yml`) automatically:

1. ✅ Checks out code
2. ✅ Sets up Node.js 20
3. ✅ Installs dependencies
4. ✅ Builds Angular app for production
5. ✅ Uploads build artifacts
6. ✅ Deploys to GitHub Pages (on main/master branch)

**Workflow triggers:**
- Push to `main` or `master` branch
- Pull requests to `main` or `master`
- Manual trigger via GitHub Actions UI

---

## 🔗 Useful Links

- **Repository:** https://github.com/NikulPatelCW/kms-website
- **GitHub Pages:** https://nikulpatelcw.github.io/kms-website/ (after deployment)
- **Angular CLI Docs:** https://angular.dev/tools/cli
- **GitHub Actions Docs:** https://docs.github.com/en/actions

---

## 📞 Support

For deployment issues or questions, check:
1. GitHub Actions logs in the **Actions** tab
2. GitHub Pages settings in **Settings** → **Pages**
3. Repository issues and discussions

---

**Last Updated:** $(date)

