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
      id: {
         type: Number,
         
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

const Movie = model("movies", MovieSchema);

export default Movie;
