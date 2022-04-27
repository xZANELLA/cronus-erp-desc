const {
    User
} = require('../../entities');

module.exports = dependencies => {

    const {
        usersRepository
    } = dependencies;
    if (!usersRepository) {
        throw new Error('The users repository should be exist in dependencies');
    }

    const execute = ({
        nome,
        email,
        senha
    }) => {
        const user = new User({
            nome,
            email,
            senha
        })

        return usersRepository.add(user);
    }

    return {
        execute
    }
}