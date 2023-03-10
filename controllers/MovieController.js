import Movie from "../models/Movie.js";
// import Id from "../models/Id.js"

const MovieController = {};

MovieController.getAll = async (req, res) => {
   try {
      const movie = await Movie.find({});

      //tengo que restringuir la busqueda

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved succsessfully",
         results: movie,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

MovieController.get1All = async (req, res) => {
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


MovieController.getById = async (req, res) => {
   try {
      const id = req.params.id
      const movie = await Movie.findOne({id:id});

      //tengo que restringuir la busqueda

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved succsessfully",
         results: movie,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving id",
         error: error.message,
      });
   }
};

MovieController.getByName = async (req, res) => {
   try {
      
      const movie = await Movie.findOne({name:req.params.name});

      //tengo que restringuir la busqueda

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved succsessfully",
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




export default MovieController;
