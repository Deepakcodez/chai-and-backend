import mongoose from 'mongoose';

const uriComp: string = 'mongodb://127.0.0.1:27017/harman-spare-parts'; // for localhost mongo


const uri:string|undefined =  uriComp
async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(uri!);
    console.log('>>>>>>>>>>> db connected');
  } catch (error:any) {
    console.error('Error connecting to the database:', error.message);
  }
}

export { connectDB };
