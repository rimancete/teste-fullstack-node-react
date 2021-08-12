/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isInt } from 'validator';
import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../Loading';
import { Form, Title, Modal, ModalContent, ModalShow } from './styled';
import Switch from 'react-switch';
import * as colors from '../../config/colors';

export default function NovoVeiculoModal() {
  const [veiculo, setVeiculo] = useState('');
  const [ano, setAno] = useState('');
  const [descricao, setDescricao] = useState('');
  const [vendido, setVendido] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);


  React.useEffect(() => {
    setIsModalVisible(true);
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // validar campos informados
    let formErrors =false;
    if (veiculo.length < 2) {
      toast.error('Veículo deve ter 1 ou mais caracteres');
      formErrors = true;
    }
    if (!isInt(String(ano))) {
      toast.error('Ano do veículo deve ser um número inteiro');
      formErrors = true;
    }
    if (descricao.length < 2) {
      toast.error('Descrição do veículo deve ter 2 ou mais caracteres');
      formErrors = true;
    }

    setIsLoading(false);
    if (formErrors) return;

    // enviar dados
    try {
      setIsLoading(true);
      const response = await axios.post(`/veiculos`,{
        veiculo,
        ano,
        descricao,
        vendido
      });
      if (response.data.error){
         toast.error('Veículo já existe. Favor cadastrar com outro nome');
      } else{
        setVeiculo('');
        setAno('');
        setDescricao('');
        setVendido(false);
        toast.success('Veículo cadastrado com sucesso');
        await document.querySelector('.modal-container').classList.add('modal-hide');
        setIsModalVisible(true);

      }
    } catch (exception){
      console.log(exception);
      toast.error('Falha ao cadastrar veículo. Favor tentar novamente');
    }


    setIsLoading(false);
  };

  const handleClose = async (e) => {
    e.preventDefault();
    setVeiculo('');
    setAno('');
    setDescricao('');
    setVendido(false);
    await document.querySelector('.modal-container').classList.add('modal-hide');
  };
  const handleCheck = async () => {
    setVendido(!vendido);
  };

  return (
    <ModalShow>
      <Modal id="dv-modal" className="modal-container">
      {isModalVisible && (
        <ModalContent>
          <Loading isLoading={isLoading} />
          <Title>Novo Veículo</Title>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 frm-inp">
                <label htmlFor="veiculo">
                  Veículo:
                  <input
                    type="text"
                    placeholder="Nome do veículo"
                    value={veiculo}
                    onChange={(e) => setVeiculo(e.target.value)}
                  />
                </label>
                <label htmlFor="ano">
                  Ano:
                  <input
                    type="number"
                    placeholder="Ano do veículo"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                  />
                </label>
              </div>
              <div className="col-md-6 frm-radio">
                <label htmlFor="vendido">
                    <Switch
                      className="vendido"
                      onChange={handleCheck}
                      checked={vendido}
                      handleDiameter={22}
                      offColor="#aaa"
                      onColor={`${colors.linkHover}`}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={20}
                      width={50}
                    />
                    Vendido
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 frm-desc">
                <label htmlFor="descricao">
                  Descrição:
                  <textarea
                    placeholder="Descrição do veículo"
                    rows="4"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </label>
                </div>
            </div>
            <div className="row">
              <div className="col-md-6" />
              <div className="col-md-6 frm-btns">
                <button
                  onClick={(e) => handleClose(e)}
                  className="fechar"
                  type="submit"
                >
                  FECHAR
                </button>
                <button className="add" type="submit">
                  ADD
                </button>
              </div>
            </div>
          </Form>
        </ModalContent>
      )}
      </Modal>
    </ModalShow>
  );
}
