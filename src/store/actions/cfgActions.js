  
  import axios from 'axios';
  

  const busca_dados_api = () => {
    return dispatch => {
      axios.get('http://127.0.0.1:3333/player')
        .then(res => {
          dispatch(index(res.data))
        })
    };
  };

 
    const index = (values) => {
        return { type: 'INDEX', values }
    };

    const edit = values => {return { type: 'EDIT', values };};
 
    export default { index, edit, busca_dados_api };


