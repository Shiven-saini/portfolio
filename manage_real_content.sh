#!/bin/bash

# Portfolio Content Management Script
# This script helps you add real certificates and projects to your portfolio

echo "🎯 Portfolio Content Management"
echo "=============================="
echo ""

# Function to add certificate
add_certificate() {
    echo "📜 Adding Real Certificate"
    echo "-------------------------"
    
    echo "Available skills:"
    echo "1. gpu-programming"
    echo "2. robotics" 
    echo "3. ai-engineering"
    echo "4. android-development"
    echo "5. fullstack-development"
    echo "6. linux-development"
    echo ""
    
    read -p "Select skill (1-6): " skill_choice
    
    case $skill_choice in
        1) skill="gpu-programming" ;;
        2) skill="robotics" ;;
        3) skill="ai-engineering" ;;
        4) skill="android-development" ;;
        5) skill="fullstack-development" ;;
        6) skill="linux-development" ;;
        *) echo "Invalid choice"; return ;;
    esac
    
    echo ""
    read -p "Path to your certificate PDF: " pdf_path
    read -p "Path to preview image (optional): " image_path
    read -p "Certificate filename (e.g., cuda-fundamentals): " filename
    
    # Copy PDF
    if [ -f "$pdf_path" ]; then
        cp "$pdf_path" "public/certificates/$skill/$filename.pdf"
        echo "✅ Certificate PDF copied to public/certificates/$skill/$filename.pdf"
    else
        echo "❌ PDF file not found: $pdf_path"
        return
    fi
    
    # Copy preview image if provided
    if [ -f "$image_path" ]; then
        extension="${image_path##*.}"
        cp "$image_path" "public/images/certificates/$filename-thumb.$extension"
        echo "✅ Preview image copied to public/images/certificates/$filename-thumb.$extension"
        echo ""
        echo "📝 Remember to update the thumbnail path in:"
        echo "   src/app/skills/$skill/page.tsx"
        echo "   Change: thumbnail: '/images/certificates/$filename-thumb.svg'"
        echo "   To:     thumbnail: '/images/certificates/$filename-thumb.$extension'"
    fi
    
    echo ""
    echo "🔧 Next steps:"
    echo "1. Edit src/app/skills/$skill/page.tsx"
    echo "2. Update certificate title, issuer, and date"
    echo "3. Test the download at http://localhost:5000/skills/$skill"
}

# Function to add project
add_project() {
    echo "🚀 Adding Real Project"
    echo "---------------------"
    
    echo "Available skills:"
    echo "1. gpu-programming"
    echo "2. robotics"
    echo "3. ai-engineering" 
    echo "4. android-development"
    echo "5. fullstack-development"
    echo "6. linux-development"
    echo ""
    
    read -p "Select skill (1-6): " skill_choice
    
    case $skill_choice in
        1) skill="gpu-programming" ;;
        2) skill="robotics" ;;
        3) skill="ai-engineering" ;;
        4) skill="android-development" ;;
        5) skill="fullstack-development" ;;
        6) skill="linux-development" ;;
        *) echo "Invalid choice"; return ;;
    esac
    
    echo ""
    read -p "Path to project image/screenshot: " image_path
    read -p "Project filename (e.g., matrix-multiplication): " filename
    read -p "GitHub repository URL: " github_url
    
    # Copy project image
    if [ -f "$image_path" ]; then
        extension="${image_path##*.}"
        cp "$image_path" "public/images/projects/$filename.$extension"
        echo "✅ Project image copied to public/images/projects/$filename.$extension"
        echo ""
        echo "📝 Remember to update in src/app/skills/$skill/page.tsx:"
        echo "   - image: '/images/projects/$filename.$extension'"
        echo "   - githubUrl: '$github_url'"
        echo "   - Update title, description, and technologies array"
    else
        echo "❌ Image file not found: $image_path"
        return
    fi
    
    echo ""
    echo "🔧 Next steps:"
    echo "1. Edit src/app/skills/$skill/page.tsx"
    echo "2. Update project title and description"
    echo "3. Update technologies array"
    echo "4. Test at http://localhost:5000/skills/$skill"
}

# Function to show file structure
show_structure() {
    echo "📁 Current File Structure"
    echo "------------------------"
    echo ""
    echo "Certificates (PDFs):"
    find public/certificates -name "*.pdf" 2>/dev/null || echo "No PDFs found"
    echo ""
    echo "Certificate Thumbnails:"
    find public/images/certificates -type f 2>/dev/null || echo "No thumbnails found"
    echo ""
    echo "Project Images:"
    find public/images/projects -type f 2>/dev/null || echo "No project images found"
}

# Function to validate content
validate_content() {
    echo "🔍 Validating Content"
    echo "--------------------"
    
    # Check for missing files in gpu-programming as example
    skill="gpu-programming"
    echo "Checking $skill..."
    
    # Parse the page.tsx file to find expected files
    if [ -f "src/app/skills/$skill/page.tsx" ]; then
        echo "✅ Page file exists"
        
        # Check PDFs
        pdfs=$(grep -o "'/certificates/[^']*'" "src/app/skills/$skill/page.tsx" | tr -d "'")
        for pdf in $pdfs; do
            if [ -f "public$pdf" ]; then
                echo "✅ PDF found: $pdf"
            else
                echo "❌ Missing PDF: public$pdf"
            fi
        done
        
        # Check thumbnails
        thumbs=$(grep -o "'/images/certificates/[^']*'" "src/app/skills/$skill/page.tsx" | tr -d "'")
        for thumb in $thumbs; do
            if [ -f "public$thumb" ]; then
                echo "✅ Thumbnail found: $thumb"
            else
                echo "❌ Missing thumbnail: public$thumb"
            fi
        done
        
        # Check project images
        images=$(grep -o "'/images/projects/[^']*'" "src/app/skills/$skill/page.tsx" | tr -d "'")
        for image in $images; do
            if [ -f "public$image" ]; then
                echo "✅ Project image found: $image"
            else
                echo "❌ Missing project image: public$image"
            fi
        done
    else
        echo "❌ Page file not found: src/app/skills/$skill/page.tsx"
    fi
}

# Main menu
while true; do
    echo ""
    echo "What would you like to do?"
    echo "1. Add real certificate"
    echo "2. Add real project" 
    echo "3. Show file structure"
    echo "4. Validate content"
    echo "5. Exit"
    echo ""
    
    read -p "Choose option (1-5): " choice
    
    case $choice in
        1) add_certificate ;;
        2) add_project ;;
        3) show_structure ;;
        4) validate_content ;;
        5) echo "👋 Goodbye!"; exit 0 ;;
        *) echo "Invalid choice. Please select 1-5." ;;
    esac
done
