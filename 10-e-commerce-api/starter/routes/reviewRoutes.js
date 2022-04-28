const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authentication");

const {
	createReview,
	getAllreviews,
	getSingleReview,
	updateReview,
	deleteReview,
} = require("../controllers/reviewController");

router.route("/").get(getAllreviews).post(authenticateUser, createReview);
router
	.route("/:id")
	.get(getSingleReview)
	.patch(authenticateUser, updateReview)
	.delete(authenticateUser, deleteReview);

module.exports = router;
