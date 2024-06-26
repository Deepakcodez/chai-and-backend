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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.allProducts = void 0;
const product_model_js_1 = __importDefault(require("../model/product.model.js"));
const allProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_js_1.default.find();
    console.log('>>>>>>>>>>>', products);
    return products;
});
exports.allProducts = allProducts;
const getProductById = (parent, arg) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_js_1.default.findById(arg.id);
    console.log('>>>>>>>>>>>', product);
    return product;
});
exports.getProductById = getProductById;
