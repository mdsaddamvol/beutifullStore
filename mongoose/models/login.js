import mongoose from "mongoose";
const loginSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		maxlength: [200, "email can not be more than 200 characters"],
	},
	hash: {
		type: String,
		required: true,
		maxlength: [200, "hash can not be more than 200 characters"],
	},
});
module.exports = mongoose.models.login || mongoose.model("login", loginSchema);
