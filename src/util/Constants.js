const basePort = ':7979';
const baseIP = 'http://localhost';
const baseURL = baseIP+basePort;

const Constants = {
  fetchInterval: 10000,
  isPulling: true,
  urlLogin: baseURL+'/api/login',
  http: {
    GET: 'GET' 
  },
  action: {
    INIT: 'INIT',
    AUTH: 'AUTH'
  }
};

export default Constants;
