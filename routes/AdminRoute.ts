import express, { Request , Response , NextFunction } from 'express';
import {CreateVandor, GetVandorByID, GetVandors} from '../controller/AdminController'

const router = express.Router();

router.post('/vandor', CreateVandor)

router.get('/vandors',GetVandors)

router.get('/vandors/:id', GetVandorByID)

router.get('/', (req: Request, res: Response, next: NextFunction) => {

    res.json({message:"Hello from Admin"})

})


export { router as AdminRoute}