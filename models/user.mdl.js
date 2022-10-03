import mongoose from 'mongoose';
const {Schema} = mongoose;
import bcrypt from "bcrypt";

const userSchema = new Schema({
	name:{
		type:String
	},
	password:{
		type:String
	},
    email:{
        type:String,
        unique: [true, 'That email address is taken.']
    }
},
);

//hashing password;

userSchema.pre('save',function(next){
	let user = this;
	if(user.isModified('password')){
		return bcrypt.hash(user.password,12,function(err,hash){
			if(err){
				console.log('BCRYPT HAS ERR');
				return next(err);
			}
			user.password = hash;
			return next();
		});
	}
	else{
		return next();
	}
});

userSchema.methods.comparePassword = function(password,next){
	bcrypt.compare(password,this.password,function(err,match){
		//console.log(err,match);
		if(err){
			//console.log('here');
			next(err,false);
		}
		if(match)
			return next(null,match);
		else
			return next(null,match);


	});

};

export default mongoose.model("User",userSchema)