const express = require("express")
const bodyParser = require("body-parser")

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
const date = require(__dirname + "/date.js")


// Global Vars
const items = [];
const workItems = [];

// Get pathway
app.get("/", function(req,res) {
    
let day = date.getDate();

    res.render("lists", {
        listTitle: day, newListItems: items
    });
});


// Post from the form to add new LI
app.post("/", function(req, res) {
   let item = req.body.newItem;

   if(req.body.list === "Work") {
       workItems.push(item);
       res.redirect("/work")
   } else {
    items.push(item);

    res.redirect("/");
   }
})

app.get("/work", function(req, res) {
    res.render("lists", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function (req, res) {
    res.render("about")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})