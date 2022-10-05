import { httpStack } from '../../../util/http.mjs';

class UserController {

    loginUser(req, res) {
        httpStack.sendSuccessMessage(req, res);
    }

}

export const userController = new UserController();