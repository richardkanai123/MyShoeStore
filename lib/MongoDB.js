import mongoose from 'mongoose'
import { toast } from 'react-toastify';

const connectMBD = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)

    } catch (error) {
        console.log('Error');
        toast.error(error.message)
    }
}


export default connectMBD;