import { express } from 'express';

function OutcomeRouter() {

    const router = express.Router();

    function config() {

        router.get('/', (req, res, next) => {  });

    }

    config();
}

export const outcomeRouter = new OutcomeRouter().router;