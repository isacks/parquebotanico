import React from 'react'
import styled from 'styled-components';
import LogoImg from '../assets/img/logo.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function HeaderComponent() {
    return (
        <Container className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid text-center d-flex">
                <div className="navbar-brand">
                    <Logo src={LogoImg} alt="" />
                    <div>Parque Botánico Panamá</div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Vivero
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Orquídeas</a></li>
                                <li><a className="dropdown-item" href="/">Bromelias</a></li>
                                <li><a className="dropdown-item" href="/">Helechos</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Conservación</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Educación Ambiental
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">Investigación</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Noticias</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Contáctenos</a>
                        </li>
                    </ul>
                    <Social>
                        <FacebookIcon />
                        <a href="https://www.instagram.com/parquebotanicopanama/"><InstagramIcon /></a>
                        <TwitterIcon />
                    </Social>
                </div>
            </div>
        </Container>
    )
}

export default HeaderComponent;

const Container = styled.nav``;

const Logo = styled.img`
    border-radius: 50%;
    width: 80px;
`;

const Social = styled.div`
    color: white;
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {text-decoration: none;
    color:white;}
`;
