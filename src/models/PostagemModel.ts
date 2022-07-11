import TemaModel from './TemaModel'
import UsuarioModel from './UsuarioModel';

interface PostagemModel{
    id: number;
    titulo: string;
    conteudo: string;
    anexos: string;
    data: string;
    tema?: TemaModel | null
    usuario?: UsuarioModel | null
}

export default PostagemModel;