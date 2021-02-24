const path = require("path");
const express = require("express");
const sendMail = require("./mail");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//email, subject, text
app.post("/email", (req, res, next) => {
  //Send email here
  const { subject, email, text } = req.body;
  console.log("Data", req.body);

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent!" });
    }
  });
});

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
});
