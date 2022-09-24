import * as express   from 'express';

class DashboardRouter {

    router = express.Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.get('/', (req, res, next) => {  });

    }


}

export const dashboardRouter = new DashboardRouter().router;