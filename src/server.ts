import { Config } from "./config/index";
import app from "./app";
import mongoose from "mongoose";


const startServer = async () => {
   const PORT = Config.PORT ;
   const DB_URI = Config.MONGOOSE_URI;
   try {

    await mongoose.connect(DB_URI as string);
     console.log("MongoDB connected successfully.");
     
      app.listen(PORT, () => {
         console.log(`Listening to PORT, ${PORT}`);
      });
   } catch (err: unknown) {
      if (err instanceof Error) {
         console.error(err.message);
         setTimeout(() => {
            process.exit(1);
         }, 1000);
      }
   }
};

void startServer();