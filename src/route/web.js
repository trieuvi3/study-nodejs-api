import  express  from "express";
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render("index.ejs");
    })

    router.get('/about', (req, res) => {
        res.render("about.ejs");
    })


    return app.use('/', router);
}
export default initWebRoute;