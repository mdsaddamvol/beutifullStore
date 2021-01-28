import dbconnect from "../../../mongoose/mongoose";
import product from "../../../mongoose/models/product";
dbconnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case "GET":
			try {
				const prod = await product.find({});
				if (prod) {
					res.status(200).json({ sucses: true, data: prod });
				}
			} catch (error) {
				res.status(400).json({ sucees: false });
			}
			break;
		case "POST":
			try {
				const prods = await product.create(req.body);
				if (prods) {
					res.status(200).json({ sucses: true, data: prods });
				}
			} catch (error) {
				res.status(400).json({ sucees: false });
			}
			break;

		default:
			break;
	}
};
