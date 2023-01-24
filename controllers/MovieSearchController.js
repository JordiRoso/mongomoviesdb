import Movie from "../models/Movie.js";
// import Id from "../models/Id.js"

const MovieSearchController = {};

// MovieSearchController.getAll = async (req, res) => {
//    try {
//       const movie = await Movie.find({});

//       //tengo que restringuir la busqueda

//       return res.status(200).json({
//          success: true,
//          message: "Get all users retrieved succsessfully",
//          results: movie,
//       });
//    } catch (error) {
//       return res.status(500).json({
//          success: false,
//          message: "Error retrieving users",
//          error: error.message,
//       });
//    }
// };
MovieSearchController.getAll = async (req, res) => {
   try {
      const movie = await Movie.find({id:id,});
       Movie.findOne({name:req.params.name});

      //tengo que restringuir la busqueda

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved succsessfully",
         results: movie,
         data: movie,
        
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};
export default MovieSearchController;