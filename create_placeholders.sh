#!/bin/bash

# Create placeholder project images
echo "Creating placeholder project images..."

# Matrix Multiplication placeholder
cat > "/home/davinci/portfolio/public/images/projects/matrix-multiplication.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#f97316" stroke-width="2"/>
  <text x="200" y="100" text-anchor="middle" fill="#f97316" font-family="Arial" font-size="20" font-weight="bold">CUDA Matrix</text>
  <text x="200" y="130" text-anchor="middle" fill="#f97316" font-family="Arial" font-size="20" font-weight="bold">Multiplication</text>
  <text x="200" y="180" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="14">GPU Accelerated Computing</text>
</svg>
EOF

# Ray Tracer placeholder  
cat > "/home/davinci/portfolio/public/images/projects/raytracer.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#f97316" stroke-width="2"/>
  <text x="200" y="100" text-anchor="middle" fill="#f97316" font-family="Arial" font-size="20" font-weight="bold">GPU Ray Tracer</text>
  <text x="200" y="130" text-anchor="middle" fill="#f97316" font-family="Arial" font-size="16">Real-time Rendering</text>
  <circle cx="150" cy="180" r="20" fill="#3b82f6" opacity="0.6"/>
  <circle cx="200" cy="170" r="15" fill="#ef4444" opacity="0.6"/>
  <circle cx="250" cy="185" r="18" fill="#10b981" opacity="0.6"/>
</svg>
EOF

# Image Processing placeholder
cat > "/home/davinci/portfolio/public/images/projects/image-processing.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#f97316" stroke-width="2"/>
  <text x="200" y="90" text-anchor="middle" fill="#f97316" font-family="Arial" font-size="18" font-weight="bold">CUDA Image</text>
  <text x="200" y="115" text-anchor="middle" fill="#f97316" font-family="Arial" font-size="18" font-weight="bold">Processing Suite</text>
  <rect x="80" y="140" width="60" height="40" fill="#3b82f6" opacity="0.7"/>
  <rect x="160" y="140" width="60" height="40" fill="#ef4444" opacity="0.7"/>
  <rect x="240" y="140" width="60" height="40" fill="#10b981" opacity="0.7"/>
  <text x="200" y="200" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Convolution • Edge Detection • Noise Reduction</text>
</svg>
EOF

# Molecular Dynamics placeholder
cat > "/home/davinci/portfolio/public/images/projects/molecular-dynamics.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#f97316" stroke-width="2"/>
  <text x="200" y="80" text-anchor="middle" fill="#f97316" font-family="Arial" font-size="16" font-weight="bold">Molecular Dynamics</text>
  <text x="200" y="105" text-anchor="middle" fill="#f97316" font-family="Arial" font-size="16" font-weight="bold">Simulation</text>
  <circle cx="120" cy="150" r="8" fill="#3b82f6"/>
  <circle cx="180" cy="140" r="6" fill="#ef4444"/>
  <circle cx="220" cy="160" r="7" fill="#10b981"/>
  <circle cx="160" cy="170" r="5" fill="#f59e0b"/>
  <circle cx="240" cy="135" r="6" fill="#8b5cf6"/>
  <circle cx="200" cy="180" r="8" fill="#06b6d4"/>
  <circle cx="280" cy="155" r="7" fill="#ec4899"/>
  <text x="200" y="210" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">N-body Particle Simulation</text>
</svg>
EOF

# Create certificate thumbnails
echo "Creating placeholder certificate thumbnails..."

cat > "/home/davinci/portfolio/public/images/certificates/cuda-fundamentals-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#198754" font-family="Arial" font-size="16" font-weight="bold">NVIDIA</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">CUDA Programming</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Fundamentals</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">June 2024</text>
</svg>
EOF

cat > "/home/davinci/portfolio/public/images/certificates/gpu-optimization-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#198754" font-family="Arial" font-size="16" font-weight="bold">NVIDIA</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">GPU Performance</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Optimization</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">May 2024</text>
</svg>
EOF

cat > "/home/davinci/portfolio/public/images/certificates/parallel-computing-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#0d6efd" font-family="Arial" font-size="16" font-weight="bold">Coursera</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Parallel Computing</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">with CUDA</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">April 2024</text>
</svg>
EOF

echo "Placeholder images created successfully!"
