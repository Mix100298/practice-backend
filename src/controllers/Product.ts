import { NextFunction, Request, Response } from "express";
import Product from "../models/Product";

// READ ALL PRODUCTS
const readAll = async (req: Request, res: Response, next: NextFunction) => {
  // FIND ALL PRODUCTS
  try {
    const products = await Product.find();
    // IF NO PRODUCTS FOUND
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }
    // RETURN THE PRODUCTS
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

// EXPORT THE FUNCTION
export { readAll };
