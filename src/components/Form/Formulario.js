import React, { useEffect } from 'react'
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import { useFormik } from "formik";
import axios from 'axios'
import { useHistory } from "react-router-dom"

const Formulario = () => {

    const history = useHistory()

    //adicionando campos do formulario a constante formik
    const formik = useFormik({
        initialValues: {
            nickname: '',
            mapa: '',
            funcao: '',
            resolucao: '',
            hz: '',
            sensibilidade: '',
            dpi: ''
        },
    });

    //metodo para ficar ouvindo os campos do formulario (formik)
    useEffect(() => {
        console.log(formik.values)
    }, [formik.values])

    //const para enviar dados do form via POST
    const submit = (e) => {
        e.preventDefault() //pagina nao atualiza ao clicar no botao
        //adicionando dados do formik à API
        axios.post('http://127.0.0.1:3333/player', {
            nickname: formik.values.nickname,
            mapa: formik.values.mapa,
            funcao: formik.values.funcao,
            resolucao: formik.values.resolucao,
            hz: formik.values.hz,
            sensibilidade: formik.values.sensibilidade,
            dpi: formik.values.dpi


        }).then(() => {
            history.push("/dados") //redireciona para pagina dados ao clicar no botao
        })
    }

    return (
        <Container className="mt-5">
            <Form onSubmit={submit}>
                <Row>
                    <h3>Player info</h3>
                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                name="nickname"
                                id="nickname"
                                placeholder="Digite seu nickname"
                                onChange={formik.handleChange}
                                value={formik.values.nickname}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input type="select" name="mapa" id="mapa" onChange={formik.handleChange}
                                value={formik.values.mapa}>
                                <option>Mapa preferido</option>
                                <option value="Anubis">Anubis</option>
                                <option value="Ancient">Ancient</option>
                                <option value="Cobblestone">Cobblestone</option>
                                <option value="Cache">Cache</option>
                                <option value="Dust2">Dust2</option>
                                <option value="Inferno">Inferno</option>
                                <option value="Train">Train</option>
                                <option value="Nuke">Nuke</option>
                                <option value="Mirage">Mirage</option>
                                <option value="Overpass">Overpass</option>
                                <option value="Vertigo">Vertigo</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input type="select" name="funcao" id="funcao" onChange={formik.handleChange}
                                value={formik.values.funcao}>
                                <option>Função preferida</option>
                                <option value="Entry Fragger">Entry Fragger</option>
                                <option value="Suporte">Suporte</option>
                                <option value="Trader">Trader</option>
                                <option value="Awper">Awper</option>
                                <option value="IGL">IGL - In game leader</option>
                                <option value="Solo Bomb">Solo Bomb</option>
                                <option value="Lurker">Lurker</option>
                                <option value="Riffler">Riffler</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row><br/>

                <Row>
                    <h3>Video config</h3>
                    <Col md={6}>
                        <FormGroup>
                            <Input type="select" name="resolucao" id="resolucao" onChange={formik.handleChange}
                                value={formik.values.resolucao}>
                                <option>Selecione a sua resolução</option>
                                <option value="1024x768">1024x768</option>
                                <option value="1280x720">1024x7683</option>
                                <option value="1280x960">1280x960</option>
                                <option value="1280x1024">1280x1024</option>
                                <option value="1680x1050">1680x1050</option>
                                <option value="1920x1080">1920x1080</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                        <Input type="select" name="hz" id="hz" onChange={formik.handleChange}
                                value={formik.values.hz}>
                                <option>Selecione o hz do seu monitor</option>
                                <option value="60hz">60hz</option>
                                <option value="75hz">75hz</option>
                                <option value="120hz">120hz</option>
                                <option value="144hz">144hz</option>
                                <option value="165hz">165hz</option>
                                <option value="240hz">240hz</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row><br />
                <Row>
                    <h3>Mouse Config</h3>
                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                name="sensibilidade"
                                id="sensibilidade"
                                placeholder="Digite a sua sensibilidade no jogo (1.50) exemplo"
                                onChange={formik.handleChange}
                                value={formik.values.sensibilidade}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                name="dpi"
                                id="dpi"
                                placeholder="Digite a sua DPI do mouse (400dpi) exemplo"
                                onChange={formik.handleChange}
                                value={formik.values.dpi}
                            />
                        </FormGroup>
                    </Col>
                </Row><br />
                <Button type="submit">Salvar</Button>
            </Form>
        </Container>
    );
}

export default Formulario;