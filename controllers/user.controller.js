import { compare } from "bcrypt";
import { User } from "../models/user.model.js";
import { sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";
// Create a new user and save it to the database and save token to cookie
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  const avatar = {
    public_id: "sasda",
    url: "sadaff",
  };

  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User created");
};

const login = TryCatch(async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      return next(new ErrorHandler("Invalid username or password", 404));
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) next(new ErrorHandler("Invalid username or password", 404));

    sendToken(res, user, 201, `Welcome back,${user.name}`);
  } catch (error) {
    next(error);
  }
});

const getMyProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user);
  res.status(200).json({
    success: true,
    data: user,
  });
});
const logout = (req, res, next) => {};

export { login, newUser, getMyProfile, logout };
