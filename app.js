
const express = require('express');
const app = express();
const path = require('path');

const cors  = require('cors');
app.use(cors());


// body parser
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(express.json());





app.get('/', (req, res) => {
    try {
        res.sendFile((__dirname) + '/data.json');

    } catch (err) {
        res.send(err).status(401)

    }
});


// get time route

app.get('/time', (req, res) => {
    try {
let timeNow  = Date(Date.now());

res.send(timeNow.toString()).status(200)

    } catch (err) {

        res.send('something wants wrong please check it' + ' ' + err).status(400);

    }
})

// post detail

app.post('/user', (req, res) => {
    try {

        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const profile = req.body.profile;

        if (name || email || phone || profile == true) {
            res.send(`Hi everyone\n My name is ${name}\n email :- ${email}\n phone :- ${phone} \n profile :- ${profile}`).status(201);
        }
        else {
            res.send('data not found').status(404);
        }


    } catch (err) {

        res.send(`something wants wrong ${err}`);
    }
})

// server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
// })

module.exports  =app;





