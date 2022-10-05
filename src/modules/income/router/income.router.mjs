import { Router } from 'express';

class IncomeRouter {
    
    router = Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.get('/', (req, res, next) => {  });

    }

}

export const incomeRouter = new IncomeRouter().router;