import * as express from 'express';
export const routes = express.Router();

//export { app as routes};


// These are just placeholder routes
routes.get('/', (req, res) => res.send('Hello World'));
routes.get('/users', (req, res) => res.send([]));
routes.post('/users', (req, res) => res.send({body: req.body}));