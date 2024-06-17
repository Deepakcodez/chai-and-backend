import mongoose, { Schema, Document, Model } from "mongoose";

interface Image {
  public_id: string;
  url: string;
}

export interface Review  {
  // _id:   mongoose.Types.ObjectId | undefined; 
  user: mongoose.Types.ObjectId;
  name: string | undefined;
  rating: number;
  comment: string;
}

interface UserReference {
  user: mongoose.Types.ObjectId;
}

export interface ProdDocument extends Document, UserReference {
  name: string;
  description: string;
  price: number;
  ratings: number;
  images: Image[];
  category: string;
  stock: number;
  numberOfReviews: number;
  reviews: Review[];
  isFreeDelivery : boolean;
  inCart : boolean;
}

const productSchema = new Schema<ProdDocument>(
  {
    name: {
      type: String,
      minlength: 2,
      required: true,
    },   
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "please enter product price"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "enter product category"],
    },
    stock: {
      type: Number,
      required: [true, "enter product stock"],
      default: 1,
    },
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    isFreeDelivery: {
      type: Boolean,
      required: true,
      default: true,
    },   
    inCart :{
      type : Boolean,
      default : false,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Product: Model<ProdDocument> = mongoose.model<ProdDocument>(
  "Product",
  productSchema
);

export default Product;
  