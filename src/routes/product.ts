import express from "express";
import { readAll } from "../controllers/Product";

// CREATE A ROUTER
const router = express.Router();

// ROUNTE TO GET ALL PRODUCTS
router.get("/getAll", readAll);

// EXPORT THE ROUTER
export { router as productRouter };
