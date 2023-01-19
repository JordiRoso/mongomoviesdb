import { Schema, model} from "mongoose";

const IdSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },
      vote_average: {
         type: String,
         required: true,
         
      },
      // poster_path: {
      //    type: Number,
      //    required: true,
      // },
      
   },
   {
      timestamps: true,
   }
);

const Id = model("id", IdSchema);

export default Id;
