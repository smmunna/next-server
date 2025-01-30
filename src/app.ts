import express from 'express'
import cors from 'cors'
import router from './app/routes';
const app = express()

app.use(express.json());
app.use(cors());

app.use('/api/v1', router); //Main routes

app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app