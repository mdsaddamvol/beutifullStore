import dbconnect from "../../../mongoose/mongoose";
import product from "../../../mongoose/models/product";
dbconnect();

export default async (req, res) => {
	const {
		method,
		query: { id },
	} = req;
	switch (method) {
		case "GET":
			try {
				const prod = await product.findById(id).exec();
				if (prod) {
					res.status(200).json({ sucses: true, data: prod });
					res.end();
				}
			} catch (error) {
				res.status(400).json({ error });
				res.end();
			}
			break;

		default:
			break;
	}
};
