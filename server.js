const express = require('express');
const PORT = 3030;
const app = express();

app.listen(PORT, ()=>{
  console.log(`listening on Port:`+ PORT+` And URL: http://localhost:`+PORT);
});
