const express = require("express")
const app = express()

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/jQuery_exercises.html");
});





const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) =>{
    if (error) {
        console.log(error);
    }
    console.log('server is now running on port', Number(PORT))
});
