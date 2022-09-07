const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());
const port = 5000;
const users = [
  {
    id: 0,
    name: "Asadulla Al Mamun",
    department: "CSE",
    CGPA: 3.93,
    email: "asadulla@email.com",
  },
  {
    id: 1,
    name: "Abdullah Al Faisla",
    department: "CSE",
    CGPA: 3.75,
    email: "faisal@email.com",
  },
  {
    id: 2,
    name: "Asifuzzaman Asif",
    department: "CSE",
    CGPA: 4.0,
    email: "asif@email.com",
  },
  {
    id: 3,
    name: "Nahid Amin",
    department: "EEE",
    CGPA: 3.9,
    email: "amin@gmail.com",
  },
  {
    id: 4,
    name: "Ehsanul Karim",
    department: "EEE",
    CGPA: 4.0,
    email: "ehnasul@gmail.com",
  },
];
app.get("/", (req, res) => {
  res.send(
    "Hello from the third practice node and express. Now I can run autostart"
  );
});
app.get("/users", (req, res) => {
  //query parameter
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(req.query.search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
//app method
app.post("/users", (req, res) => {
  console.log("Hitting from the Post", req.body);
  res.send("Hitting from inside");
});

//dynamic api
app.get("/users/:id", (req, res) => {
  const index = req.params.id;
  const user = users[index];
  res.send(user);
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
