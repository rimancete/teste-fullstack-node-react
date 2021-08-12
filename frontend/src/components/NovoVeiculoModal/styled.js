import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ModalShow = styled.div`
  display: flex;
  .modal-container.modal-hide {
    display: none;
  }
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: ${colors.primaryColor};
  width: 60%;
  height: 500px;
  min-width: 300px;
  padding: 30px;
  /* display: block; */
  box-shadow: rgba(0, 0, 0, 0.6) 0px 7px 29px 0px;

  .frm-inp {
    display: inline-block;
    height: 100%;
    width: 48%;
    margin-right: 2%;
  }
  .frm-radio {
    height: 90%;
    width: 48%;
    margin-right: 2%;
    display: inline;
    label {
      display: flex;
      position: relative;
      margin-left: 50px;
    }
  }
  .frm-desc {
    height: 90%;
    width: 98%;
    margin-right: 2%;
  }
  .frm-btns {
    display: inline;
    left: -15px;
    min-width: 350px;
    max-width: 48%;
    height: 50px;
    button {
      display: inline;
      right: -14px;
      width: 150px;
      float: right;
      margin-left: 15px;
      font-size: 1.3em;
      position: relative;
    }
  }
  .vendido {
    top: 23px;
    left: -70px;
  }
`;
export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  input,
  textarea {
    font-size: 20px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 3px 10px;
    &:focus {
      border-color: ${colors.primaryDarkColor};
    }
  }
  input,
  textarea::placeholder {
    font-size: 16px;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;
export const Title = styled.h1`
  text-align: center;
`;
