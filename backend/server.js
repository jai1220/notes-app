const express = require('express');
const connectDB = require('./config/db');
const notes = require('./data/notes');
const dotenv = require('dotenv');


const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddlewares');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());


const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.use('/api/users', userRoutes);


app.use(notFound);
app.use(errorHandler);

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => (
        n._id === req.params.id
    ));

    res.send(note);
});

app.listen(PORT, console.log(`Server at ${PORT}`));