<template>
    <div class="container">
        <div class="login">
            <h1>Login</h1>
            <form>
                <div class="w-100">
                    <label for="">Username: </label>
                    <input type="text" v-model="username" id="username" name="username" required />
                </div>
                <div class="w-100">
                    <label for="password">Password: </label>
                    <input type="password" v-model="password" id="password" name="password" required />
                </div>
                <div class="w-100">
                    <input @click="LoginHandler" type="submit" id="button" value="login" />
                </div>
                <a href="#">Forgot Password?</a>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },

    methods: {
        LoginHandler(e) {
            e.preventDefault();
            axios
                .post("https://arcaptcha-ato.darkube.app/signin", {
                    username: this.username,
                    password: this.password,
                })
                .then((response) => {
                    if (response.status == 200) {
                        const token = response.data.token;
                        console.log(token);
                    }
                })
                .catch((error) => {
                    console.log(error.response.data.message);
                });
        },
    },
};
</script>

<style scoped>
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
    min-height: 90vh;
    background-image: linear-gradient(rgba(117, 121, 255, 0.9), rgba(117, 121, 255, 0.9)),
        url("../assets/ARCaptcha.svg");
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
