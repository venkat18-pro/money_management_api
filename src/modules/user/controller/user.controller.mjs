import { httpStack } from '../../../util/http.mjs';
import { userService } from '../service/user.service.mjs';

class UserController {

    loginUser(req, res) {
        userService.loginUser(req, res);
        httpStack.sendSuccessMessage(req, res);
    }

}

export const userController = new UserController();