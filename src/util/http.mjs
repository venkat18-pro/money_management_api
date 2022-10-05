
class HttpStack {

    action(req, res, next, action) {
        next();
        action(req, res);
    }

    sendSuccessMessage(req, res) {
        res.status(200).send("Success.")
    } 

    sendErrorMessage(req, res) {
        res.status(400).send("Error.")
    }

}

export const httpStack = new HttpStack();