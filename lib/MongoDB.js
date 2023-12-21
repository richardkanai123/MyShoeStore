import mongoose from 'mongoose'
import { toast } from 'react-toastify';

const connectMBD = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)

    } catch (error) {
        console.log(error.message);
    }
}


export default connectMBD;