import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/frontend', (req, res) => {
    res.render('frontend.ejs');
});

app.get('/backend', (req, res) => {
    res.render('backend.ejs');
});

app.get('/mission', (req, res) => {
    res.render('mission.ejs');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});