// const mongoose = require("mongoose");
import { Schema, model} from "mongoose";

const UserSchema = new Schema(
   {
      name: {
         type: String,
         required: false,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         match: /.+\@.+\..+/,
      },
      password: {
         type: String,
         required: true,
         minlength: 6,
      },
      // password2: {
      //    type: String,
      //    required: true,
      //    minlength: 6,
      //    // match: "loko",
      // },
      role: {
         type: String,
         enum: ["user", "admin", "super_admin"],
         default: "user",
      },
      movies: {
         type: Array,
         
         default:[],
      },
   },
   {
      timestamps: true,
   }
);

const User = model("users", UserSchema);

export default User;
