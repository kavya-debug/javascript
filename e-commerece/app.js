const express = require('express')
var path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'listingPage.html'));
})



// app.get('/', (req, res) => {
//   res.redirect('http://localhost:3000/archive.html'); 
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})