const express = require('express');

const app = express();

const PORT = process.env.PORT || 8081;

const routes = require('./frameworks/routes');

const dependencies = require('./config/dependencies');

module.exports = { 
    start: () => {
        // Midlewares
        app.use(express.json());
        app.use(express.urlencoded({
            extended: true
        }))

        app.set('view engine', 'ejs');
        app.engine('html', require('ejs').renderFile);

        // Routes
        app.use(routes(dependencies))

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        })
    }
}