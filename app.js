import express from "express";
import cors from "cors"
import authroute from "./routes/authroute.js"
import mainroute from "./routes/mainroute.js"
import connect from "./config/connect.js"
const app = express()


app.use(connect)
app.use(
    express.urlencoded({
      extended: false,
    })
  );
  
app.use(cors())
app.use(express.json());

app.use(authroute)
app.use(mainroute)


export default app