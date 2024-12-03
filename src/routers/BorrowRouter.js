import { authMiddleware } from "../middlewares/Auth.js";
import express from "express";
import { borrowBook } from "../models/borrowHistory/borrowHistoryModel.js";

const router = express.Router();
/** borrow books */
router.post("/",async (req,res) => {
    try {
        // let {
        //   userId,bookId, borrowDate
        // } = req.body;
        // const borrowBookData = await borrowBook({
        //     userId,bookId, borrowDate
        // });
        // const respObj = {
        //   status: "success",
        //   message: "Book borrowed Successfully!",
        // };
        // console.log(borrowBookData);
        // res.status(200).send(respObj);
        res.status(200).send("running");
      } catch (error) {
        let errObj = {
          status: "error",
          message: "Error borrowing",
          error: {
            code: 500,
            details: error.message || "Error borrowing Book",
          },
        };
    
        res.status(500).send(errObj);
      }
    
})

/** return book */
router.put("/return",async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})

/** Get history */
router.get("/history", async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})
export default router;