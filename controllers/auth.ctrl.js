import User from "../models/user.mdl";
import jwt from "jsonwebtoken";
export const register = async (req,res) => {
	const {name,password,email} = req.body;
	//res.status(200).send(`here is you message: ${req.params.message}`);
	if(!name) return res.status(400).send("Name is required");
	if(!password || password.length < 6) return res.status(400).send("password is required or atleast 6 character long");
	let userExist = await User.findOne({email}).exec();
	if(userExist) return res.status(400).json({
            message:"email already taken"
        });
		const user = new User(req.body)
		try{
			await user.save();
			console.log("user created",user);
			return res.status(200).json({
				ok:true
			});
		}
		catch(err){
			console.log(err);
			res.status(400).send("err creating try again");
		}
};
export const login = async (req,res) => {
    try{
    const {email,password} = req.body;
    let user = await User.findOne({email}).exec();
    if(!user) return res.status(400).send("user not found");
    user.comparePassword(password,(err,match) => {
        console.log(err,match);
        if(!match || err) return res.status(400).send("wrong password");
        let token = jwt.sign({_id:user._id},'angular',{
            expiresIn: '7d'
        });
        res.status(200).json({token,user:{
            id:user._id,
            name:user.name,
            email:user.email,
            created_at:user.createdAt
        }});
    })
    }
    catch(err){
        console.log("err creating user",err);
        //res.status(400).send("err creating try agin");
    }
};