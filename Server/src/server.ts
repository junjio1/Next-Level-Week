import express from "express"; 
import path from 'path'
import cors from 'cors'
import routes from"./routes"


const app = express();


app.use(cors())
app.use(express.json()) // plug in to express undestand json format 
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))


app.listen(3333);