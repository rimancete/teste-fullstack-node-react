import React, { useState } from 'react';
import NovoVeiculoModal from '../../components/NovoVeiculoModal';
import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoMdPricetag } from 'react-icons/io';
import history from '../../services/history';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Header, Form, NewCar, VeiculosContainer } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Veiculos() {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [carDetails, setCarDetails] = useState([]);
  const [carName, setCarName] = useState('');
  const [details, setDetails] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  async function getData(string) {
    setIsLoading(true);
    if (string.length === 0) {
      const response = await axios.get('veiculos');
      setIsLoading(false);
      return response.data;
      // eslint-disable-next-line no-else-return
    } else {
      const response = await axios.get(`veiculos/find/${string}`);
      setIsLoading(false);
      return response.data;
    }
  }
  React.useEffect(() => {
    async function getAllData() {
      setDetails(false);
      const response = await getData('');
      setCars(response);
    }
    getAllData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setDetails(false);
    try {
      setIsLoading(true);
      const response = await getData(carName);
      setCars(response);
      setIsLoading(false);
    } catch (exception) {
      history.push(`/`);
      setIsLoading(false);
    }
  };
  const handleDetails = async (e, car) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await getData(car);
    if (response.error || response.statusCode) {
      toast.error('Falha ao obter detalhes do veículo');
      setIsLoading(false);
      return;
    }
    setCarDetails(response);
    setDetails(true);
    setIsLoading(false);
  };
  const handleModal = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await setIsModalVisible(true);
    await document
      .querySelector('.modal-container')
      .classList.remove('modal-hide');
    setIsLoading(false);
  };

  return (
    <Container>
      <div className="content">
        <Loading isLoading={isLoading} />
        <Header>
          <div className="row">
            <div className="col-md-6 fullstack">
              <img className="icon" alt="" src="/images/water-drop-icon.png" />
              <h1 className="header-title">FULLSTACK</h1>
            </div>
            <div className="col-md-6 search">
              <Form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="BUSCA por um veículo"
                  value={carName}
                  onChange={(e) => {
                    setCarName(e.target.value);
                  }}
                />
              </Form>
            </div>
          </div>
        </Header>
        <NewCar>
          <div>
            <h1 className="header-title">VEÍCULO</h1>
            <Link onClick={(e) => handleModal(e)}>
              <BsFillPlusCircleFill size={30} />
            </Link>
          </div>
          <div />
        </NewCar>
        <VeiculosContainer>
          <div className="row">
            <div className="col-md-6">
              <h2>Lista de veículos</h2>
            </div>
            <div className="col-md-6">
              <h2>Detalhes</h2>
            </div>

            <div className="col-md-6 car-list">
              {cars.map((car) => (
                <div key={String(car._id)}>
                  <div className="row">
                    <div className="col-md-12 car-info">
                      <div>
                        <h2>{car.veiculo}</h2>
                        <h2 className="car-info-year">{car.ano}</h2>
                        <Link onClick={(e) => handleDetails(e, car.veiculo)}>
                          <IoMdPricetag size={30} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {details && (
              <div className="col-md-6 car-details">
                {carDetails.map((car) => (
                  <div key={String(car._id)}>
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="car-title">{car.veiculo}</h2>
                        <label>Ano</label>
                        <h2 className="car-details-year">{car.ano}</h2>
                        <h2>{car.descricao}</h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </VeiculosContainer>
      </div>
      {isModalVisible && <NovoVeiculoModal />}
    </Container>
  );
}
