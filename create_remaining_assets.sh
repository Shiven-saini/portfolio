#!/bin/bash

echo "Creating Android Development and Full Stack Development assets..."

# ===============================
# ANDROID DEVELOPMENT ASSETS
# ===============================

echo "Creating Android Development assets..."

# Android Development Certificate Thumbnails
cat > "public/images/certificates/android-developer-certification-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#34a853" font-family="Arial" font-size="16" font-weight="bold">Google</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Associate Android</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Developer Certification</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">June 2024</text>
</svg>
EOF

cat > "public/images/certificates/jetpack-compose-certification-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="16" font-weight="bold">Android Developers</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Jetpack Compose</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">UI Development</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">May 2024</text>
</svg>
EOF

cat > "public/images/certificates/kotlin-certification-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#7f52ff" font-family="Arial" font-size="16" font-weight="bold">JetBrains</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Kotlin for Android</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Development</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">April 2024</text>
</svg>
EOF

# Android Development Project Images
cat > "public/images/projects/ecommerce-android.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#3ddc84" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="16" font-weight="bold">E-Commerce Android App</text>
  <text x="200" y="75" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="14">Jetpack Compose</text>
  <rect x="120" y="100" width="160" height="80" fill="#374151" stroke="#3ddc84" stroke-width="1" rx="8"/>
  <rect x="140" y="120" width="40" height="20" fill="#3ddc84" opacity="0.7"/>
  <rect x="200" y="120" width="40" height="20" fill="#3b82f6" opacity="0.7"/>
  <rect x="140" y="150" width="100" height="15" fill="#6b7280" opacity="0.7"/>
  <text x="200" y="205" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Payment Integration • Real-time Notifications • Offline Support</text>
</svg>
EOF

cat > "public/images/projects/fitness-tracker.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#3ddc84" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="16" font-weight="bold">AI Fitness Tracker</text>
  <text x="200" y="75" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="14">Health Monitoring</text>
  <circle cx="150" cy="130" r="25" fill="none" stroke="#ef4444" stroke-width="3"/>
  <text x="150" y="135" text-anchor="middle" fill="#ef4444" font-family="Arial" font-size="10">HEART</text>
  <rect x="220" y="110" width="50" height="40" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <text x="245" y="135" text-anchor="middle" fill="#3b82f6" font-family="Arial" font-size="10">STEPS</text>
  <path d="M 80 160 Q 120 140 160 150 Q 200 160 240 145 Q 280 130 320 140" stroke="#10b981" stroke-width="2" fill="none"/>
  <text x="200" y="200" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">AI Recommendations • Wearable Integration • Health Analytics</text>
</svg>
EOF

cat > "public/images/projects/task-manager.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#3ddc84" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="16" font-weight="bold">Task Management</text>
  <text x="200" y="75" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="14">Collaborative Platform</text>
  <rect x="80" y="100" width="20" height="20" fill="#10b981"/>
  <rect x="110" y="105" width="80" height="10" fill="#6b7280"/>
  <rect x="80" y="130" width="20" height="20" fill="#f59e0b"/>
  <rect x="110" y="135" width="60" height="10" fill="#6b7280"/>
  <rect x="80" y="160" width="20" height="20" fill="#ef4444"/>
  <rect x="110" y="165" width="100" height="10" fill="#6b7280"/>
  <circle cx="280" cy="130" r="30" fill="none" stroke="#3ddc84" stroke-width="2"/>
  <text x="280" y="135" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="10">TEAM</text>
  <text x="200" y="210" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Real-time Collaboration • Material Design 3 • Analytics</text>
</svg>
EOF

cat > "public/images/projects/camera-ml.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#3ddc84" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="16" font-weight="bold">Camera ML Processing</text>
  <text x="200" y="75" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="14">Real-time Vision</text>
  <rect x="120" y="100" width="160" height="80" fill="#374151" stroke="#3ddc84" stroke-width="2" rx="8"/>
  <circle cx="150" cy="120" r="8" fill="#ef4444"/>
  <rect x="180" y="115" width="40" height="10" fill="#3b82f6"/>
  <rect x="250" y="130" width="30" height="15" fill="#10b981"/>
  <text x="200" y="165" text-anchor="middle" fill="#3ddc84" font-family="Arial" font-size="10">LIVE DETECTION</text>
  <text x="200" y="205" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">CameraX • ML Kit • Object Detection • Text Recognition</text>
</svg>
EOF

# ===============================
# FULL STACK DEVELOPMENT ASSETS
# ===============================

echo "Creating Full Stack Development assets..."

# Full Stack Development Certificate Thumbnails
cat > "public/images/certificates/nextjs-certification-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#000" font-family="Arial" font-size="16" font-weight="bold">Vercel</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Next.js Expert</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Certification</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">May 2024</text>
</svg>
EOF

cat > "public/images/certificates/typescript-certification-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#0078d4" font-family="Arial" font-size="16" font-weight="bold">Microsoft</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">TypeScript Advanced</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Certification</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">April 2024</text>
</svg>
EOF

cat > "public/images/certificates/nodejs-certification-thumb.svg" << 'EOF'
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="#f8f9fa"/>
  <rect x="10" y="10" width="280" height="180" fill="white" stroke="#dee2e6" stroke-width="2"/>
  <text x="150" y="50" text-anchor="middle" fill="#68a063" font-family="Arial" font-size="16" font-weight="bold">Node.js Foundation</text>
  <text x="150" y="80" text-anchor="middle" fill="#333" font-family="Arial" font-size="14">Certificate of Completion</text>
  <text x="150" y="110" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Node.js Application</text>
  <text x="150" y="130" text-anchor="middle" fill="#333" font-family="Arial" font-size="12">Development</text>
  <text x="150" y="170" text-anchor="middle" fill="#6c757d" font-family="Arial" font-size="10">March 2024</text>
