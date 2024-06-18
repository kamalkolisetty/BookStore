const express = require('express');
const dotenv = require('dotenv');
const mongoose=require("mongoose")
const app = express();
const cors = require("cors");
const bcryptjs=require("bcryptjs")
app.use(express.json());
app.use(cors());
// Load environment variables from .env file
dotenv.config();

// Access the PORT variable from the environment variables
const port = process.env.PORT || 4000;
const URI=process.env.MongoDBURI
//connect to mongodb
try{
mongoose.connect(URI);
console.log("Connected to MOngoDB")
}catch(err){
    console.log("ERRor is",err)
}


const Book = mongoose.model("Book",{
    name:{
        type:String
    },
    title:{
        type:String,
        
    },
    price:{
        type:Number,
    },
    category:{
        type:String,
    },
    image:{
        type:String,
    }

})



app.post('/additem',async (req,res)=>{
   
    const book=new Book({
       // id:id,
        name:req.body.name,
        title:req.body.title,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
        
    });
    console.log(book);
    await book.save();
    console.log("Saved to DB");
    res.json({
        success: true,
        name:req.body.name,
    })

})







app.get("/allitems",async (req,res)=>{
    const books=await Book.find({})
    console.log("ALL products Fetched")
    res.send(books)
})

//User Schema

const User = mongoose.model("User",{
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

        
    },
    password:{
        type:String,
        required:true
    },
}
)

app.post("/signup",async (req,res)=>{
    const u= await User.findOne({email:req.body.email})
    if(u){
        res.status(400).send({message:"Usr already exists"})
    }
else{
    const hashPassword= await bcryptjs.hash(req.body.password,10)
    const user=new User({
        // id:id,
        username:req.body.username,
         email:req.body.email,
         password:hashPassword,
         
     });
     console.log(user);
     await user.save();
     console.log("Saved to DB");
      res.json({
        message: "Signup Succesful",
        user:{
            _id:user._id,
            username:user.username,
            email:user.email,
        }
     })
    }
})

//login


app.post("/login",async (req,res)=>{
    const u= await User.findOne({email:req.body.email})
    if(!u){
        res.status(400).json({message:"no data "})
    }
else{

    const isMatch= await bcryptjs.compare(req.body.password,u.password)
    if(isMatch){
        console.log("same user in DB");
        res.json({
            message: "Login Succesful",
            user:{
                _id:u._id,
                username:u.username,
                email:u.email,
            }
            
        })
    }
    else{
        res.status(400).json({
           message:"Invalid password"
        })
    }
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

