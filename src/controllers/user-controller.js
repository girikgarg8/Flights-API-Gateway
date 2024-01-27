const { StatusCodes } = require('http-status-codes');

const { UserService } = require('../services/index');

const { SuccessResponse, ErrorResponse } = require('../utils/common/index');

/**
 * POST : /signup
 * req-body {name: 'abc@xyz.com', password: '1234'} 
 */
async function createUser(req, res) {
    try {
        const user = await UserService.createUser({
            email: req.body.email,
            password: req.body.password
        })
        SuccessResponse.data = user;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}


module.exports = {
    createUser
}