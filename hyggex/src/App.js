import './App.css';
import Head from "./common/header/Head"
import Page from "./common/pages/page"
import Footer from './common/footer/footer';
import Faq from './common/faq/faq';

function App() {
  return (
    <div className="App">
      <Head/>
      <Page/>
      <Footer/>
      <Faq/>
    </div>
  );
}

export default App;
