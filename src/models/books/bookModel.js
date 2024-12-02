import { Book } from "./bookSchema.js";


export const getBook = async () => {
    return await Book.find()
}

export const getBookbyID = async (id) => {
    return await Book.findById(id);
}

export const addBook = async (bookData) => {
    const newBook = new Book(bookData);
    return await newBook.save();
  };

export const deleteBook = async(id)=>{
    return await Book.findByIdAndDelete(id);
}


export const updateBook = async (id, updateData) => {
    const data = await Book.findByIdAndUpdate(
        id,
        {
          $set: updateData,
        },
        { new: true }
      );
    
      return data;
}



