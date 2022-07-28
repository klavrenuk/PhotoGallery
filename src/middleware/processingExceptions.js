export const processingExceptions = err => {
    if(err) {
        if(
            err.hasOwnProperty('response') &&
            err.response &&
            err.response.hasOwnProperty('data') &&
            err.response.data
        ) {
            console.error(err.response.data.message);
            return err.response.data.message || 'Server error';
        }

        console.error(err);
    }

    return false;
}