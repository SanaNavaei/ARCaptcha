<template>
    <div class="container">
        <div class="login" id="App">
            <h1>Welcome to our Page!</h1>
            <form>
                <div class="w-100">
                    <label for="">Username: </label>
                    <div id="user">
                        <input v-model="username" type="text" id="username" name="username" required />
                    </div>
                </div>
                <div class="w-100">
                    <label for="password">Password: </label>
                    <input v-model="password" type="password" id="password" name="password" required />
                </div>
                <div class="w-100">
                    <button @click="loginHandler" type="submit" id="button">login</button>
                </div>
                <a href="#">Forgot Password?</a>
            </form>
        </div>
    </div>
</template>

<script>
import userData from "./users.json";

export default {
    name: "App",
    data() {
        return {
            username: "",
            password: "",
            success: false,
            users: userData,
            choose: "api",
        };
    },

    methods: {
        loginHandler(event) {
            event.preventDefault();
            if (this.choose == "file") {
                this.loginFile();
            } else if (this.choose == "api") {
                this.loginApi();
            }
        },

        loginFile() {
            this.users.forEach((user) => {
                if (user.user_pass == this.password && user.user_name == this.username) {
                    console.log("Yaaaaaay");
                    this.success = true;
                }
            });
            if (!this.success) {
                console.log("Noo");
            }
        },

        loginApi() {
            fetch("https://arcaptcha-ato.darkube.app/", {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": "https://arcaptcha-ato.darkube.app/",
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: Verdana, sans-serif;
}

.container {
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(rgba(117, 121, 255, 0.9), rgba(117, 121, 255, 0.9)), url("images/ARCaptcha.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login {
    width: 500px;
    max-width: 100%;
    border-radius: 10px;
    padding: 50px 50px;
    background-color: white;
}

h1 {
    color: #7579ff;
    text-align: center;
    margin-bottom: 1rem;
}

label {
    color: #7579ff;
    display: block;
    margin-bottom: 8px;
}

#username,
#password {
    border-radius: 6px;
    width: 100%;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
}

#button {
    background-color: #7579ff;
    color: white;
    padding: 15px 40px;
    border-radius: 16px;
    margin-block: 1rem;
    margin-inline: auto;
    display: block;
}

a:hover {
    color: #7579ff;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.w-100 {
    width: 100%;
}
</style>
