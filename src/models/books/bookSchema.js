import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
    {
      title: { type: String, required: true },
      author: { type: String, required: true },
      imgUrl: { type: String, default: "https://picsum.photos/200/300" },
      isbn: { type: String, required: true },
      genre: { type: String, required: true },
      availability: { type: Boolean, default: true },
      status: { type: Boolean, default: false },
      averageRating: { type: Number },
    },
    { timestamps: true }
  );
  export const Book = mongoose.model("book", bookSchema);