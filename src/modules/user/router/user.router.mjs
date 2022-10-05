import { Router } from 'express';
import { httpStack } from '../../../util/http.mjs'
import { userController } from '../controller/user.controller.mjs'

class UserRouter {
    
    router = Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.post('/login', (req, res, next) => { httpStack.action(req, res, next, userController.loginUser) });

    }

}

export const userRouter = new UserRouter().router;