import mongoose from "mongoose";

class DBConnection {
    mongoUrl: string = '';

    constructor(mongoURL: string) {
        this.mongoUrl = mongoURL;
    }

    initMongoose () {
        try {
            mongoose.connect(this.mongoUrl).then(() => console.log('MongoDB connected')).catch((err: Error) => console.log(err));    
        } catch (error) {
            console.error(error);
        }
        
    }

}

export { DBConnection };