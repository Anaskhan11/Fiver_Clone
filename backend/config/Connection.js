import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DBConnection).then(() => {
      console.log("Database Connected Sucessfully");
    });
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
