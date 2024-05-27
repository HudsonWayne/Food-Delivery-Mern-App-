// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://hudsonnbenhuraa:<password>@cluster0.5nrizx2.mongodb.net/food-del"; // Remove the port number

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// mongodb+srv:hudsonnbenhuraa:<password>@cluster0.uigojht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Use 'await' keyword before mongoose.connect()
    const conn = await mongoose.connect('mongodb+srv://hudsonnbenhuraa:<password>@cluster0.uigojht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`); // Template literal for string formatting
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
