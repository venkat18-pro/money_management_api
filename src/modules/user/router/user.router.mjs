import * as express   from 'express';

class UserRouter {
    
    router = express.Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.get('/', (req, res, next) => {  });

    }

}

export const userRouter = new UserRouter().router;