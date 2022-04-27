const { v4: uuidv4 } = require('uuid');


module.exports.User = class User {
    constructor({
        id,
        nome = null,
        email = null,
        senha = null,

    }) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;

        if (!id) {
            this.id = uuidv4();
        }
    }
}