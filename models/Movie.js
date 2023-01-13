import { Schema, model} from "mongoose";

const MovieSchema = new Schema(
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

const Movie = model("Movie", MovieSchema);

export default Movie;
