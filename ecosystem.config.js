module.exports = {
  apps : [{
    script: 'backend/index.js',
    watch: '.',
    error_file: "/home/ubuntu/portfolio",
    out_file: "/home/ubuntu/portfolio"
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-16-171-159-187.eu-north-1.compute.amazonaws.com',
      ref  : 'origin/main',
      repo : 'git@github.com:awesominat/my-portfolio.git',
      path : '/home/ubuntu/portfolio',
      'pre-deploy-local': '',
      'post-deploy' : '    rm -rf frontend/ && rm -rf controllers models routes && mv backend/* ./ && mv backend/.* ./ 2>/dev/null || true && npm install && rm -rf backend/ &&  && pm2 reload ecosystem.config.js --env production',
      // 'post-deploy' : 'cd backend && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
