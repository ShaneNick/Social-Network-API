const { User, Thought } = require('../models');


const userController = {
  // get all users
  getAllUsers(req, res) {
    console.log('Accessing /api/users route');
    User.find({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // get one user by id
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // create user
  createUser(req, res) {
    User.create(req.body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // update user
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
  },

  // remove friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
  }
};

module.exports = userController;
