var admin = require("../controllers/User.Controller");


module.exports = (app) => {
    app.post("/login", admin.signin);
    app.post("/getSurveyData", admin.list);
    app.post("/exportCSV", admin.CSV)
    app.post("/getScore", admin.getScore)
    app.post("/updateScore", admin.updateScore)


};
