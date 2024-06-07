import { UserWithId } from "src/models/user";

export type sessionUserType = Partial<UserWithId>;

export type sessionType ={
    user: sessionUserType;
    expires: Date;
}