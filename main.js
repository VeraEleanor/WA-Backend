const express = require('express')
const app = express() 
app.use(express.urlencoded({extended: false}))
app.use(getAccountInfo)

app.set('view engine', 'ejs');

app.get("/",  (req, res) => { 
    res.render("home")
})

app.get('/about', (req, res) => { 
    res.send("This is the about-page.")
})

function getAccountInfo(req, res, next) { 
    req.userLoggedIn = false
    if (req.userLoggedIn) { 
        res.send("Please register first.")
    } else { 
        next()
    }
}

app.post("/result", (req, res) => { 
    if (req.body.color.trim().toUpperCase() === "BLUE") { 
        res.send("Congrats, that is correct")
    } else { 
    res.send("Incorrect, try again.")
    }
}) 

 app.listen(3000)  