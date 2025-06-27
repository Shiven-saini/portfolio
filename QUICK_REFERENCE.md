# Quick Reference: Skills Showcase Management

## 🚀 Quick Commands

### Testing All Pages
```bash
# Main portfolio
http://localhost:5000

# All skill pages
http://localhost:5000/skills/gpu-programming
http://localhost:5000/skills/robotics
http://localhost:5000/skills/ai-engineering
http://localhost:5000/skills/android-development
http://localhost:5000/skills/fullstack-development
http://localhost:5000/skills/linux-development
```

### Content Management Scripts

#### Add New Certificate
```bash
node scripts/add-certificate.js
```
**Interactive prompts for:**
- Skill domain selection
- Certificate title, issuer, date
- File upload paths

#### Add New Project
```bash
node scripts/add-project.js
```
**Interactive prompts for:**
- Skill domain selection
- Project details (title, description, tech stack)
- GitHub URL and image path

#### Create New Skill Domain
```bash
node scripts/create-skill.js
```
**Creates complete setup:**
- New skill page file
- Directory structure
- Placeholder content
- Updates main Expertise component

## 📁 File Locations

### Certificates
- **PDFs**: `/public/certificates/[skill-name]/`
- **Thumbnails**: `/public/images/certificates/`

### Projects
- **Images**: `/public/images/projects/`
- **Data**: In skill page files (`/src/app/skills/[skill]/page.tsx`)

### Pages
- **Main Component**: `/src/components/SkillsDetailPage.tsx`
- **Skill Pages**: `/src/app/skills/[skill]/page.tsx`
- **Layout**: `/src/app/skills/layout.tsx`

## 🔄 Content Update Process

### Replace Demo Certificates
1. Add real PDF to `/public/certificates/[skill]/`
2. Add real thumbnail to `/public/images/certificates/`
3. Update data in skill page file

### Replace Demo Projects
1. Add real project image to `/public/images/projects/`
2. Update GitHub URL in skill page data
3. Modify project description and tech stack

## ✅ Verification Checklist

- [ ] All 6 skill pages load correctly
- [ ] Certificate downloads work
- [ ] Project images display properly
- [ ] GitHub links are functional
- [ ] Share buttons work
- [ ] Back navigation functions
- [ ] Responsive design on mobile
- [ ] Dark/light theme switching
- [ ] No console errors
- [ ] Performance is acceptable

## 🎯 Current Status

**✅ COMPLETE - All Features Implemented**

- 6 skill domains with detail pages
- Certificate download functionality
- Project showcase with GitHub integration
- Responsive design across all devices
- Modular, reusable architecture
- Comprehensive error handling
- Professional animations and interactions
- Theme integration (dark/light mode)
- Share functionality
- Management scripts for easy updates

**Ready for Production** 🚀

Replace placeholder content with real certificates and projects, then deploy!
