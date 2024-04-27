import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  // Check if Password and Confirm Password are same
  if(password !== confirmPassword) {
    return res.status(400).json({ error: "Password and Confirm Password do not match" });
  }

  const user = await User.findOne({username});
  // Check if the user already exists
    if(user) {
        return res.status(400).json({ error: "User already exists" });
    }

  // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create a new user
    const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
    });

    if(newUser) {

    // Generate jwt token
    await generateTokenAndSetCookie(newUser._id, res);  

    await newUser.save();

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic
    })
} else {
    res.status(400).json({ error: "Invalid User Data" });
}
  
  } catch (error) {
    console.log("There is an error in signup route", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({username});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');

    if(!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "User name or Password in invalid!" });
    }

    // Generate jwt token
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});

  } catch (error) {
    console.log("There is an error in login route", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const logout = (req, res) => {
 try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: "User logged out successfully" });

 } catch (error) {
    console.log("There is an error in logout route", error.message);
    res.status(500).json({ error: "Internal Server Error" });
 }
}
