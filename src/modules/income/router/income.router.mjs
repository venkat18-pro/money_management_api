import * as express   from 'express';

class IncomeRouter {
    
    router = express.Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.get('/', (req, res, next) => {  });

    }

}

export const incomeRouter = new IncomeRouter().router;