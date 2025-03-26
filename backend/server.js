import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at port: "+PORT);
});
