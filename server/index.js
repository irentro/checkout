const express = require ('express');
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'));

app.get('/listings', (req, res) => {
    
})

app.listen(port, console.log(`${port} is lisenting!`));