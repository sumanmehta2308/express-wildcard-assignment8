const express=require("express");
const app=express();
app.get("/orders",(req,res)=>{
    res.send("Here is lost of orders");
})
app.post("/orders",(req,res)=>{
    res.send("A new order has been created");
})
app.get("/users", (req, res) => {
  res.send("Here is the list of all users.");
});
app.post("/users", (req, res) => {
  res.send("A new user has been added.");
});
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});