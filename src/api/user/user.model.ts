import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
      email: {
          type: String,
          unique: true,
          required: true,
      },
      password: {
          type: String,
          required: false,
      },
      characters: [{
          type: Schema.Types.ObjectId,
          ref: 'Character'
      }]
  },
  {timestamps: true}
);

export default mongoose.model("User", UserSchema);