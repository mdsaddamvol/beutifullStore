import dbconnect from "../../../mongoose/mongoose";
import login from "../../../mongoose/models/login";
import profile from "../../../mongoose/models/profile";
import bcrypt from "bcrypt";
dbconnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "GET":
			try {
				const Hash = await login.findOne({ email: req.body.email });
				if (Hash) {
					const checkHash = await bcrypt.compare(req.body.password, Hash.hash);
					if (checkHash) {
						const profil = await profile.findOne({ email: req.body.email });
						res.status(200).json({ sucses: true, data: profil });
					}
				}
			} catch (error) {
				res.status(400).json({ sucees: false });
			}
			break;

		default:
			break;
	}
};
