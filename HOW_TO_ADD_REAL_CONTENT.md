# How to Add Your Real Certificates, Links, and Preview Images

## 📋 Quick Overview

Your portfolio is set up to automatically handle:
- ✅ **PDF Downloads** - Direct download when users click certificates
- ✅ **Preview Images** - Thumbnail images for certificates
- ✅ **GitHub Links** - Direct links to your project repositories
- ✅ **Demo Links** - Links to live project demos (optional)

## 🎯 Step-by-Step Guide

### 1. Adding Real Certificate PDFs

**Current Location**: `/home/davinci/portfolio/public/certificates/[skill-name]/`

```bash
# Example: Add your CUDA certificate
cp /path/to/your/real-cuda-cert.pdf /home/davinci/portfolio/public/certificates/gpu-programming/

# Rename to match the expected filename
mv /home/davinci/portfolio/public/certificates/gpu-programming/real-cuda-cert.pdf \
   /home/davinci/portfolio/public/certificates/gpu-programming/cuda-fundamentals.pdf
```

**Supported formats**: PDF only (for download functionality)

### 2. Adding Certificate Preview Images

**Location**: `/home/davinci/portfolio/public/images/certificates/`

**Supported formats**: `.jpg`, `.png`, `.webp`, `.svg`

```bash
# Example: Add preview image for CUDA certificate
cp /path/to/cuda-certificate-preview.jpg /home/davinci/portfolio/public/images/certificates/cuda-fundamentals-thumb.jpg
```

**Recommended dimensions**: 
- Width: 300-400px
- Height: 200-300px
- Format: JPG or PNG for photos, SVG for illustrations

### 3. Adding Project Images

**Location**: `/home/davinci/portfolio/public/images/projects/`

```bash
# Example: Add project screenshot
cp /path/to/matrix-multiplication-screenshot.png /home/davinci/portfolio/public/images/projects/matrix-multiplication.png
```

**Recommended dimensions**:
- Width: 600-800px
- Height: 400-500px
- Format: PNG for screenshots, JPG for photos

### 4. Updating Links and Information

Edit the skill page files to update your real information:

**File**: `/home/davinci/portfolio/src/app/skills/gpu-programming/page.tsx`

```typescript
const certificates = [
  {
    id: 'cuda-fundamentals',
    title: 'Your Real Certificate Title',
    issuer: 'Real Issuer (e.g., NVIDIA, Coursera, etc.)',
    date: 'Real Date (e.g., June 2025)',
    pdfPath: '/certificates/gpu-programming/your-real-cert.pdf',
    thumbnail: '/images/certificates/your-real-cert-thumb.jpg' // Change extension as needed
  }
]

const projects = [
  {
    id: 'your-project',
    title: 'Your Real Project Title',
    description: 'Real description of your project',
    technologies: ['Real', 'Tech', 'Stack'],
    githubUrl: 'https://github.com/yourusername/real-repo', // Your real GitHub URL
    image: '/images/projects/your-real-project.png',
    demoUrl: 'https://your-live-demo.com' // Optional: Add if you have a live demo
  }
]
```

## 🔄 Complete Example: Adding Real GPU Programming Content

### Step 1: Prepare Your Files

```bash
# Navigate to your portfolio
cd /home/davinci/portfolio

# Add your real certificate PDFs
cp ~/Downloads/my-cuda-certificate.pdf public/certificates/gpu-programming/cuda-fundamentals.pdf
cp ~/Downloads/my-gpu-optimization-cert.pdf public/certificates/gpu-programming/gpu-optimization.pdf

# Add certificate preview images
cp ~/Downloads/cuda-cert-preview.jpg public/images/certificates/cuda-fundamentals-thumb.jpg
cp ~/Downloads/gpu-opt-preview.jpg public/images/certificates/gpu-optimization-thumb.jpg

# Add project screenshots
cp ~/Downloads/matrix-project-screenshot.png public/images/projects/matrix-multiplication.png
cp ~/Downloads/raytracer-screenshot.png public/images/projects/raytracer.png
```

### Step 2: Update the Page Content

