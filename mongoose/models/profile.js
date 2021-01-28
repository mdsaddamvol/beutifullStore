import mongoose from "mongoose";
const profileSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: [200, "name can not be more than 200 characters"],
	},
	email: {
		type: String,
		required: true,
		unique: true,
		maxlength: [200, "email can not be more than 200 characters"],
	},
});
module.exports =
	mongoose.models.profile || mongoose.model("profile", profileSchema);
