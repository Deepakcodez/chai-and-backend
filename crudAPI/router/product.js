const express = require("express");
const productControl = require("../controller/product");
const router = express.Router();


router
  // veiw prod by id
  .get("/:id", productControl.veiwProdById)

  // view all products api
  .get("/", productControl.veiwAll)

  // create post api
  .post("/", productControl.createPost)

  // update api   -->put method overwrite the content
  .put("/:id", productControl.putUpdate)

  // update api
  .patch("/:id", productControl.patchUpdate)

  // delete api
  .delete("/:id", productControl.deleteProd);


  exports.router = router;
