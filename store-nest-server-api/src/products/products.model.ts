import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    price: Number,
    imgUrl: String,
});

export interface Product {
        id: string,
        name: string,
        description: string,
        price: number,
        imgUrl: string,
}