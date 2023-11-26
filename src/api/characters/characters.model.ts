import mongoose from "mongoose";

const { Schema } = mongoose;

const CharactersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  weeklyGold: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model("Characters", CharactersSchema);