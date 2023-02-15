const express = require("express");
const redis = require("redis");
const client = redis.createClient({
  host: "redis-server", //도커 환경일때랑 아닐때는 다르다
  port: 6379,
});
const app = express();
client.set("number", 0);

app.get("/", (req, res) => {
  client("number", (err, number) => {
    //숫자 올려주기
    client.set("number", parseInt(number) + 1);
    res.send("숫자가 1씩 올라갑니다 숫자:", number);
  });
});
app.listen(8080, () => {
  console.log("서버");
});
