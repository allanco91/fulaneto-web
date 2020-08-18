import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import capa1 from '../../assets/capa.png';
import capa2 from '../../assets/capa2.png';

import empresa from '../../assets/empresa.png';
import produtos from '../../assets/produtos.png';
import fula24 from '../../assets/24.png';

import { MainTemplate } from '../../components/MainTemplate';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <MainTemplate
            loading={false}
        >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={capa1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={capa2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <br />
            <Container>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={empresa} height="200px" />
                        <Card.Body>
                            <Card.Title>Empresa</Card.Title>
                            <Card.Text>
                                Fulaneto Bombas, Peças e Reformas Fundada em 2011 e localizada na cidade de Itapira [...]
                            </Card.Text>
                        </Card.Body>
                        <Link className="home-link" to="/empresa">SAIBA MAIS</Link>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={produtos} height="200px" />
                        <Card.Body>
                            <Card.Title>Produtos</Card.Title>
                            <Card.Text>
                                Conheça nossa linha de produtos com a mais alta qualidade do mercado.
                            </Card.Text>
                        </Card.Body>
                        <Link className="home-link" to="/produtos">VEJA MAIS</Link>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={fula24} height="200px" />
                        <Card.Body>
                            <Card.Title>Fulaneto 24 Horas</Card.Title>
                            <Card.Text>
                                Atendimento 24 horas da Fulaneto, clique abaixo para abrir o whatsapp.<br />
                                (19) 99870-2439 Whats<br />
                                (19) 97149-1988<br />
                                (19) 99863-6437
                            </Card.Text>
                        </Card.Body>
                        <a className="home-link" href="https://api.whatsapp.com/send?phone=5519998702439&text=Ol%C3%A1%2C%20requisi%C3%A7%C3%A3o%20de%20suporte%20Fulaneto%2024%20horas" target="_blank" rel="noopener noreferrer">ENTRE EM CONTATO</a>
                    </Card>
                </CardDeck>
            </Container>
        </MainTemplate>
    );
}