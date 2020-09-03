const proxy = [
    {
      context: '/api',
      target: 'http://ec2-3-22-77-94.us-east-2.compute.amazonaws.com:8080/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;