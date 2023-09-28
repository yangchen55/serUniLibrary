// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     if (!process.env.MONGO_URL) {
//       return console.log(
//         "Make sure environment variable MONGO_URL has mongodb connection link "
//       );
//     }
//     mongoose.set("strictQuery", true);
//     const conn = await mongoose.connect(process.env.MONGO_URL);

//     conn?.connections && console.log("MongoDB connected!");
//   } catch (error) {
//     console.log(error);
//   }
// };


import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const str = process.env.NODE_ENV
      ? "mongodb://host.docker.internal:27017/aug_ecom_b"
      : process.env.MONGO_URL;
    console.log(str)
    mongoose.set("strictQuery", true);
    const con = await mongoose.connect(str);
  } catch (error) {
    console.log(error);
  }
};