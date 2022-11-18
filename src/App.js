import './App.css';
import {BrowserRouter} from "react-router-dom";
import Root from "./Root"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`


function App() {
  return (
   <BrowserRouter>
    <GlobalStyle />
    <Root />
   </BrowserRouter>
  );
}

export default App;
