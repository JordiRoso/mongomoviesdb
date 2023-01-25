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




UserController.getByName = async (req, res) => {
   try {
      
      const user = await User.findOne({name:req.params.name});

      //tengo que restringuir la busqueda

      return res.status(200).json({
         success: true,
         message: "Get all users retrieved succsessfully",
         data: user,
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
      const updatedUser = await User.updateOne(
         {_id: req.params.id},
         {$pull: {movies: {_id: req.params.movieId}}}
      );

      //tengo que restringuir la busqueda

      return res.status(200).json({
         
         message: "Movie removed",
         data: updatedUser,
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


UserController.rentUserMovies = async (req, res) => {
   console.log(req.params);
   try {
     const user = await User.findById(req.params.id);
   //   const user = await User.findById(req.params.userId);
     const movie = req.body;
     const match = user.movies.find((m) => m._id == movie._id);
   //   const match = false;
     if (match) {
       res.json({
         message: "User already have this movie",
         inserted: false,
       });
     } else {
       const updatedUser = await User.updateOne(
         { _id: req.params.id },
         // { _id: req.params.userId },
         { $push: { movies: req.body } }
         // { $push: { movies: req.params.movieId } }
       );
       res.json({
         message: "User movies updated successfully",
         data: updatedUser,
         inserted: true,
       });
     }
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 };


//  UserController.deleteUserMovies = async (req, res) => {
//    console.log(req.params);
//    try {
//      const user = await User.findById(req.params.userId);
//      const movie = req.body;
 
//      const match = false;
//      if (match) {
//        res.json({
//          message: "User already have this movie",
//          inserted: false,
//        });
//      } else {
//        const updatedUser = await User.updateOne(
//          { _id: req.params.userId },
//          { $pull: { movies: req.params.movieId } }
//        );
//        res.json({
//          message: "User movies updated successfully",
//          data: updatedUser,
//          inserted: true,
//        });
//      }
//    } catch (error) {
//      res.status(500).json({ message: error.message });
//    }
//  };
 






export default UserController;
