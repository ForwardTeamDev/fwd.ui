const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('home', '/', 'index');
routes.add('login', '/login', 'Login');
