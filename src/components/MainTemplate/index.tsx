import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner'

import { AppNavbar } from '../AppNavbar';
import { AppFooter } from '../AppFooter';

interface IMainTemplateProps {
    loading: boolean;
}

export const MainTemplate: React.FC<IMainTemplateProps> = (props) => {

    return (
        <>
            <AppNavbar />
            <div className="wrapper">
                {props.loading
                    ?
                    <Container className="loading">
                        <Spinner
                            animation="border"
                            variant="secondary"
                        />
                    </Container>
                    :
                    props.children
                }
            </div>
            <AppFooter />
        </>
    );
}