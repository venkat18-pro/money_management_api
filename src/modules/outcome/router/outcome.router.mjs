import * as express  from 'express';

class OutcomeRouter {

    router = express.Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.get('/', (req, res, next) => {  });

    }

}

export const outcomeRouter = new OutcomeRouter().router;