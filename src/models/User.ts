import mongoose, { Schema, Document, Types} from "mongoose";

interface IUser extends Document {
    email: string;
    username: string;
    password: string;
    isAdmin: boolean;
    /*createdAt: Date;
    updatedAt: Date;*/
}

const userSchema: Schema<IUser> = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);