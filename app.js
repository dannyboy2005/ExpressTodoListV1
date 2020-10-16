const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.set('view engine', 'ejs');

// Get the day
app.get("/", function(req,res) {
    let day = "";
    let today = new Date();
    let currentDay = today.getDay()

    if(currentDay === 0) {
        day = "Sunday"
        res.render("lists", {kindOfDay: day})
    } else if (currentDay === 1) {
        day = "Monday"
        res.render("lists", {kindOfDay: day})
    } else if (currentDay === 2) {
        day = "Tuesday"
        res.render("lists", {kindOfDay: day})
    } else if (currentDay === 3) {
        day = "Wednesday"
        res.render("lists", {kindOfDay: day})
    } else if (currentDay === 4) {
        day = "Thursday"
        res.render("lists", {kindOfDay: day})
    } else if (currentDay === 5) {
        day = "Friday"
        res.render("lists", {kindOfDay: day})
    } else {
        day = "Saturday"
        res.render("lists", {kindOfDay: day})

    }

});

app.listen(3000, function() {
    console.log("Server started on port 3000");
})