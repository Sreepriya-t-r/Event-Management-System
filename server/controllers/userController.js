const users=require("../database/models/userModels") 
const bcript=require('bcrypt')
const jwt=require("jsonwebtoken")


const bcrypt = require("bcrypt");

exports.registerControllers = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existinguser = await users.findOne({ email });

    if (existinguser) {
      return res.status(409).json("User already exists, please login");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newuser = new users({
      username,
      email,
      password: hashedPassword,
    });

    await newuser.save();
    res.status(201).json(newuser);
    
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
};


exports.loginControllers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: "User not found" });
    }

    
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWTSECRETKEY,
      { expiresIn: "5d" }
    );

    res.status(200).json({ user: existingUser, token });
    

  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};