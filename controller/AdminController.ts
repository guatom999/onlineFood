import { Request, Response , NextFunction } from "express";
import {CreateVandorInput} from "../dto"
import { Vandor } from "../models"

export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {
   
    const {name , address , pincode , foodType , email , passwords, ownerName , phone} = <CreateVandorInput>req.body;
    
    const existingVandor = await Vandor.findOne({ email: email })

    if(existingVandor !== null){
        return res.json({"message":"A vandor is exist with this email ID "})
    }

    const createdVandor = Vandor.create({
        name:name,
        address:address,
        pincode:pincode,
        foodType:foodType,
        email:email,
        passwords:passwords,
        ownerName:ownerName,
        phone:phone,
        salt:'Bossza',
        rating:0,
        serviceAvailable:false,
        coverImage: [],
    })

    return res.json(createdVandor)
}

export const GetVandors = async (req: Request, res: Response, next: NextFunction) => {
    
}

export const GetVandorByID = async (req: Request, res: Response, next: NextFunction) => {
    
}