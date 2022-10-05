import { Router } from 'express';

class DashboardRouter {

    router = Router();

    constructor() {
        this.config();
    }

    config() {

        this.router.get('/', (req, res, next) => {  });

    }


}

export const dashboardRouter = new DashboardRouter().router;