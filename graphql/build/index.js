"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const dbConnection_1 = require("./utils/dbConnection");
const schema_1 = require("./graphql/schema");
const products_1 = require("./controllers/products");
(0, dbConnection_1.connectDB)();
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        const port = 5000;
        app.use(express.json());
        //creating graphql server
        const gqlServer = new server_1.ApolloServer({
            typeDefs: schema_1.schema,
            resolvers: {
                Query: {
                    hello: () => `hello acknowledged`,
                    getAllProducts: products_1.allProducts,
                    getSingleProduct: products_1.getProductById
                }
            },
        });
        //start graphql server
        yield gqlServer.start();
        app.use('/graphql', (0, express4_1.expressMiddleware)(gqlServer));
        app.get('/', (req, res) => res.send('Hello World!'));
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    });
}
init();
