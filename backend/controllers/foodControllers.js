import foodModel from "../models/foodModel.js";

// Add food item
const addFood = async (req, res) => {

  let image_filename;

  // Check if a file was uploaded using Multer (assuming Multer is configured)
  if (req.file) {
    image_filename = `${req.file.filename}`;
  } else {
    console.log("No file uploaded");
    // Handle the case where no file is uploaded (optional)
  }
console.log(req.files)
  return res.json({properties : req.files})

  // Validate required fields before creating the food object
  const requiredFields = ['name', 'description', 'price', 'category' ,'image'];
  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length ) {
    return res.json({ success: false, message: `Missing required fields: ${missingFields.join(', ')}` });
  }

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);

    // Handle specific errors (e.g., duplicate key)
    if (error.name === 'MongoError' && error.code === 11000) {
      // Duplicate key error
      return res.json({ success: false, message: "Duplicate food item" });
    } else {
      res.json({ success: false, message: "Error saving food" });
    }
  }
};

export { addFood };
