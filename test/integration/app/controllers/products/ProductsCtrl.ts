import {BodyParams, Controller, Get, Inject, Post} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {Product, Variant} from "../../models/Products";

@Controller("/products")
export class ProductsCtrl {
  constructor(@Inject(Product) public product: MongooseModel<Product>, @Inject(Variant) public variant: MongooseModel<Variant>) {}

  @Post("/")
  async save(@BodyParams() body: Product) {
    const product = new this.product(body);

    return await product.save();
  }

  @Post("/variant")
  async saveVariant(@BodyParams() body: Variant) {
    const variant = new this.variant(body);

    return await variant.save();
  }

  @Get("/")
  async getList() {
    console.log("this.product.find({})", await this.product.find({}));

    return {products: await this.product.find({})};
  }
}
