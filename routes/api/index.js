const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;


// Categories Requests
// GET categories http://localhost:3001/api/categories/
// GET category by id http://localhost:3001/api/categories/1
// CREATE category http://localhost:3001/api/categories/
// UPDATE category by id http://localhost:3001/api/categories/1
// DELETE category by id http://localhost:3001/api/categories/1

// Products Requests
// GET products http://localhost:3001/api/products/
// GET product by id http://localhost:3001/api/products/1
// CREATE product http://localhost:3001/api/products/
// UPDATE product by id http://localhost:3001/api/products/1
// DELETE product by id http://localhost:3001/api/products/1

// Tags Requests
// GET tags http://localhost:3001/api/tags/
// GET tag by id http://localhost:3001/api/tag/1
// CREATE tag http://localhost:3001/api/tags/
// UPDATE tag by id http://localhost:3001/api/tag/1
// DELETE tag by id http://localhost:3001/api/tag/1

