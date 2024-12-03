import { borrowHistory } from "./borrowHistorySchema.js";

export const borrowBook = async (borrowBookData) => {
    const newBorrowBook = new borrowHistory(borrowBookData);
    return await newBorrowBook.save();
}

