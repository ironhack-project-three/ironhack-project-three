const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Favorite: [
    {
      type: Schema.Types.ObjectId,
      ref: "Wine",
      default: [],
    },
  ],
  WantToTry: [
    {
      type: Schema.Types.ObjectId,
      ref: "Wine",
      default: [],
    },
  ],
  TriedInThePast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Wine",
      default: [],
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
