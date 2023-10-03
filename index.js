const express = require("express");
const app = express();
const port = 3000;
const programmingLanguagesRouter = require('./routes/programmingLanguages');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.json({ message: "ok" });
});
app.use("/programming-languages", programmingLanguagesRouter)
app.use((err,request,response, next) =>{
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    response.status(statusCode).json({message: err.message});
    return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});