
import mongoose from "mongoose";
const borrowHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true },
  borrowDate: { type: Date, default: Date.now,},
  dueDate: { type: Date, default: () => Date.now() + (7 * 24 * 60 * 60 * 1000)},
  returnDate: { type: Date,},
  status : {type: String,},
  isReviewed : {type: Boolean, default: false,},
  reviewId: { type: mongoose.Schema.Types.ObjectId, ref: "review", required: true },
  
});

export const borrowHistory = mongoose.model("borrowHistory", borrowHistorySchema);
