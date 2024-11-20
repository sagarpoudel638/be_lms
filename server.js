import express from "express";
import cors from "cors";
import authRouter from "./src/routers/AuthRouter.js";
import bookRouter from "./src/routers/BookRouter.js"
import { connectMongoDB } from "./src/config/dbConfig.js";
const app = express();
const PORT = process.env.PORT || 8000;
connectMongoDB();

//**Middle wares */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//** Routers  */

app.get("/",(req,res) => {
    console.log("api call")
    res.send("running")
})
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/book", bookRouter);
//**Listen Server */
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server is running at ${PORT}`);
});
