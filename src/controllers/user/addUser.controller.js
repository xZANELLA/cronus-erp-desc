const {
    Response
} = require('../../frameworks/common');

module.exports = dependencies => {

    const {
        useCases: {
            user: {
                addUserUseCase
            }
        }
    } = dependencies;

    return async (req, res, next) => {
        try {
            const {
                body = {}
            } = req;

            const {
                id,
                nome,
                email,
                senha
            } = body;

            const addUser = addUserUseCase(dependencies);
            const response = await addUser.execute({
                id,
                nome,
                email,
                senha
            });

            res.json(new Response({
                status: true,
                content: response
            }))

            next();

        } catch (err) {
            next(err)
        }
    };
}