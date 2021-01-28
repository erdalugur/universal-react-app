const express = require('express')
const cors = require('cors')
const { readFile, resolveApp } = require('./utils')

const app = express();
const db = require('./db')

const port = 5000;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

//-- middewars start --//
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "*",
}));
// serve static files js|css|html
app.use('/static', express.static(resolveApp('client/build/static')));
app.use('/images', express.static(resolveApp('client/build/images')));

//-- middlewares end --//

// movies router handler
app.get('/api/movies', async function (req, res, next) {
    res.send({ data: await db.movies.fetchAll() })
})

app.get('/api/movie/:id', async function (req, res, next) {
    let movie = await db.movies.firstOrDefault(x => x.id == req.params.id)
    res.send({ data: movie || null })
})

// index router handler
app.get('*', async function (req, res, next) {
    let html = await readFile('client/build/index.html')
    res.send(html)
})





