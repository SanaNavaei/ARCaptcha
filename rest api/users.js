const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Get",
    });
});

router.post("/", (req, res, next) => {
    res.status(200).json({
        message: "Post",
    });
});

router.put("/:id", (req, res, next) => {
    const userId = req.params.id;
    res.status(200).json({
        message: `Update user with ID ${userId}`,
    });
});

router.delete("/:id", (req, res, next) => {
    const userId = req.params.id;
    res.status(200).json({
        message: `Delete user with ID ${userId}`,
    });
});

module.exports = router;
