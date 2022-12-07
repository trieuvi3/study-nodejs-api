import  express  from "express";
import homeController from "../controllers/homecontroller"
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomeController)
    router.get('/detail/user/:userId', homeController.getDetailController)

    return app.use('/', router);
}
export default initWebRoute;