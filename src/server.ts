import { Config } from "./config/index";
import app from "./app";

const startServer = async () => {
   const PORT = Config.PORT ;
   try {
     
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