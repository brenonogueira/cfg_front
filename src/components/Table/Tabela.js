import React, {useEffect, useState} from 'react';
import { Table, Container } from 'reactstrap';
import axios from 'axios'

const Tabela = (props) => {

    const [dadosApi, setDadosApi] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:3333/player').then((res) => {
            setDadosApi(res.data)
        })
    }, [])

    return (
        <Container className="mt-5">
            <h1>Players cadastrados</h1>
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
                    </tr>
                </thead>
                <tbody>
                        {dadosApi.map( (item) => (
                            <tr>
                                 <td>{item.nickname}</td>    
                                 <td>{item.mapa}</td>    
                                 <td>{item.funcao}</td>    
                                 <td>{item.resolucao}</td>    
                                 <td>{item.hz}</td>    
                                 <td>{item.sensibilidade}</td>    
                                 <td>{item.dpi}</td>    
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Tabela;