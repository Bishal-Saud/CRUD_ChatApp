import mongoose from "mongoose";

const cookieOption = {
  maxAge: 15 * 24 * 60 * 60 * 1000,
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "chattu" })
    .then((data) => {
      console.log(`Connected to DB : ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = "hsdfgh";

  return res.status(code).cookie("chattu-token", token, cookieOption).json({
    success: true,
    message,
  });
};

export { connectDB, sendToken };
