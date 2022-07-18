const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", function (req, res) {
	res.send('<h1>Home page</h1> <a href="/products">Products</a>');
});

//render all the products
app.get("/products", function (req, res) {
	const newProduct = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});

	res.json(newProduct);
});

//find product based on id
app.get("/products/:productID", function (req, res) {
	const { productID } = req.params;
	const product = products.find((product) => product.id === Number(productID));
	if (!product) {
		res.status(404).send("Product not found");
	}
	res.json(product);
});

app.get("/products/:productID/reviews/:reviewID", function (req, res) {
	const { productID, reviewID } = req.params;
	const product = products.find((product) => product.id === Number(productID));
	if (!product) {
		res.status(404).send("Product not found");
	}
	const review = product.reviews.find(
		(review) => review.id === Number(reviewID)
	);
	if (!review) {
		res.status(404).send("Review not found");
	}
	res.json(review);
});

//string query params
app.get("/query", function (req, res) {
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	if(sortedProducts.length < 1) {
		return res.status(202).json({success:true, data: []})
	}
	res.status(200).json(sortedProducts);
});
// 404 page
app.get("*", function (req, res) {
	res.send("<h1>404 page</h1>");
});

app.listen("3000", () => {
	console.log("Server is running on port 3000");
});
