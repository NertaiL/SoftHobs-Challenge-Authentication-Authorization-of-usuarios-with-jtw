import  express  from "express";
import cors from "cors";
import { logger } from "logger-express";
import  registerRouter from "./config/routes/registerRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";
const app = express()
const PORT = process.env.PORT || 3000

//middlewares
app.use(express.json())
app.use(cors())
app.use(logger())
app.use(registerRouter)
app.use(loginRoutes)

app.listen(PORT,()=>{
    console.log(`🔥 Server ON 🔥 en el puerto https://localhost:${PORT}`);
})
