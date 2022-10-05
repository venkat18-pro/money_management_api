import * as express from 'express';
import { dashboardRouter } from '../modules/dashboard/router/dashboard.router.mjs'
import { incomeRouter } from '../modules/income/router/income.router.mjs'
import { outcomeRouter } from '../modules/outcome/router/outcome.router.mjs' 
import { userRouter } from '../modules/user/router/user.router.mjs'

class BaseRouter {
    
    router = express.Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.use('/user', userRouter)
        this.router.use('/dashboard', dashboardRouter);
        this.router.use('/income', incomeRouter);
        this.router.use('/outcome', outcomeRouter);

    }

}

export const baseRouter = new BaseRouter().router;