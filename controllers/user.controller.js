import { User } from "../models/user.model.js";
import { sendToken } from "../utils/features.js";
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

const login = (req, res) => {
  res.send("login");
};

export { login, newUser };
