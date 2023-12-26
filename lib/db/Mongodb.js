import mongoose from 'mongoose'

const ConnectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (error) {
        console.log(error);
        return error
    }
}


export default ConnectMongoDB;