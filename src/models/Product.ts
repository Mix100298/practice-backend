import mongoose, { Document, Schema } from "mongoose";

// DEFINE THE PRODUCT INTERFACE
export interface IProduct {
  name: string;
  price: number;
  description: string;
}

// DEFINE THE PRODUCT MODEL
export interface IProductModel extends IProduct, Document {}

// DEFINE THE PRODUCT SCHEMA
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

// EXPORT THE PRODUCT MODEL
export default mongoose.model<IProductModel>("Product", productSchema);
