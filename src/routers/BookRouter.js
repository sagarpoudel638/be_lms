import { addBook, getBook, getBookbyID } from "../models/books/bookModel.js";

import express from "express";
const router = express.Router();

//** Public Controllers */
/**Get all books */
router.get("/", async (req, res) => {
  try {
    let data = await getBook();
    let bookData = [...data];

    const respObj = {
      status: "success",
      message: "All Transactions fetched",
      data: bookData,
    };
    return res.status(200).send(respObj);
  } catch (error) {
    const errObj = {
      status: "error",
      message: "Error fetching",
      error: {
        code: 500,
        details: error.message || "Error fetching Books",
      },
    };
    return res.status(500).send(errObj);
  }
});
/**Get book by id */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const bookData = await getBookbyID(id);
    
    const respObj = {
      status: "success",
      message: "Book fetched",
      data: bookData,
    };
    return res.status(200).send(respObj);
  } catch (error) {
    const errObj = {
      status: "error",
      message: "Error fetching",
      error: {
        code: 500,
        details: error.message || "Error fetching book",
      },
    };
    return res.status(500).send(errObj);
  }
});
//**Private Controllers */
/** Add Book */

router.post("/addBook", async (req, res) => {
  try {
    let {
      title,
      author,
      isbn,
      imgUrl,
      genre,
      availiability,
      status,
      averageRating,
    } = req.body;
    const bookData = await addBook({
      title,
      author,
      isbn,
      imgUrl,
      genre,
      availiability,
      status,
      averageRating,
    });
    const respObj = {
      status: "success",
      message: "Book Added Successfully!",
    };
    console.log(bookData);
    res.status(200).send(respObj);
  } catch (error) {
    let errObj = {
      status: "error",
      message: "Error Adding",
      error: {
        code: 500,
        details: error.message || "Error Adding Book",
      },
    };

    res.status(500).send(errObj);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
});
export default router;
