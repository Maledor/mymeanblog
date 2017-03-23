var express = require('express');
var userRouter = express.Router();
var User = require('../models/user.model');

userRouter.get('/users', function(req, res){
  User.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        users: documents
      });
    }
  });
});
userRouter.get('/users/:id', function(req, res){
  User.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        users: documents
      });
    }
  });
});
userRouter.post('/login', function(req, res){
  console.log('You have logged in!');
});
userRouter.post('/signup', function(req, res){
  var user = new User(req.body);
  user.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Successfully created a new user'
      });
    }
  });
});
userRouter.put('/users/:id', function(req, res){
  User.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated'
      });
    }
  });
});
userRouter.delete('/users/:id', function(req, res){
  User.remove({_id: req.params.id}, function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});

module.exports = userRouter;
