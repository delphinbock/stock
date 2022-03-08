// Router
import { BrowserRouter } from "react-router-dom"

// Components
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';

// SCSS
import './styles/scss/App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
