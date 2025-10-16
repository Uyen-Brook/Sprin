const express = require('express');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const app = express();    

const port = process.env.PORT;
console.log('check out my port', port);
configViewEngine(app);

app.get('/', (req, res) => {
  res.render('index.ejs')
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});