</svg>
EOF

# Full Stack Development Project Images
cat > "public/images/projects/saas-platform.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#0070f3" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="16" font-weight="bold">Multi-Tenant SaaS</text>
  <text x="200" y="75" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="14">Platform</text>
  <rect x="80" y="100" width="80" height="50" fill="#374151" stroke="#0070f3" stroke-width="1"/>
  <text x="120" y="120" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="10">TENANT A</text>
  <rect x="180" y="100" width="80" height="50" fill="#374151" stroke="#10b981" stroke-width="1"/>
  <text x="220" y="120" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="10">TENANT B</text>
  <rect x="280" y="100" width="80" height="50" fill="#374151" stroke="#f59e0b" stroke-width="1"/>
  <text x="320" y="120" text-anchor="middle" fill="#f59e0b" font-family="Arial" font-size="10">TENANT C</text>
  <rect x="150" y="170" width="100" height="20" fill="#7c3aed" opacity="0.8"/>
  <text x="200" y="185" text-anchor="middle" fill="white" font-family="Arial" font-size="10">SHARED SERVICES</text>
  <text x="200" y="220" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Multi-Tenancy • Subscriptions • Real-time Collaboration</text>
</svg>
EOF

cat > "public/images/projects/chat-app.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#0070f3" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="16" font-weight="bold">Real-time Chat App</text>
  <text x="200" y="75" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="14">WebRTC & Socket.io</text>
  <rect x="80" y="100" width="60" height="30" fill="#3b82f6" opacity="0.8" rx="15"/>
  <text x="110" y="120" text-anchor="middle" fill="white" font-family="Arial" font-size="10">MESSAGE</text>
  <rect x="260" y="120" width="60" height="30" fill="#10b981" opacity="0.8" rx="15"/>
  <text x="290" y="140" text-anchor="middle" fill="white" font-family="Arial" font-size="10">REPLY</text>
  <circle cx="150" cy="160" r="15" fill="#ef4444"/>
  <text x="150" y="165" text-anchor="middle" fill="white" font-family="Arial" font-size="8">VIDEO</text>
  <circle cx="200" cy="160" r="15" fill="#f59e0b"/>
  <text x="200" y="165" text-anchor="middle" fill="white" font-family="Arial" font-size="8">FILE</text>
  <circle cx="250" cy="160" r="15" fill="#8b5cf6"/>
  <text x="250" y="165" text-anchor="middle" fill="white" font-family="Arial" font-size="8">GROUP</text>
  <text x="200" y="200" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">End-to-End Encryption • File Sharing • Video Calls</text>
</svg>
EOF

cat > "public/images/projects/ecommerce-dashboard.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#0070f3" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="16" font-weight="bold">E-Commerce Dashboard</text>
  <text x="200" y="75" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="14">Business Intelligence</text>
  <rect x="60" y="100" width="80" height="40" fill="#374151" stroke="#3b82f6" stroke-width="1"/>
  <text x="100" y="115" text-anchor="middle" fill="#3b82f6" font-family="Arial" font-size="10">ANALYTICS</text>
  <rect x="160" y="100" width="80" height="40" fill="#374151" stroke="#10b981" stroke-width="1"/>
  <text x="200" y="115" text-anchor="middle" fill="#10b981" font-family="Arial" font-size="10">INVENTORY</text>
  <rect x="260" y="100" width="80" height="40" fill="#374151" stroke="#f59e0b" stroke-width="1"/>
  <text x="300" y="115" text-anchor="middle" fill="#f59e0b" font-family="Arial" font-size="10">ORDERS</text>
  <path d="M 80 160 L 120 150 L 160 155 L 200 145 L 240 150 L 280 140 L 320 145" stroke="#0070f3" stroke-width="2" fill="none"/>
  <text x="200" y="190" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Real-time Analytics • Inventory Tracking • Order Management</text>
</svg>
EOF

cat > "public/images/projects/api-management.svg" << 'EOF'
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="#1a1a1a"/>
  <rect x="20" y="20" width="360" height="210" fill="#2a2a2a" stroke="#0070f3" stroke-width="2"/>
  <text x="200" y="50" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="16" font-weight="bold">API Management</text>
  <text x="200" y="75" text-anchor="middle" fill="#0070f3" font-family="Arial" font-size="14">Documentation Platform</text>
  <rect x="80" y="100" width="60" height="25" fill="#3b82f6" opacity="0.8"/>
  <text x="110" y="117" text-anchor="middle" fill="white" font-family="Arial" font-size="9">DOCS</text>
  <rect x="160" y="100" width="60" height="25" fill="#10b981" opacity="0.8"/>
  <text x="190" y="117" text-anchor="middle" fill="white" font-family="Arial" font-size="9">TEST</text>
  <rect x="240" y="100" width="60" height="25" fill="#f59e0b" opacity="0.8"/>
  <text x="270" y="117" text-anchor="middle" fill="white" font-family="Arial" font-size="9">MONITOR</text>
  <rect x="120" y="140" width="160" height="20" fill="#7c3aed" opacity="0.8"/>
  <text x="200" y="155" text-anchor="middle" fill="white" font-family="Arial" font-size="10">API GATEWAY</text>
  <text x="200" y="190" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="12">Swagger • Rate Limiting • Webhook Management</text>
</svg>
EOF

echo "✅ Android Development and Full Stack Development assets created!"
