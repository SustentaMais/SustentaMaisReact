import React from 'react';
import './AddPost.css'
import ModalPostagem from '../../../pages/home/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

export default function AddPost() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var addPostComponent;

  if(token !== ""){
    addPostComponent = <div>
    <ModalPostagem />
  </div>
  }

  return (
    <>{addPostComponent}</>
  );
}