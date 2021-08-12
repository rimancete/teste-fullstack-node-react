import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
    background: ${colors.defaultBackground};
    color: ${colors.primaryDarkColor};
  }
  h1{
    text-align: center;
  }
  html, body, #root {
  height: 100%;
  }
  .header-title {
    display: inline;
    font-size: 1.8em;
    font-weight: 500;
    position: relative;
    top: 15px;
    left: 80px;
    color: ${colors.headerTitle};
  }
  button {
    width: 150px;
    height: 50px;
    cursor: pointer;
    background: ${colors.headerBackground};
    border:none;
    color: #eee;
    padding: 8px 20px;
    border-radius: 5px;
    font-weight: 700;
    transition: all, 0.3s;
  }
button:hover{
  background: ${colors.primaryDarkColor};
  color: #fff
}

  .toast-container .Toastify__toast--success{
  background: ${colors.successColor};
  }
  .toast-container .Toastify__toast--error{
    background: ${colors.errorColor};
  }
  .toast-container .Toastify__toast--info{
    background: ${colors.infoColor};
  }


`;

export const Container = styled.section`
  max-width: 90%;
  margin: 30px auto;
  padding: 0px 15px 50px 15px;
  border-radius: 10px;
  background: ${colors.primaryColor};
  @media (min-width: 1024px) {
    width: 70%;
  }
`;
