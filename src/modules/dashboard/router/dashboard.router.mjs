import { express } from 'express';

function DashboardRouter() {

    const router = express.Router();

    function config() {

        router.get('/', (req, res, next) => {  });

    }

    config();
}

export const dashboardRouter = new DashboardRouter().router;