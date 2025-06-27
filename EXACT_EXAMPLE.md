# 🎯 EXACT EXAMPLE: How to Replace Placeholder with Real Content

## 🔄 **Before vs After Example**

### **BEFORE (Current Placeholder):**

```typescript
const certificates = [
  {
    id: 'cuda-fundamentals',
    title: 'CUDA Programming Fundamentals',           // ← Placeholder title
    issuer: 'NVIDIA',                                 // ← Placeholder issuer
    date: 'June 2024',                               // ← Placeholder date
    pdfPath: '/certificates/gpu-programming/cuda-fundamentals.pdf',
    thumbnail: '/images/certificates/cuda-fundamentals-thumb.svg' // ← SVG placeholder
  }
]

const projects = [
  {
    id: 'matrix-multiplication',
    title: 'CUDA Matrix Multiplication',              // ← Placeholder title
    description: 'High-performance matrix multiplication...', // ← Placeholder description
    technologies: ['CUDA', 'C++', 'GPU Computing'], // ← Placeholder tech
    githubUrl: 'https://github.com/shivensaini/cuda-matrix-multiplication', // ← Placeholder
    image: '/images/projects/matrix-multiplication.svg', // ← SVG placeholder
  }
]
```

### **AFTER (Your Real Content):**

```typescript
const certificates = [
  {
    id: 'cuda-fundamentals',
    title: 'CUDA C++ Developer Certification',        // ← Your real certificate title
    issuer: 'NVIDIA Developer Program',               // ← Real issuer
    date: 'March 2025',                              // ← Real date you got it
    pdfPath: '/certificates/gpu-programming/cuda-fundamentals.pdf', // ← Same (your PDF)
    thumbnail: '/images/certificates/cuda-fundamentals-thumb.jpg'   // ← Your screenshot (.jpg)
  }
]

const projects = [
  {
    id: 'matrix-multiplication',
    title: 'High-Performance CUDA Matrix Library',    // ← Your real project name
    description: 'Optimized matrix operations library achieving 15x speedup over CPU with shared memory optimization and memory coalescing techniques.',
    technologies: ['CUDA', 'C++', 'CMake', 'cuBLAS'], // ← Your real tech stack
    githubUrl: 'https://github.com/YourUsername/cuda-matrix-lib', // ← Your real GitHub
    image: '/images/projects/matrix-multiplication.png', // ← Your screenshot (.png)
    demoUrl: 'https://your-demo-site.com'            // ← Optional: Your live demo
  }
]
```

---

## 📁 **Exact File Operations**

### **Step 1: Replace Certificate PDF**
```bash
# Copy your real certificate to replace the demo
cp ~/Downloads/my-nvidia-cuda-cert.pdf /home/davinci/portfolio/public/certificates/gpu-programming/cuda-fundamentals.pdf
```

### **Step 2: Add Certificate Preview Image**
```bash
# Take a screenshot of your certificate and add it
cp ~/Downloads/cuda-cert-screenshot.jpg /home/davinci/portfolio/public/images/certificates/cuda-fundamentals-thumb.jpg
```

### **Step 3: Add Project Screenshot**
```bash
# Add a screenshot of your project
cp ~/Downloads/matrix-project-demo.png /home/davinci/portfolio/public/images/projects/matrix-multiplication.png
```

### **Step 4: Update Data in Page File**

Edit `/home/davinci/portfolio/src/app/skills/gpu-programming/page.tsx`:

**Find this line (around line 14):**
```typescript
thumbnail: '/images/certificates/cuda-fundamentals-thumb.svg'
```

**Change to:**
```typescript
thumbnail: '/images/certificates/cuda-fundamentals-thumb.jpg'
```

**Find this section (around line 40):**
```typescript
githubUrl: 'https://github.com/shivensaini/cuda-matrix-multiplication',
image: '/images/projects/matrix-multiplication.svg',
```

**Change to:**
```typescript
githubUrl: 'https://github.com/YourUsername/your-real-repo',
image: '/images/projects/matrix-multiplication.png',
```

---

## ✅ **What Happens Automatically**

1. **Certificate Downloads** - Users click certificate → your PDF downloads
2. **Preview Images** - Your certificate thumbnail shows in the card
3. **Project Images** - Your project screenshot displays in the gallery
4. **GitHub Links** - "View on GitHub" opens your real repository
5. **Responsive Design** - Everything works on mobile/tablet/desktop
6. **Theme Support** - Dark/light mode works automatically

---

## 🎯 **Testing Your Changes**

After making these changes:

1. **Start server**: `npm run dev`
2. **Visit**: `http://localhost:5000/skills/gpu-programming`
3. **Test**: 
   - Click certificate card → Should download your PDF
   - Click "View on GitHub" → Should open your repository
   - See your certificate thumbnail and project image

---

## 🚀 **Apply to All Skills**

Use the same process for all your other skills:

- **Robotics**: `/src/app/skills/robotics/page.tsx`
- **AI Engineering**: `/src/app/skills/ai-engineering/page.tsx`
- **Android Development**: `/src/app/skills/android-development/page.tsx`
- **Full Stack Development**: `/src/app/skills/fullstack-development/page.tsx`
- **Linux Development**: `/src/app/skills/linux-development/page.tsx`

---

## 💡 **Pro Tip: Use the Management Script**

For easier management, use the interactive script:

```bash
./manage_real_content.sh
```

This will guide you through the process step-by-step! 🎯
