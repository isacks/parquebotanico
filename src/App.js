import HeaderComponent from "./components/HeaderComponent";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ContenidoComponent from "./components/ContenidoComponent";
import styled from 'styled-components';
import Bosquebg from './assets/img/bosquebg.jpg';
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <Container>
        <HeaderComponent />
        <div className="container-sm">
          <ContenidoComponent />
        </div>
        <FooterComponent />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
    background-image: url(${Bosquebg});
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #464646;
`;
