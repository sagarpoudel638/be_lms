import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

//**Middle wares */

//** Routers  */

app.get("/",(req,res) => {
    console.log("api call")
    res.send("running")
})

//**Listen Server */
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server is running at ${PORT}`);
});
