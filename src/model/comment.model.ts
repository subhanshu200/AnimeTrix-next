import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide a user ID"],
    },
    animeId: {
        type: String,
        required: [true, "Please provide an anime ID"],
    },
    text: {
        type: String,
        required: [true, "Please provide a comment text"],
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Number,
        default: 0,
    },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
