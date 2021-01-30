import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: [200, "name can not be more than 200 characters"],
	},
	discription: {
		type: String,
		required: true,
		maxlength: [1000, "discription can not be more than 1000 characters"],
	},
	price: {
		type: Number,
		required: true,
	},
	imgurl: {
		type: String,
		required: true,
	},
});
module.exports =
	mongoose.models.product || mongoose.model("product", productSchema);
