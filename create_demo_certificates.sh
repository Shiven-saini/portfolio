#!/bin/bash

echo "Creating demo PDF certificates for all skills..."

# Function to create a PDF certificate
create_certificate() {
    local file_path="$1"
    local title="$2" 
    local issuer="$3"
    local date="$4"
    
    cat > "$file_path" << EOF
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 250
>>
stream
BT
/F1 18 Tf
50 700 Td
($title) Tj
0 -50 Td
(Certificate of Completion) Tj
0 -100 Td
(This certifies that the holder has successfully) Tj
0 -30 Td
(completed the $title course) Tj
0 -50 Td
(Issued by: $issuer) Tj
0 -50 Td
(Date: $date) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000100 00000 n 
0000000280 00000 n 
0000000580 00000 n 

trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
650
%%EOF
EOF
}

# Create Robotics certificates
create_certificate "public/certificates/robotics/ros2-fundamentals.pdf" "ROS2 Fundamentals Certification" "The Construct" "March 2024"
create_certificate "public/certificates/robotics/opencv-computer-vision.pdf" "Computer Vision with OpenCV" "OpenCV University" "February 2024"
create_certificate "public/certificates/robotics/matlab-robotics.pdf" "MATLAB for Robotics and Control Systems" "MathWorks" "January 2024"

# Create AI Engineering certificates
create_certificate "public/certificates/ai-engineering/langchain-certification.pdf" "LangChain Development Certification" "LangChain Academy" "May 2024"
create_certificate "public/certificates/ai-engineering/vllm-optimization.pdf" "vLLM Performance Optimization" "Berkeley SkyLab" "April 2024"
create_certificate "public/certificates/ai-engineering/rag-systems.pdf" "Advanced RAG Systems Design" "AI Infrastructure Institute" "March 2024"
create_certificate "public/certificates/ai-engineering/ml-deployment.pdf" "ML Model Deployment at Scale" "MLOps Academy" "February 2024"

# Create Android Development certificates  
create_certificate "public/certificates/android-development/android-developer-certification.pdf" "Associate Android Developer Certification" "Google" "June 2024"
create_certificate "public/certificates/android-development/jetpack-compose-certification.pdf" "Jetpack Compose UI Development" "Android Developers" "May 2024"
create_certificate "public/certificates/android-development/kotlin-certification.pdf" "Kotlin for Android Development" "JetBrains" "April 2024"

# Create Full Stack Development certificates
create_certificate "public/certificates/fullstack-development/nextjs-certification.pdf" "Next.js Expert Certification" "Vercel" "May 2024"
create_certificate "public/certificates/fullstack-development/typescript-certification.pdf" "TypeScript Advanced Certification" "Microsoft" "April 2024"
create_certificate "public/certificates/fullstack-development/nodejs-certification.pdf" "Node.js Application Development" "Node.js Foundation" "March 2024"

echo "✅ All demo PDF certificates created!"
echo ""
echo "Demo certificates created in:"
echo "- public/certificates/robotics/"
echo "- public/certificates/ai-engineering/"
echo "- public/certificates/android-development/"
echo "- public/certificates/fullstack-development/"
