import PostagemModel from "./PostagemModel";

interface Usuario{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    localidade: string;
    postagem?: PostagemModel | null;
    
}

export default Usuario;