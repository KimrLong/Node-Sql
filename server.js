const express = require("express");
const cors = require("cors");
const db = require("./app/models"); // added after init w/ Sql     ***//

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json //body parser is deprecated. Using 'Express.json' etc. instead
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
}); //called the sync after I initialized Sequelize in models  ... used force: true to override needing to re-sync   ***//

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});

require("./app/routes/routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


//using Express to build REST APIs
//cors provides Express midleware to enable CORS w/ various options