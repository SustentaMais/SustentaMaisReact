import TemaModel from "./TemaModel";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: TemaModel| null
}

export default Postagem;