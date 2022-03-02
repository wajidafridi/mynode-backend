var cors = require('cors')
const express = require('express')

const port = process.env.PORT || 8000;

const app = express()

app.use(cors())
app.use(express.json())

var feedbackList = [
    { id: 1, description: "Feed back number 1." },
    { id: 2, description: "Feed back number 2." },
    { id: 3, description: "Feed back number 3." }
];

app.get('/', (req, res) => {
    res.send('Hello World cehck')
})

// send all feedbacks
app.get('/api/feedback', (req, res) => {
    res.send(feedbackList);
})

// create new feedbacks
app.post('/api/feedback', (req, res) => {
    feedbackList.push({
        id:feedbackList.length + 1,
        description:req.body.description
    })
    res.send(feedbackList);
})

// delete feedback by id
app.delete('/api/feedback/:id', (req, res) => {
    const feedback = feedbackList.find(item => item.id === parseInt(req.params.id))
    if (!feedback) {
        res.status(404).send({ error: true, msg: "record not found..." });
    }
    const index=feedbackList.indexOf(feedback);
    feedbackList.splice(index,1);
    res.send(feedbackList);
})

// send specific feedbacks by id
app.get('/api/feedback/:id', (req, res) => {
    const feedback = feedbackList.find(item => item.id === parseInt(req.params.id))
    if (!feedback) {
        res.status(404).send({ error: true, msg: "record not found..." });
    }
    res.send(feedback);
})

app.listen(port, () => console.log(`Listening on port ${port}...`));