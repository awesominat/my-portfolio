require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')
const app = express()

const portfolio = require('./routes/portfolio')

app.use(express.json())

app.get('/', (req, res) => {
    console.log('here')
})

app.use('/portfolio', portfolio)

app.get('/portfolio/:id', (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.json({error: 'invalid id'})
    }
})

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, 'localhost', () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })