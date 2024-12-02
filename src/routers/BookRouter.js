import { authMiddleware } from "../middlewares/Auth.js";
import { addBookValidator } from "../middlewares/joiValidation.js";
import {
  addBook,
  deleteBook,
  getBook,
  getBookbyID,
  updateBook,
} from "../models/books/bookModel.js";

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
    if (!bookData) {
      const errObj = {
        status: "error",
        message: "Not Found",
        error: {
          code: 400,
          details: "book not found",
        },
      };
      return res.status(404).send(errObj);
    }
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

router.post("/addBook", authMiddleware, addBookValidator, async (req, res) => {
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
/** delete book */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const bookData = await getBookbyID(id);

    if (!bookData) {
      const errObj = {
        status: "error",
        message: "Not Found",
        error: {
          code: 400,
          details: "book not found",
        },
      };
      return res.status(404).send(errObj);
    }
    await deleteBook(id);

    const respObj = {
      status: "success",
      message: "Book Deleted Successfully!",
    };
    return res.status(200).send(respObj);
  } catch (err) {
    console.log(err);
    const errObj = {
      status: "error",
      message: "Error Deleting",
      error: {
        code: 500,
        details: err.message || "Error Deleting Book",
      },
    };

    return res.status(500).send(errObj);
  }
});

// edit book
router.patch("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const bookData = req.body;
    const updateData = await updateBook(id, bookData);
    const respObj = { status: "success", message: "Book Updated Successfully" };
    return res.status(200).send(respObj);
  } catch (error) {const errObj = {
    status: "error",
    message: "Error updating",
    error: {
      code: 500,
      details: error.message || "Error updating book",
    },
    
  };return res.status(errObj.error.code).send(errObj);}
});
export default router;
