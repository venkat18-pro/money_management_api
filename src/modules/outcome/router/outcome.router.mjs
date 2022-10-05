import { Router } from 'express';

class OutcomeRouter {

    router = Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.get('/', (req, res, next) => {  });

    }

}

export const outcomeRouter = new OutcomeRouter().router;