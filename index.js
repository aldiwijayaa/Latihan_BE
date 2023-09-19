const express = require ("express")
const cors = require ("cors")
const route = require ("./src/routes/router")

const app = express()
app.use(cors())
app.use(express.json())
app.get("/", (req, res)=>{
  res.send("it Work")
})
app.use(route)

const PORT = 3000
app.listen(PORT, ()=>{
  console.log('service runing at ', PORT)
})