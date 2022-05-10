import { ThemeProvider } from 'styled-components';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import GlobalStyles from './style/Global.styled';

const theme = {
  colors:{
    header:'blue',
    main:'green',
    footer:'yellow'
  }
}

function App() {
  

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <GlobalStyles/>
        <Header/>
        <Content/>
        <Footer/>

      </ThemeProvider>
    </div>
  );
}

export default App;
