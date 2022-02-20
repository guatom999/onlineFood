import { Request, Response , NextFunction } from "express";
import {CreateVandorInput} from "../dto"
import { Vandor } from "../models"
import { GenerateSalt , GeneratePassword } from "../utility";


export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {
   
    const {name , address , pincode , foodType , email , passwords, ownerName , phone} = <CreateVandorInput>req.body;
    
    const existingVandor = await Vandor.findOne({ email: email })

    if(existingVandor !== null){
        return res.json({"message":"A vandor is exist with this email ID "})
    }

    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(passwords, salt);

    const createdVandor = Vandor.create({
        name:name,
        address:address,
        pincode:pincode,
        foodType:foodType,
        email:email,
        passwords:userPassword,
        ownerName:ownerName,
        phone:phone,
        salt:salt,
        rating:0,
        serviceAvailable:false,
        coverImage: [],
    })

    return res.json(createdVandor)
}

export const GetVandors = async (req: Request, res: Response, next: NextFunction) => {
    
    const vandors = await Vandor.find();

    if(vandors !== null){
        return res.json(vandors)
    }
    else{
        return res.json({"message":"vandors data not available"})
    }
}

export const GetVandorByID = async (req: Request, res: Response, next: NextFunction) => {
    
}