const express = require("express")
const app = express()
const port = 3000
let tmp = {}

app.use(express.json())

app.post('/komudotto', (req, res) => {
    tmp = req.body

    if (!(tmp.count && tmp.percent)){
        res.json({
            "ok": false,
            "error": "invalid parameter"
        })
    } else {
        res.json({
            "ok": true,
            "tmp": tmp
    })
    }
})

app.get("/komudotto", (req, res) => {
    res.json({
        "ok": true,
        "tmp": tmp
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
