import mongoose from "mongoose";

async function dbConnect() {
  // AMAZING THIS WORKS, I.E., CONNECTION REUSAGE WORKS!!
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    console.log(`Reusing old connection to db...`);
    return;
  }

  console.log(`Opening new connection to db...`);

  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

export default dbConnect;
