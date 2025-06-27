#!/bin/bash

# Certificate and Project Management Script
# Usage: ./manage_content.sh [add-cert|add-project|create-skill]

function add_certificate() {
    echo "=== Add New Certificate ==="
    echo "Available skills: gpu-programming, linux-development"
    read -p "Skill domain: " skill
    read -p "Certificate ID: " cert_id
    read -p "Certificate title: " cert_title
    read -p "Issuer: " issuer
    read -p "Date (e.g., June 2025): " date
    read -p "PDF filename (e.g., my-cert.pdf): " pdf_file
    read -p "Thumbnail filename (e.g., my-cert-thumb.jpg): " thumb_file
    
    echo ""
    echo "Add this to your certificates array in src/app/skills/${skill}/page.tsx:"
    echo ""
    echo "  {"
    echo "    id: '${cert_id}',"
    echo "    title: '${cert_title}',"
    echo "    issuer: '${issuer}',"
    echo "    date: '${date}',"
    echo "    pdfPath: '/certificates/${skill}/${pdf_file}',"
    echo "    thumbnail: '/images/certificates/${thumb_file}'"
    echo "  },"
    echo ""
    echo "Remember to:"
    echo "1. Place PDF at: public/certificates/${skill}/${pdf_file}"
    echo "2. Place thumbnail at: public/images/certificates/${thumb_file}"
}

function add_project() {
    echo "=== Add New Project ==="
    echo "Available skills: gpu-programming, linux-development"
    read -p "Skill domain: " skill
    read -p "Project ID: " proj_id
    read -p "Project title: " proj_title
    read -p "Description: " description
    read -p "Technologies (comma-separated): " technologies
    read -p "GitHub URL: " github_url
    read -p "Image filename: " image_file
    read -p "Demo URL (optional): " demo_url
    
    # Convert technologies to array format
    tech_array=$(echo $technologies | sed 's/,/'\''", "\'\''/g' | sed 's/^/'\''/' | sed 's/$/'\''/')
    
    echo ""
    echo "Add this to your projects array in src/app/skills/${skill}/page.tsx:"
    echo ""
    echo "  {"
    echo "    id: '${proj_id}',"
    echo "    title: '${proj_title}',"
    echo "    description: '${description}',"
    echo "    technologies: [${tech_array}],"
    echo "    githubUrl: '${github_url}',"
    echo "    image: '/images/projects/${image_file}'"
    if [ ! -z "$demo_url" ]; then
        echo "    demoUrl: '${demo_url}'"
    fi
    echo "  },"
    echo ""
    echo "Remember to place image at: public/images/projects/${image_file}"
}

function create_skill() {
    echo "=== Create New Skill Page ==="
    read -p "Skill name (e.g., ai-engineering): " skill_name
    read -p "Skill title (e.g., AI Engineering): " skill_title
    read -p "Skill description: " skill_desc
    read -p "Icon name from lucide-react (e.g., Brain): " icon_name
    
    # Create directory
    mkdir -p "src/app/skills/${skill_name}"
    
    # Create page file
    cat > "src/app/skills/${skill_name}/page.tsx" << EOF
'use client'

import { ${icon_name} } from 'lucide-react'
import SkillsDetailPage from '@/components/SkillsDetailPage'

const ${skill_title//[^a-zA-Z]/}Page = () => {
  const certificates = [
    // Add your certificates here
  ]

  const projects = [
    // Add your projects here
  ]

  return (
    <SkillsDetailPage
      skillTitle="${skill_title}"
      skillDescription="${skill_desc}"
      skillIcon={${icon_name}}
      certificates={certificates}
      projects={projects}
      backUrl="/"
    />
  )
}

export default ${skill_title//[^a-zA-Z]/}Page
EOF

    echo ""
    echo "✅ Created: src/app/skills/${skill_name}/page.tsx"
    echo ""
    echo "Now add this to your Expertise.tsx domains array:"
    echo ""
    echo "  {"
    echo "    icon: ${icon_name},"
    echo "    title: '${skill_title}',"
    echo "    description: '${skill_desc}',"
    echo "    tags: ['Tag1', 'Tag2', 'Tag3'],"
    echo "    featured: true,"
    echo "    detailsUrl: '/skills/${skill_name}',"
    echo "    hasCertificates: true,"
    echo "    hasProjects: true,"
    echo "  },"
    echo ""
    echo "Don't forget to import ${icon_name} in Expertise.tsx!"
}

case "$1" in
    "add-cert")
        add_certificate
        ;;
    "add-project")
        add_project
        ;;
    "create-skill")
        create_skill
        ;;
    *)
        echo "Usage: $0 [add-cert|add-project|create-skill]"
        echo ""
        echo "Commands:"
        echo "  add-cert     - Generate code for adding a new certificate"
        echo "  add-project  - Generate code for adding a new project"
        echo "  create-skill - Create a new skill page from template"
        echo ""
        echo "Examples:"
        echo "  $0 add-cert"
        echo "  $0 add-project"
        echo "  $0 create-skill"
        ;;
esac
