import React, {useEffect, useState} from 'react';
import { Table, Button, Container } from 'reactstrap';
import axios from 'axios'
import { useHistory  } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import cfgActions from '../../store/actions/cfgActions'

const Tabela = (props) => {

    const history = useHistory();
    const estado_global = useSelector( state => state.cfgReducer )
    const dispatch = useDispatch()

    

    function btn_novo() {
        history.push("/");
    }

    function btn_editar(values) {
        // aqui a gente dispara uma action do redux para add os dados de edição no estado global
        dispatch(cfgActions.edit(values))
        history.push("/");
        
    }

    useEffect(() => {
        dispatch(cfgActions.busca_dados_api())
    }, [])

    useEffect(() => {
        console.log(estado_global)
    }, [estado_global])


    return (
        <Container className="mt-5">
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <h1>Players cadastrados</h1>
                <Button onClick={btn_novo}>Novo</Button>
            </div>
            <Table striped className="mt-5">
                <thead>
                    <tr>
                        <th>Nickname</th>
                        <th>Mapa Preferido</th>
                        <th>Função</th>
                        <th>Resolução</th>
                        <th>Hz</th>
                        <th>Sense</th>
                        <th>DPI</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                        {estado_global.dados_api.map( (cfg, idx) => (
                            <tr key={idx}>
                                 <td>{cfg.nickname}</td>    
                                 <td>{cfg.mapa}</td>    
                                 <td>{cfg.funcao}</td>    
                                 <td>{cfg.resolucao}</td>    
                                 <td>{cfg.hz}</td>    
                                 <td>{cfg.sensibilidade}</td>    
                                 <td>{cfg.dpi}</td>    
                                 <td><Button onClick={() => btn_editar(cfg)}>editar</Button></td>    
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
        
    );
}

export default Tabela;