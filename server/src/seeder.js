import dotenv from "dotenv";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./models/user.js";
import Product from "./models/products.js";
import Order from "./models/order.js";
import connectMongoDB from "./config/mongoDB.js";

dotenv.config();

connectMongoDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });

        await Product.insertMany(sampleProducts);

        console.log("data Imported!");
        process.exit();
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
};


const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Data Destoryed");
        process.exit();

    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}