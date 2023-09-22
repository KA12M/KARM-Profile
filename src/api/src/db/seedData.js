const { database } = require("./mongo.config");
const KARM = require("../models/karm.model");

database.once("open", async () => {
  const karm = { fullName: "Karan Khumthong" };

  try {
    const count = await KARM.countDocuments();
    if (count == 0) {
      await KARM.create(karm);
      console.log(`Added KARM Profile: ${JSON.stringify(karm)}`);
    } else {
      console.log(`KARM Data already.`);
    }
  } catch (error) {
    console.error("Error inserting seed data:", error);
    database.close();
  }
});
