let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "mkanaskhan9921",
    "email": "mkanaskhan9921@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("clicked");
    resultCont.innerHTML = `<img width=123 src="img/loding.svg" alt="">`
    let key = "ema_live_bmihd03HyDqZkynZuoEkDYDt3hEFz9VNYJUq0p4C";
    let email = document.getElementById("Email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();

    let str = ``;
      for (key of Object.keys(result)){
        if (result[key] !== "" && result[key] !== " "){
        str = str + `<div>${key}: ${result[key]}</div>`;
    }
      }
      console.log(str);
      resultCont.innerHTML = str;
});

