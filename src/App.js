
import './App.css';
import Header from "./components/header.js";
import SidebarMenu from "./components/sidebar_menu.js";
import Footer from "./components/footer.js";
import {BrowserRouter} from 'react-router-dom';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <div className='box-flexbox'>
          <div className='box-sidebar-menu'>
            <SidebarMenu />
          </div>
          <Content />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
