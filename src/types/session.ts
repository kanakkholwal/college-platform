import { IUser } from "src/models/user";

export type sessionUserType = Omit<Omit<IUser, "password"> & { _id: string }, "roles"> & { roles: string[],id?:string };
export type sessionType ={
    user: sessionUserType;
    expires: Date;
}