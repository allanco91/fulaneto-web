import React from 'react';

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

//@ts-ignore
import ImgsViewer from 'react-images-viewer'

import empresa from '../../assets/empresa.png';

import { MainTemplate } from '../../components/MainTemplate';
import { Link } from 'react-router-dom';

export const Empresa: React.FC = () => {

    const [open, setOpen] = React.useState<boolean>(false);
    const [navigation, setNavigation] = React.useState<number>(0);

    const images = [
        { src: empresa },
        { src: empresa },
        { src: empresa },
    ];

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleNext = () => {
        if (navigation < images.length) {
            setNavigation(navigation + 1);
        }
    }

    const handlePrev = () => {
        if (navigation > 0) {
            setNavigation(navigation - 1);
        }
    }

    return (
        <MainTemplate
            loading={false}
        >
            <Container>
                <h1 className="title">EMPRESA</h1>
                <h2>Fulaneto Bombas, Peças e Reformas</h2>
                <p>
                    Fundada em 2011 e localizada na cidade de Itapira, interior de
                    São Paulo, a Fulaneto é uma empresa especializada em Manutenção
                    e Reformas de Bombas.
              </p>
                <p>
                    Sua base de profissionais técnicos e mecânicos possuem mais de
                    15 anos de experiência no setor, garantindo uma prestação de
                    serviços ágil e de alta qualidade. Possui ainda, instrumentos
                    tecnológicos de última geração que asseguram mais confiança e
                    eficácia na manutenção do seu equipamento.
              </p>
                <br />
                <p>
                    A Fulaneto trabalha com as principais marcas de bombas
                    centrifugas do mercado e suas diversas aplicações como: em
                    caldeiras, no processo fabril, na captação e abastecimento,
                    irrigação, sanitária e química.
              </p>
                <br />
                <p>
                    <strong>MISSÃO</strong> - Superar as exigências do mercado com
                produtos de alta qualidade. Oferecer um atendimento ágil e com
                excelência para clientes de todos os portes, superando suas
                expectativas com confiança e inovação.
              </p>
                <p>
                    <strong>VISÃO</strong> - Ser referência nacional no segmento de
                bombas centrífugas com eficácia e soluções inovadoras sempre.
                Ser reconhecido por clientes e parceiros como o melhor e mais
                completo no segmento.
              </p>
                <p>
                    <strong>VALORES</strong> - Comprometimento, Ética, Integridade,
                Melhoria contínua, Inovação, Sustentabilidade.
              </p>

                <div className="content-images">
                    <Image className="margin-bottom" src={empresa} height={180} rounded onClick={handleOpen} />
                    <Image className="margin-bottom" src={empresa} height={180} rounded />
                    <Image className="margin-bottom" src={empresa} height={180} rounded />
                    <Image className="margin-bottom" src={empresa} height={180} rounded />
                    <Image className="margin-bottom" src={empresa} height={180} rounded />
                </div>

                <ImgsViewer
                    imgs={images}
                    currImg={navigation}
                    isOpen={open}
                    onClose={handleClose}
                    closeBtnTitle="Fechar"
                    onClickNext={handleNext}
                    rightArrowTitle="Avançar"
                    onClickPrev={handlePrev}
                    leftArrowTitle="Voltar"
                />

            </Container>
        </MainTemplate>
    );
}