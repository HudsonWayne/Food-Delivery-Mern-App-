import foodModel from "../models/foodModel.js";

// Add food item
const addFood = async (req, res) => {
  let image_filename;

  // Check if a file was uploaded using Multer (assuming Multer is configured)
  if (req.file) {
    image_filename = `${req.file.filename}`;
  } else {
    console.log("No file uploaded");
    // Handle no file upload (e.g., set default image or send error)
    // You can set a default image path here:
    // image_filename = "default.jpg";
    // Or send an error response
    // return res.json({ success: false, message: "No file uploaded" });
  }

  // Log the entire request body for debugging
  console.log("Received data:", req.body);

  // Validate required fields from the request body
  const requiredFields = ['name', 'description', 'price', 'category', 'image'];
  const missingFields = requiredFields.filter(field => !req.body[field]);

  if (missingFields.length) {
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

const listFood = async (req, res) => {
  try{
      const foods = await foodModel.find({});
      res.json({success:true,data:foods})
  }catch(error){
    console.log(error);
  }
}

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{})

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Food Removed"})
  }catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

export { addFood, listFood, removeFood};
