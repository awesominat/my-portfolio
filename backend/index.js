require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

const portfolio = require('./routes/portfolio')

app.use(express.json())
app.use(morgan('combined'))

app.get('/', (req, res, next) => {
    // console.log('here')
    res.send('talked to server')
    // next()
})

app.use('/api/portfolio', portfolio)

app.get('/api/portfolio/:id', (req, res) => {
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