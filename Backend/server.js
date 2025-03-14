const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./db/connection'); 
const app = express();


app.use(express.json());


app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(bodyParser.json());


const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);


const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
