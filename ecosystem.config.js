module.exports = {
  apps: [{
    name: 'portfolio',
    script: './backend/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-51-20-7-199.eu-north-1.compute.amazonaws.com',
      key: '~/.ssh/capybara.pem',      
      ref: 'origin/main',
      repo: 'git@github.com:awesominat/my-portfolio.git',
      path: '/home/ubuntu/portfolio',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
