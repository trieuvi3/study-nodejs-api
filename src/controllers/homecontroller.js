import pool from "../configs/connectDB";

let getHomeController = async (req, res) => {
    let data = [];
    // simple query
    const [rows, fields] = await pool.execute( 'SELECT * FROM users');
    return res.render("index.ejs", {dataUser: rows});
}

let getDetailController = (req, res) => {
    return res.render("about.ejs");
}

module.exports = {
    getHomeController,
    getDetailController
}