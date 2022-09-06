import { express } from 'express';

function IncomeRouter() {

    const router = express.Router();

    function config() {

        router.get('/', (req, res, next) => {  });

    }

    config();
}

export const incomeRouter = new IncomeRouter().router;