Edit `/home/davinci/portfolio/src/app/skills/gpu-programming/page.tsx`:

```typescript
const certificates = [
  {
    id: 'cuda-fundamentals',
    title: 'CUDA C++ Programming', // Your real certificate title
    issuer: 'NVIDIA Developer Program', // Real issuer
    date: 'March 2025', // Real date
    pdfPath: '/certificates/gpu-programming/cuda-fundamentals.pdf',
    thumbnail: '/images/certificates/cuda-fundamentals-thumb.jpg' // Real image
  },
  // ... add more real certificates
]

const projects = [
  {
    id: 'matrix-multiplication',
    title: 'Optimized CUDA Matrix Library', // Your real project name
    description: 'A high-performance matrix computation library...', // Real description
    technologies: ['CUDA', 'C++', 'CMake'], // Real tech stack
    githubUrl: 'https://github.com/yourUsername/cuda-matrix-lib', // Your real repo
    image: '/images/projects/matrix-multiplication.png',
    demoUrl: 'https://your-demo.com' // Optional demo link
  },
  // ... add more real projects
]
```

## 🖼️ Creating Preview Images

### For Certificates:
1. **Take a screenshot** of your certificate
2. **Crop to show** the main content (title, issuer, your name)
3. **Resize to** 300x200px or similar
4. **Save as** JPG/PNG with meaningful filename

### For Projects:
1. **Screenshot your application** in action
2. **Show key features** or the main interface
3. **Resize to** 600x400px or similar
4. **Save as** PNG for screenshots, JPG for photos

## 🔗 Adding GitHub Repository Links

### Current placeholder format:
```
https://github.com/shivensaini/project-name
```

### Replace with your real repositories:
```
https://github.com/yourusername/your-real-repo
```

### Adding Demo Links (Optional):
```typescript
demoUrl: 'https://your-project-demo.com'
```

## 📁 File Naming Convention

### Certificates:
- **PDF**: Use descriptive names like `cuda-fundamentals.pdf`
- **Thumbnails**: Add `-thumb` suffix like `cuda-fundamentals-thumb.jpg`

### Projects:
- **Images**: Use project name like `matrix-multiplication.png`
- **Keep consistent** with the `id` field in your data

## ✅ Testing Your Changes

After adding your content:

1. **Start the server**: `npm run dev`
2. **Visit your skill page**: `http://localhost:5000/skills/gpu-programming`
3. **Test downloads**: Click certificate cards to download PDFs
4. **Test links**: Click "View on GitHub" buttons
5. **Check images**: Verify all thumbnails and project images load

## 🚨 Common Issues & Solutions

### Issue: Images not showing
**Solution**: Check file paths and extensions match exactly

### Issue: PDF download not working
**Solution**: Ensure PDF files are in the correct `/public/certificates/` folder

### Issue: GitHub links not working
**Solution**: Verify URLs are complete and accessible

### Issue: Responsive layout broken
**Solution**: Use recommended image dimensions

## 🎯 All Skill Domains

Apply the same process to all your skills:

- **GPU Programming**: `/public/certificates/gpu-programming/`
- **Robotics**: `/public/certificates/robotics/`
- **AI Engineering**: `/public/certificates/ai-engineering/`
- **Android Development**: `/public/certificates/android-development/`
- **Full Stack Development**: `/public/certificates/fullstack-development/`
- **Linux Development**: `/public/certificates/linux-development/`

## 🔄 Management Scripts

I've created scripts to help you add content easily:

```bash
# Add a new certificate (interactive)
node scripts/add-certificate.js

# Add a new project (interactive)
node scripts/add-project.js
```

## 📝 Quick Checklist

- [ ] Replace PDF certificates with real ones
- [ ] Add preview images for certificates
- [ ] Add project screenshots/images
- [ ] Update certificate titles, issuers, and dates
- [ ] Update project descriptions and tech stacks
- [ ] Replace GitHub URLs with real repositories
- [ ] Add demo URLs where applicable
- [ ] Test all downloads and links
- [ ] Verify responsive design on mobile

Your portfolio will automatically handle all the preview images, downloads, and links once you add your real content! 🚀
