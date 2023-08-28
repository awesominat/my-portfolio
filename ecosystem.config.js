module.exports = {
  apps : [{
    script: '/home/ubuntu/portfolio/source/index.js',
    watch: '.',
    error_file: "/home/ubuntu/portfolio/error.log",
    out_file: "/home/ubuntu/portfolio/output.log"
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-16-171-159-187.eu-north-1.compute.amazonaws.com',
      ref  : 'origin/main',
      repo : 'git@github.com:awesominat/my-portfolio.git',
      path : '/home/ubuntu/portfolio',
      'pre-deploy-local': '',
      // 'post-deploy' : 'rm -rf frontend/ && rm -rf controllers models routes && mv backend/* ./ && npm install && pm2 reload ecosystem.config.js --env production',
      'post-deploy' : 'rm -rf frontend/ && rm -rf controllers models routes && mv backend/* ./ && npm install && rm -rf backend/ && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
