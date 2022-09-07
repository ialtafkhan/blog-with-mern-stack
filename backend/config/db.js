const mogoosoe = require("mongoose")
require("colors")

const db = async () => {
    try {

        await mogoosoe.connect(process.env.MONGO_URL)
        console.log(`conected to database`.bgBlue);

    } catch (error) {

        console.log(`something wrong`.bgRed);
        process.exit();

    }
}

module.exports = db