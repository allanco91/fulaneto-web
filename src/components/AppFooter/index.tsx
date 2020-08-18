import React from 'react';

import logo from '../../assets/logo-branco.png';

export const AppFooter: React.FC = () => {
    return (
        <footer>
            <div className="footer">
                <img src={logo} alt="Fulaneto" height="100px" />
                <div>
                    <h4>Fulaneto ® - Bombas, Peças e Reformas</h4>
                    <p>Todos os Direitos Reservados © 2020</p>
                </div>
            </div>
        </footer>
    )
}