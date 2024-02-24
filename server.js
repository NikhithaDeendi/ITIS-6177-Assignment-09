const express = require("express");
const app = express();
const port = 3000;

const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/say',async(req,res)=>{
    try {
        console.log("Inside app.get(say). keyword=",req.query.keyword);
        const keyword = req.query.keyword;
        const response = await axios ({
            url:  "https://h2zokopfshxqntgsespesiwkra0rqrau.lambda-url.us-east-2.on.aws/",
            method:"get",
            params:{
                keyword
            }
        });
        console.log("response data:",response.data);
        res.status(200).json(response.data);
    } catch (err) {
        // console.log("error:",err);
        res.status(500).json({message:err});
}
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
