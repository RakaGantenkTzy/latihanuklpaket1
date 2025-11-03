const express = require("express")
const app = express()
const PORT = 8000

const userRoute = require(`./routes/user.route`)
const attendanceRoute = require(`./routes/attendance.route`)
const authRoute = require(`./routes/auth.route`)

app.use(`/user`, userRoute)
app.use(`/attendance`, attendanceRoute)
app.use(`/auth`, authRoute)

app.listen(PORT, () => {
    console.log(`Server of UKL runs on port ${PORT}`)
})