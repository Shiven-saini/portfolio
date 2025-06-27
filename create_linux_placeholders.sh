#!/bin/bash

# Create placeholder images for Linux Development projects
echo "Creating Linux Development project placeholders..."

# Linux Distro placeholder
cat > "/home/davinci/portfolio/public/images/projects/linux-distro.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="80" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="18" font-weight="bold">Developer Linux</text>
  <text x="200" y="105" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="18" font-weight="bold">Distribution</text>
  <rect x="100" y="130" width="200" height="60" fill="#374151" stroke="#10b981" stroke-width="1"/>
  <text x="200" y="150" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="12">$ sudo apt install dev-tools</text>
  <text x="200" y="170" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Optimized for Development</text>
  <text x="200" y="210" text-anchor="middle" fill="#6b7280" font-family="Arial" font-size="10">Custom Kernel • Pre-configured Environment</text>
</svg>
EOF

# System Monitor placeholder
cat > "/home/davinci/portfolio/public/images/projects/system-monitor.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="60" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="16" font-weight="bold">Real-time System Monitor</text>
  <rect x="50" y="80" width="300" height="20" fill="#374151"/>
  <rect x="50" y="80" width="180" height="20" fill="#3b82f6"/>
  <text x="60" y="95" fill="#fff" font-family="Arial" font-size="10">CPU: 60%</text>
  <rect x="50" y="110" width="300" height="20" fill="#374151"/>
  <rect x="50" y="110" width="120" height="20" fill="#ef4444"/>
  <text x="60" y="125" fill="#fff" font-family="Arial" font-size="10">Memory: 40%</text>
  <rect x="50" y="140" width="300" height="20" fill="#374151"/>
  <rect x="50" y="140" width="90" height="20" fill="#10b981"/>
  <text x="60" y="155" fill="#fff" font-family="Arial" font-size="10">Disk: 30%</text>
  <text x="200" y="190" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Process Management • Performance Analytics</text>
</svg>
EOF

# Kernel Module placeholder
cat > "/home/davinci/portfolio/public/images/projects/kernel-module.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="70" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="16" font-weight="bold">Custom Kernel Module</text>
  <circle cx="200" cy="120" r="40" fill="none" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="125" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="12">KERNEL</text>
  <rect x="120" y="170" width="160" height="30" fill="#374151" stroke="#10b981" stroke-width="1"/>
  <text x="200" y="185" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="10">Hardware Abstraction Layer</text>
  <text x="200" y="220" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Driver Development • System Programming</text>
</svg>
EOF

echo "Linux Development placeholders created!"
