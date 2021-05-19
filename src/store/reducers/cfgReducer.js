// Estado global (variáveis globais)
 export const initialState = {
   dados_api: [],
   edit: null,
 }
 
  //  cfgReducer.js
 const cfgReducer = (state = initialState, action) => {
   switch (action.type) {

    case 'INDEX': return { ...state, dados_api: action.values }; // sempre que precisar alterar o state, tem que fazer a desestruturação para add a action dentro do state
    case 'EDIT': return { ...state, edit: action.values };
    default: return state
    }
}
 
 

 
 
 export default cfgReducer;
 