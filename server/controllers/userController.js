const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const { stat } = require("fs");

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;

  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json("Utilisateur existant");
    }
    if (!name || !email || !password) {
      return res.status(400).json("Veuillez renseigner tous les champs");
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json("Veuillez entrez une adresse email valide");
    }
    if (!validator.isStrongPassword(password)) {
      return res.status(400).json("Veuillez entrez un mot de passe plus fort ");
    }

    user = new userModel({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      name,
      email,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  registerUser,
};
