const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //database query 
  // find all categories
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }


});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const CategoryData = await Category.findAllfindByPk(req.params.id,{
      include: [{ model: Product }],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const CategoryData = await Category.create({
      id: req.body.id,
      category_name: req.body.category_name,
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const CategoryData = await Category.findByIdAndUpdate(req.params.id, req.body.category_name);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }


});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No library card found with that id!' });
      return;
    }

    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
