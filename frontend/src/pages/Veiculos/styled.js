import styled from 'styled-components';
import * as color from '../../config/colors';

export const Header = styled.div`
  .fullstack {
    background: ${color.headerBackground};
    height: 70px;
    .icon {
      width: 40px;
      height: 45px;
      position: relative;
      top: 10px;
      left: 50px;
    }
  }
  .search {
    background: ${color.primaryDarkColor};
    height: 70px;
    padding-left: 20px;
    input {
      position: relative;
      top: 10px;
      padding: 3px 5px;
      width: 50%;
      background: transparent;
      border: transparent;
      color: ${color.searchFont};
      font-size: 1.3em;
    }
    input::placeholder {
      color: ${color.searchFont};
    }
  }
`;

export const Form = styled.form`
  margin: 10px;
`;
export const NewCar = styled.div`
  height: 80px;
  margin: 20px 50px 40px 50px;
  position: relative;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1,
    a {
      color: ${color.primaryDarkColor};
      margin-right: 10px;
      position: relative;
      left: 0;
      top: 35px;
    }
  }

  div + div {
    position: relative;
    top: 60%;
    border-bottom: 1px solid #aaa;
  }
`;
export const VeiculosContainer = styled.div`
  margin: 20px 65px 0 65px;
  position: relative;
  h2 {
    font-size: 1.3em;
  }

  .car-list {
    width: 48%;
    margin-right: 2%;
    max-height: 550px;
    position: relative;
    display: inline-block;
    -ms-overflow-style: none; /* ocultar scroll no Internet Explorer, Edge */
    scrollbar-width: none; /* ocultar scroll no Firefox */
    overflow-y: scroll;
    .car-info {
      position: relative;
      background: #fff;
      margin: 10px 0;
      display: inline;
      height: 80px;
      h2 {
        color: ${color.primaryDarkColor};
        display: block;
        position: relative;
        top: -10px;
        margin-bottom: 2px;
      }
      .car-info-year {
        color: #798083;
      }
      a {
        display: inline;
        color: ${color.primaryDarkColor};
        background: transparent;
        position: relative;
        left: 480px;
        bottom: 55px;
        width: 30px;
        transition: all, 0.3s;
      }
      a:hover {
        color: ${color.linkHover};
      }
    }
    .car-info:hover {
      background: #f1f2f0;
    }
  }
  .car-list::-webkit-scrollbar {
    display: none; /* ocultar scroll no Chrome, Safari e Opera */
  }
  .car-details {
    background: #f1f2f0;
    width: 48%;
    margin-left: 2%;
    max-height: 550px;
    position: relative;
    display: inline-block;
    margin-top: 10px;
    position: relative;
    -ms-overflow-style: none; /* ocultar scroll no Internet Explorer, Edge */
    scrollbar-width: none; /* ocultar scroll no Firefox */
    overflow-y: scroll;

    .car-title {
      font-size: 1.5em;
      color: ${color.linkHover};
    }
    label {
      margin-top: 10px;
      font-size: 1.3em;
      font-weight: 300;
    }
    .car-details-year {
      color: #798083;
      position: relative;
      top: -25px;
    }
  }
  .car-details::-webkit-scrollbar {
    display: none; /* ocultar scroll no Chrome, Safari e Opera */
  }
`;

// modal

export const TitleModal = styled.h1`
  text-align: center;
`;

export const FormModal = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  input {
    font-size: 20px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 3px 10px;
    &:focus {
      border-color: ${color.primaryDarkColor};
    }
  }
  input::placeholder {
    font-size: 16px;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;
