import User from "../modules/user.module.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res,next) => {
  const { username, email, password } = req.body;
  try {
    const saltRounds = 10;
    const hasedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ username, email, password: hasedPassword });
    await newUser
      .save()
      .then(() => res.status(200).json("User added Successfully!✅"));
  } catch (error) {
    const err = new Error(`User Registration Failed ❌: ${error.message}`);
    err.status = 400;
    next(err);
  }
};
