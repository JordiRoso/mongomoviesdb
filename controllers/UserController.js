// const User = require("../models/User");
import User from "../models/User.js";

const UserController = {};

UserController.getAll = async (req, res) => {
   try {
      const users = await User.find();

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved succsessfully",
         data: users,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving users",
         error: error.message,
      });
   }
};

UserController.rentUserMovies = async (req, res) => {
   try{
      const user = await User.findById(req.params.id);
      const movie = req. body;
      const match = user.movies.find((m) => m._id == movie._id);

      if (match) {
         res.json({
            message:"El usuario ya tiene esta peli",
            inserted: false,
         });
      }else {
         const rentUser = await User.rentOne(
            {_id: req.params.id},
            {$push: {movies: req.body}}
         );
         res.json({
            message: "User movies renting successfully",
            data: rentUser,
            inserted: true,
         });
      }
   } catch (error){
      return res.status(500).json({
         success: false,
         message: "Error renting",
         error: error.message,
      });

   }
}


UserController.getByName = async (req, res) => {
   try {
      const id = req.params.id
      const movie = await Movie.findOne({name:req.params.name});

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



UserController.deleteMovie = async (req, res) => {
   try {
      const rentUser = await User.rentOne(
         {_id: req.params.id},
         {$pull: {movies: {_id: req.params.movieId}}}
      );

      //tengo que restringuir la busqueda

      return res.status(200).json({
         success: true,
         message: "Movie removed",
         data: rentUser,
         removed:true,
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Error retrieving removed",
         error: error.message,
      });
   }
};

//delete user by id

UserController.deleteById = async (req,res) => {
   try {
      const deletedOne = await User.deleteOne({_id: req.params.id});
      res.json({
         message: `${req.params.id} DELETED`,
         data: deletedOne,
      });
   } catch (error){
      res.status(500).send ("internal error");
   };
}



export default UserController;
