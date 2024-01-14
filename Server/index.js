import express from 'express'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const nameSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true })



app.use(cors())
app.use(express.json())


const Names = mongoose.model('Name', nameSchema);


//Get All Users

app.get('/names', async (req, res) => {
    try {
        const names = await Names.find({})
        res.send(names)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})




//Get by Id

app.get('/names/:id', async (req, res) => {
    try {
        const names = await Names.findById(req.params.id)
        res.send(names)
    } catch (error) {
        res.status(500).json({ message: error })
    }



})



//Add user

app.post('/names', async(req, res) => {
    try {
        const name = new Names({
            image: req.body.image,
            title: req.body.title,
            price: req.body.price
        })
        await name.save()
        res.send(name)
    } catch (error) {
        res.status(500).json({ message: error })

    }
    
})


//Delete User
app.delete('/names/:id', async (req, res) => {
    try {
        const names = await Names.findByIdAndDelete(req.params.id)
        res.status(500).json({ message: "Names Deleted" })
    } catch (error) {
        res.status(500).json({ message: error })
    }

})


const port = process.env.PORT
const url = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
    .then(() => console.log("Connected db"))
    .catch(err => console.log("Db not connect" + err))
app.listen(port, () => {
    console.log("Server Connection")
})