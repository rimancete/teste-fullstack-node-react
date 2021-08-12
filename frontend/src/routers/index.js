import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './myRoute';

// importar páginas
import Veiculos from '../pages/Veiculos/index';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Veiculos} />
      {/* <MyRoute exact path="/veiculo" component={NovoVeiculo} />
      <MyRoute exact path="/hero/:id" component={Hero} />
  <MyRoute path="*" component={Page404} /> */}
    </Switch>
  );
}
