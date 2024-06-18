"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
exports.schema = `#graphql

type Image {
  public_id: String!
  url: String!
}

type Review {
  user: ID!
  name: String!
  rating: Float!
  comment: String!
}

type Product {
  id: ID!
  name: String!
  description: String!
  price: Float!
  ratings: Float!
  images: [Image!]!
  category: String!
  stock: Int!
  numberOfReviews: Int!
  reviews: [Review!]!
  isFreeDelivery: Boolean!
  inCart: Boolean!
  user: ID!
  createdAt: String!
  updatedAt: String!
}



type Query {
  hello: String
  getAllProducts: [Product!]!
  getSingleProduct(id: ID!): Product
}



`;
