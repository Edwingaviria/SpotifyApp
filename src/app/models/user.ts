export interface User {
    uid?: string,
    email:string,
    displayName:string,
    photoURL?: string,
    emailVerified:boolean
}

export interface authUser{
    email:string,
    password:string
}