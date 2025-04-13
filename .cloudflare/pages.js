// CloudFlare Pages configuration
export default {
  // The build directory is where your static assets will be placed
  buildDirectory: 'dist',
  
  // The build command CloudFlare will run
  buildCommand: 'npm run build',
  
  // Optional: Enable Single Page Application (SPA) routing
  cloudflarePagesConfig: {
    routes: [
      { pattern: '/*', script: 'index.js', dest: '/index.html' }
    ]
  }
} 