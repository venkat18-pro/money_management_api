import { express } from 'express';
import { dashboardRouter } from '../modules/dashboard/router/dashboard.router.mjs'
import { incomeRouter } from '../modules/income/router/income.router.mjs'
import { outcomeRouter } from '../modules/outcome/router/outcome.router.mjs' 

function BaseRouter() {
    
    const router = express.Router();

    function config() {

        router.use('/dashboard', dashboardRouter);
        router.use('/income', incomeRouter);
        router.use('/outcome', outcomeRouter);

    }
    config();
}

export const baseRouter = new BaseRouter().router;