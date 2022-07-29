const sendResponse = (response, status, message) => {
    if(!response) {
        return false;
    }

    response.status(status).json({
        message: message
    });
}

class BaseError extends Error {
    constructor(name, status, message) {
        super();

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.status = status;
        this.message = message;

        Error.captureStackTrace(this);

        console.error(name);
        console.error(message);
    }
}

class BadRequestError extends BaseError {
    constructor({
        name = 'Bad Request',
        message = 'Please, check params',
        status = 400,
        response
    }) {
        super(name, status, message);
        sendResponse(response, status, message);
    }
}

class ServerError extends BaseError {
    constructor({
                    name = 'Server error',
                    status = 500,
                    message = 'Server error. Please, try later',
                    response
    }) {
        super(name, status, message);
        sendResponse(response, status, message);
    }
}

module.exports = {
    BadRequestError,
    ServerError
}