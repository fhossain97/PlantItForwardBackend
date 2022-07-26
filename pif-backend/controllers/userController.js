const User = require("../models/user");
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

// async function indexRoute(req, res) {
//   let allUsers = await User.find({});
//   res.json(allUsers);
// }

// function createRoute(req, res) {
//   let newUser = new User(req.body);
//   newUser.save(() => res.json({ message: "User Created" }));
// }

// function showRoute(req, res) {
//   User.findById(req.params.id, (err, user) => {
//     if (err) {
//       res.status(400).json(err);
//       return;
//     }
//     res.json(user);
//   });
// }

// async function updateRoute(req, res) {
//   await User.findByIdAndUpdate(req.params.id, req.body);
//   res.json(User);
// }

// async function deleteRoute(req, res) {
//   await User.findByIdAndDelete(req.params.id);
//   res.json({ message: "User deleted" });
// }

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user)
    res.json({token})
  } catch (err) {
    res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({user}, 
    SECRET,
    {notBefore: '7d'}
  );
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'Wrong password'});
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}


module.exports = {
  // indexRoute,
  // createRoute,
  // showRoute,
  // updateRoute,
  // deleteRoute,
  signup,
  login
};