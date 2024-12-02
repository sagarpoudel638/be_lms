import mongoose from "mongoose";
const reviewCollectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true },
  review:{type: String,},
  rating:{type:Number,},
  isApproved:{type:Boolean, default:false}


});

export const Review = mongoose.model("review", reviewCollectionSchema)
