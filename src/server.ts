/* All the activity of run server is here */
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";


async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}



main();
