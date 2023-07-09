const express = require("express");
const router = express.Router();

router.use(express.json());
const users = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
];

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Get usrs",
        users: users,
    });
});

router.post("/", (req, res, next) => {
    const { name } = req.body;
    const id = users.length + 1;
    const new_user = { id, name };
    users.push(new_user);

    res.status(200).json({
        message: "New User Created",
        user: users,
    });
});

router.put("/:id", (req, res, next) => {
    const userId = req.params.id;
    const { name } = req.body;
    const user = users.findIndex((user) => user.id === parseInt(userId));

    if (user != -1) {
        users[user].name = name;
        res.status(200).json({
            message: `User with ID ${userId} updated with ${name}`,
            user: users,
        });
    } else {
        res.status(404).json({
            message: `User with ID ${userId} not found`,
        });
    }
});

router.delete("/:id", (req, res, next) => {
    const userId = req.params.id;
    const user = users.findIndex((user) => user.id === parseInt(userId));

    if (user != -1) {
        users.splice(user, 1);

        res.status(200).json({
            message: `User with ID ${userId} deleted`,
            user: users,
        });
    } else {
        res.status(404).json({
            message: `User with ID ${userId} not found`,
        });
    }
});

module.exports = router;
