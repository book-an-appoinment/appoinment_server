import { config } from "dotenv";
import path from "node:path";

config({ path:  path.join(__dirname, `../../.env`) });

const {
   PORT,
   MONGOOSE_URI,
} = process.env;

export const Config = {
   PORT,
   MONGOOSE_URI
};