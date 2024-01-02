import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from 'redux/actions';
import Select from 'react-select';
import CustomSelectInput from 'components/common/CustomSelectInput';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import { adminRoot } from 'constants/defaultValues';

const selectData = [
  { label: 'Ciudadano', value: 'cake', key: 0 },
  { label: 'Gestor', value: 'cupcake', key: 1 },
];

const Register = ({ history }) => {
  const [email] = useState('demo@gogo.com');
  const [password] = useState('gogo123');
  const [name] = useState('Sarah Kortney');
  const [alias] = useState('Sarah');
  const [selectedOptionLO, setSelectedOptionLO] = useState('');
  const onUserRegister = () => {
    if (email !== '' && password !== '') {
      history.push(adminRoot);
    }
    // call registerUserAction()
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">INICIAR SESION</p>
            <p className="white mb-0">
              Utilice sus credenciales para iniciar sesión <br />
              si no es miembro , por favor{' '}
              <NavLink to="/user/login" className="white">
                entrar
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <Form>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.fullname" />
                </Label>
                <Input type="name" defaultValue={name} />
                <FormText color="muted">
                  <IntlMessages id="user.fullname-under-text" />
                    <br/>
                    <IntlMessages id="user.fullname-under-text-2" />
                </FormText>
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.alias" />
                </Label>
                <Input type="name" defaultValue={alias} />
                <FormText color="muted">
                    <IntlMessages id="user.alias-under-text" />
                    <br/>
                    <IntlMessages id="user.alias-under-text-2" />
                </FormText>
              </FormGroup>

              <div className="form-group has-float-label">
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="form-field-name"
                    value={selectedOptionLO}
                    onChange={(val) => setSelectedOptionLO(val)}
                    options={selectData}
                    placeholder=""
                  />
                  <span>
                    <IntlMessages id="forms.state" />
                  </span>
              </div>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.email" />
                </Label>
                <Input type="email" defaultValue={email} />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.password" defaultValue={password} />
                </Label>
                <Input type="password" />
              </FormGroup>
              
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.password-confirm" defaultValue={password} />
                </Label>
                <Input type="password" />
              </FormGroup>
              
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  className="btn-shadow"
                  size="lg"
                  onClick={() => onUserRegister()}
                >
                  <IntlMessages id="user.register-button" />
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
