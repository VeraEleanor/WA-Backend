const express = require('express')
const app = express() 
app.use(express.urlencoded({extended: false}))
app.use(getAccountInfo)
app.use(express.json())
const collectionRouter = require('./routes/collection');

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.use('/collection', collectionRouter);


app.set('view engine', 'ejs');

const cors = require("cors")
const genericError = "Sorry, something went wrong!"

const whitelist = ["http://localhost:3000"] //Change to the port in which react app is running
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

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

app.get('/vinyl/:artist', (req, res) => { 
    req.params.artist
    res.send
})

app.post("/result", (req, res) => { 
    if (req.body.color.trim().toUpperCase() === "BLUE") { 
        res.send("Congrats, that is correct")
    } else { 
    res.send("Incorrect, try again.")
    }
}) 

 app.listen(3000)  