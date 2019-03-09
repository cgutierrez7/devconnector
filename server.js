const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = require('./config/keys').mongoURI; //name as db because only for getting db 
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

//connect to db (this would be 1 big line, but broken up to see what is going on)
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Let's write our first route
app.get('/', (req, res) => res.send('Hello world!!!!'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 8300;
app.listen(port, () => console.log(`Server running on port ${port}`));