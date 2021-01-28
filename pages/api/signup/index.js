import dbconnect from "../../../mongoose/mongoose";
import profile from "../../../mongoose/models/profile";
import login from "../../../mongoose/models/login";
import bcrypt from "bcrypt";
dbconnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "POST":
			try {
				const saltRounds = 10;
				await bcrypt.hash(
					req.body.password,
					saltRounds,
					async function (err, hash) {
						const logn = await login.create({
							email: req.body.email,
							hash: hash,
						});
						const signup = await profile.create(req.body);
						if (signup && logn) {
							res.status(200).json({ sucses: true, data: signup });
						}
					}
				);
			} catch (error) {
				res.status(400).json({ sucees: false });
			}
			break;

		default:
			break;
	}
};
