require('dotenv').config()

const ideal_pass = process.env.IDEALPASS
const bcrypt = require('bcrypt')

passhass = bcrypt.hash(ideal_pass, 10, (err, hash) => {
    if (err) {
        return console.log('found error', err.message)
    }
    console.log(hash)
})