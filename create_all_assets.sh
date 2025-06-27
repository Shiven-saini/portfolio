#!/bin/bash

echo "Creating comprehensive placeholder assets for all skills..."

# Create directories if they don't exist
mkdir -p public/images/projects
mkdir -p public/images/certificates

# ===============================
# ROBOTICS ASSETS
# ===============================

echo "Creating Robotics assets..."

# Robotics Certificate Thumbnails
cat > "public/images/certificates/ros2-fundamentals-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#0969da" font-family="Arial" font-size="16" font-weight="bold">The Construct</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">ROS2 Fundamentals</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Certification</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">March 2024</text>
</svg>
EOF

cat > "public/images/certificates/opencv-computer-vision-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#ff6b6b" font-family="Arial" font-size="16" font-weight="bold">OpenCV University</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Computer Vision</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">with OpenCV</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">February 2024</text>
</svg>
EOF

cat > "public/images/certificates/matlab-robotics-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#f39c12" font-family="Arial" font-size="16" font-weight="bold">MathWorks</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">MATLAB for Robotics</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">and Control Systems</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">January 2024</text>
</svg>
EOF

# Robotics Project Images
cat > "public/images/projects/self-balancing-robot.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="70" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="16" font-weight="bold">Self-Balancing Robot</text>
  <text x="200" y="95" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="14">PID Control System</text>
  <circle cx="200" cy="140" r="30" fill="none" stroke="#10b981" stroke-width="3"/>
  <rect x="185" y="125" width="30" height="30" fill="#10b981" opacity="0.7"/>
  <line x1="170" y1="180" x2="230" y2="180" stroke="#10b981" stroke-width="4"/>
  <text x="200" y="210" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">IMU • Gyroscope • PID Controllers</text>
</svg>
EOF

cat > "public/images/projects/ros2-navigation.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="60" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="16" font-weight="bold">ROS2 Navigation</text>
  <text x="200" y="85" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="14">Autonomous System</text>
  <path d="M 80 120 Q 150 100 220 130 Q 280 150 320 140" stroke="#3b82f6" stroke-width="3" fill="none"/>
  <circle cx="80" cy="120" r="5" fill="#10b981"/>
  <circle cx="320" cy="140" r="5" fill="#ef4444"/>
  <rect x="150" y="160" width="20" height="15" fill="#6b7280"/>
  <rect x="200" y="180" width="15" height="20" fill="#6b7280"/>
  <text x="200" y="220" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">SLAM • Path Planning • Obstacle Avoidance</text>
</svg>
EOF

cat > "public/images/projects/opencv-tracking.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="60" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="16" font-weight="bold">Computer Vision</text>
  <text x="200" y="85" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="14">Object Tracking</text>
  <rect x="100" y="110" width="40" height="30" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <rect x="180" y="130" width="35" height="25" fill="none" stroke="#ef4444" stroke-width="2"/>
  <rect x="260" y="120" width="45" height="35" fill="none" stroke="#10b981" stroke-width="2"/>
  <text x="120" y="105" text-anchor="middle" fill="#3b82f6" font-family="Arial" font-size="10">OBJ1</text>
  <text x="197" y="125" text-anchor="middle" fill="#ef4444" font-family="Arial" font-size="10">OBJ2</text>
  <text x="282" y="115" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="10">OBJ3</text>
  <text x="200" y="200" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">YOLO • Kalman Filter • Multi-Object Tracking</text>
</svg>
EOF

cat > "public/images/projects/matlab-robotic-arm.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="16" font-weight="bold">MATLAB Robotic Arm</text>
  <text x="200" y="75" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="14">Control System</text>
  <line x1="120" y1="180" x2="160" y2="140" stroke="#f39c12" stroke-width="4"/>
  <line x1="160" y1="140" x2="200" y2="120" stroke="#f39c12" stroke-width="4"/>
  <line x1="200" y1="120" x2="240" y2="110" stroke="#f39c12" stroke-width="4"/>
  <circle cx="120" cy="180" r="6" fill="#f39c12"/>
  <circle cx="160" cy="140" r="4" fill="#f39c12"/>
  <circle cx="200" cy="120" r="4" fill="#f39c12"/>
  <circle cx="240" cy="110" r="4" fill="#f39c12"/>
  <text x="200" y="210" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Simulink • Inverse Kinematics • Trajectory Planning</text>
</svg>
EOF

# ===============================
# AI ENGINEERING ASSETS
# ===============================

echo "Creating AI Engineering assets..."

# AI Engineering Certificate Thumbnails
cat > "public/images/certificates/langchain-certification-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="16" font-weight="bold">LangChain Academy</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">LangChain Development</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Certification</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">May 2024</text>
</svg>
EOF

cat > "public/images/certificates/vllm-optimization-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#1e40af" font-family="Arial" font-size="16" font-weight="bold">Berkeley SkyLab</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">vLLM Performance</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Optimization</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">April 2024</text>
</svg>
EOF

cat > "public/images/certificates/rag-systems-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="40" text-anchor="middle" fill="#dc2626" font-family="Arial" font-size="14" font-weight="bold">AI Infrastructure Institute</text>
  <text x="150" y="70" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="100" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Advanced RAG</text>
  <text x="150" y="120" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Systems Design</text>
  <text x="150" y="160" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">March 2024</text>
</svg>
EOF

