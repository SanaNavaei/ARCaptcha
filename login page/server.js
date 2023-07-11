const fastify = require("fastify")();

fastify.register(require("fastify-static"), {
    root: __dirname,
    prefix: "/",
});

fastify.register(require("fastify-formbody"));

fastify.get("/", (request, reply) => {
    reply.sendFile("./login.html");
});

fastify.post("/login", (request, reply) => {
    const { username, password, "arcaptcha-token": arcaptchaToken } = request.body;

    fetch("https://api.arcaptcha.co/arcaptcha/api/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: arcaptchaToken,
            secret_key: "00000000000000000000",
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            fetch("https://arcaptcha-ato.darkube.app/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    reply.send(data);
                })
                .catch((error) => {
                    console.error(error);
                    reply.send({ error: "An error occurred" });
                });
        })
        .catch((error) => {
            console.error(error);
        });
});

fastify.listen({ port: 8000 }, (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log("Server started...");
});
