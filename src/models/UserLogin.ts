interface UserLogin{
    id:number;
    nome:string;
    usuario:string;
    senha:string;
    foto:string | null;
    localidade?:string | null;
    token?:string | null;

}
export default UserLogin;