cat > "public/images/certificates/ml-deployment-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#059669" font-family="Arial" font-size="16" font-weight="bold">MLOps Academy</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">ML Model Deployment</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">at Scale</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">February 2024</text>
</svg>
EOF

# AI Engineering Project Images
cat > "public/images/projects/vllm-inference.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#7c3aed" stroke-width="2"/>
  <text x="200" y="60" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="16" font-weight="bold">vLLM Inference Engine</text>
  <text x="200" y="85" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="14">High Performance LLM</text>
  <rect x="80" y="110" width="60" height="20" fill="#3b82f6" opacity="0.8"/>
  <rect x="170" y="110" width="60" height="20" fill="#10b981" opacity="0.8"/>
  <rect x="260" y="110" width="60" height="20" fill="#f59e0b" opacity="0.8"/>
  <text x="110" y="125" text-anchor="middle" fill="white" font-family="Arial" font-size="10">BATCH</text>
  <text x="200" y="125" text-anchor="middle" fill="white" font-family="Arial" font-size="10">QUANT</text>
  <text x="290" y="125" text-anchor="middle" fill="white" font-family="Arial" font-size="10">DIST</text>
  <text x="200" y="160" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="12">3x Throughput Improvement</text>
  <text x="200" y="200" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Optimized Batching • Quantization • Distributed Serving</text>
</svg>
EOF

cat > "public/images/projects/langchain-rag.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#7c3aed" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="16" font-weight="bold">Enterprise RAG System</text>
  <text x="200" y="75" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="14">LangChain Integration</text>
  <rect x="60" y="100" width="80" height="40" fill="#374151" stroke="#7c3aed" stroke-width="1"/>
  <text x="100" y="115" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="10">DOCS</text>
  <text x="100" y="130" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="10">CHUNK</text>
  <rect x="160" y="100" width="80" height="40" fill="#374151" stroke="#10b981" stroke-width="1"/>
  <text x="200" y="115" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="10">VECTOR</text>
  <text x="200" y="130" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="10">DB</text>
  <rect x="260" y="100" width="80" height="40" fill="#374151" stroke="#f59e0b" stroke-width="1"/>
  <text x="300" y="115" text-anchor="middle" fill="#f59e0b" font-family="Arial" font-size="10">LLM</text>
  <text x="300" y="130" text-anchor="middle" fill="#f59e0b" font-family="Arial" font-size="10">GEN</text>
  <text x="200" y="180" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Document Chunking • Vector DB • Prompt Engineering</text>
</svg>
EOF

cat > "public/images/projects/mlops-pipeline.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#7c3aed" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="16" font-weight="bold">MLOps Pipeline</text>
  <text x="200" y="75" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="14">Auto-Scaling System</text>
  <circle cx="80" cy="120" r="15" fill="#3b82f6"/>
  <text x="80" y="125" text-anchor="middle" fill="white" font-family="Arial" font-size="8">DATA</text>
  <rect x="130" y="105" width="30" height="30" fill="#10b981"/>
  <text x="145" y="120" text-anchor="middle" fill="white" font-family="Arial" font-size="8">TRAIN</text>
  <circle cx="200" cy="120" r="15" fill="#f59e0b"/>
  <text x="200" y="125" text-anchor="middle" fill="white" font-family="Arial" font-size="8">TEST</text>
  <rect x="250" y="105" width="30" height="30" fill="#ef4444"/>
  <text x="265" y="120" text-anchor="middle" fill="white" font-family="Arial" font-size="8">DEPLOY</text>
  <circle cx="320" cy="120" r="15" fill="#8b5cf6"/>
  <text x="320" y="125" text-anchor="middle" fill="white" font-family="Arial" font-size="8">MONITOR</text>
  <text x="200" y="170" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">MLflow • Kubeflow • A/B Testing • Auto-Scaling</text>
</svg>
EOF

cat > "public/images/projects/multimodal-ai.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#7c3aed" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="16" font-weight="bold">Multimodal AI System</text>
  <text x="200" y="75" text-anchor="middle" fill="#7c3aed" font-family="Arial" font-size="14">Cross-Modal Processing</text>
  <rect x="80" y="100" width="40" height="30" fill="#3b82f6" opacity="0.8"/>
  <text x="100" y="120" text-anchor="middle" fill="white" font-family="Arial" font-size="10">TEXT</text>
  <rect x="140" y="100" width="40" height="30" fill="#10b981" opacity="0.8"/>
  <text x="160" y="120" text-anchor="middle" fill="white" font-family="Arial" font-size="10">IMAGE</text>
  <rect x="200" y="100" width="40" height="30" fill="#f59e0b" opacity="0.8"/>
  <text x="220" y="120" text-anchor="middle" fill="white" font-family="Arial" font-size="10">AUDIO</text>
  <circle cx="200" cy="160" r="20" fill="#7c3aed" opacity="0.8"/>
  <text x="200" y="165" text-anchor="middle" fill="white" font-family="Arial" font-size="10">UNIFIED</text>
  <text x="200" y="200" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Transformers • CLIP • Whisper • Attention Mechanisms</text>
</svg>
EOF

echo "✅ All assets created successfully!"
echo ""
echo "Next steps:"
echo "1. Replace placeholder certificates with real PDFs in public/certificates/[skill]/"
echo "2. Update project data in src/app/skills/[skill]/page.tsx files"
echo "3. Replace GitHub URLs with your actual repositories"
echo "4. Test all pages at http://localhost:5000/skills/[skill-name]"
