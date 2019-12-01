const {
    createServer
} = require('http')
const {
    parse
} = require('url')
const next = require('next')
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
});


const handle = app.getRequestHandler()

app.prepare().then(() => {

    const server = express();
    server.use(express.json())
    server.get('/api/v1/movies', (req, res) => {
        return res.json({
            message: 'hello World'
        })
    });
    server.post('/api/v1/movies', (req, res) => {
        const movie = req.body;
        console.log(JSON.stringify(movie))
        return res.json({
            ...movie,
            author: 'John Smith',
            sex: 'great'
        })
    });
    server.patch('/api/v1/movies/:id', (req, res) => {
        const {
            id
        } = req.params;
        return res.json({
            message: `Updating post of id :${id}`
        })
    });
    server.delete('/api/v1/movies/:id', (req, res) => {
        const {
            id
        } = req.params;
        return res.json({
            message: 'Delete post of id: {id}'
        })
    });
    server.get('*', (req, res) => {
        return handle(req, res)
    })

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => {
        if (err) throw err
        console.log('> Ready on port ' + PORT)
    })
})