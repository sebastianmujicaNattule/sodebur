/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState }  from 'react';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import 'rc-switch/assets/index.css';
import Switch from 'rc-switch';



const Configuracion = ({ match }) => {

    const [checkedPrimary, setCheckedPrimary] = useState(false);
    const [checkedSecondary, setCheckedSecondary] = useState(true);

  return (
    <>
    
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.form-components" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
 
      <Row className="mb-4">
        <Colxx  xs="12" md="6" className="mb-3">
            <Card>
                <CardBody>
                    <CardTitle>
                        <IntlMessages id="sodebur.ecosistemas" />
                    </CardTitle>
                        <Row className="mb-4">
                            <Colxx xxs="6">
                                <label>
                                    <IntlMessages id="sodebur.repoblacion-y-calidad-de-vida" />
                                </label>
                                <Switch
                                    className="custom-switch custom-switch-secondary"
                                    checked={checkedPrimary}
                                    onChange={(primary) => setCheckedPrimary(primary)}
                                />
                            </Colxx>

                            <Colxx xxs="6">
                                <label>
                                    <IntlMessages id="sodebur.desarrollo-empresarial-y-empleo" />
                                </label>
                                <Switch
                                    className="custom-switch custom-switch-secondary"
                                    checked={checkedSecondary}
                                    onChange={(secondary) => setCheckedSecondary(secondary)}
                                />
                            </Colxx>
                            <Colxx xxs="6">
                                <label>
                                    <IntlMessages id="sodebur.transicion-verde" />
                                </label>
                                <Switch
                                    className="custom-switch custom-switch-secondary"
                                    checked={checkedSecondary}
                                    onChange={(secondary) => setCheckedSecondary(secondary)}
                                />
                            </Colxx>
                            <Colxx xxs="6">
                                <label>
                                    <IntlMessages id="sodebur.desarrollo-turistico" />
                                </label>
                                <Switch
                                    className="custom-switch custom-switch-secondary"
                                    checked={checkedSecondary}
                                    onChange={(secondary) => setCheckedSecondary(secondary)}
                                />
                            </Colxx>
                            <Colxx xxs="6">
                                <label>
                                    <IntlMessages id="sodebur.territorio-inteligente" />
                                </label>
                                <Switch
                                    className="custom-switch custom-switch-secondary"
                                    checked={checkedSecondary}
                                    onChange={(secondary) => setCheckedSecondary(secondary)}
                                />
                            </Colxx>
                        </Row>
                </CardBody>
            </Card>
        </Colxx>
        <Colxx  xs="12" md="6" className="mb-3">
        <Card>
                <CardBody>
                    <CardTitle>
                        <IntlMessages id="sodebur.permisos" />
                    </CardTitle>
                        <Row className="mb-4">
                            <Colxx xxs="6">
                                <label>
                                    <IntlMessages id="sodebur.deseo-publicar" />
                                </label>
                                <Switch
                                    className="custom-switch custom-switch-secondary"
                                    checked={checkedPrimary}
                                    onChange={(primary) => setCheckedPrimary(primary)}
                                />
                            </Colxx>

                            <Colxx xxs="6">
                                <label>
                                    <IntlMessages id="sodebur.deseo-votar" />
                                </label>
                                <Switch
                                    className="custom-switch custom-switch-secondary"
                                    checked={checkedSecondary}
                                    onChange={(secondary) => setCheckedSecondary(secondary)}
                                />
                            </Colxx>
                            
                        </Row>
                </CardBody>
            </Card>
            </Colxx>
      </Row>
    </>
  );
};
export default Configuracion;
