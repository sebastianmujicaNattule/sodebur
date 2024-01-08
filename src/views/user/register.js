import React, { useEffect } from 'react';
import {
  Row,
  Card,
  CardTitle,
  FormGroup,
  Label,
  Button,
  FormText,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from 'redux/actions';
import { NotificationManager } from 'components/common/react-notifications';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
// import { adminRoot } from 'constants/defaultValues';
import { Formik, Form, Field } from 'formik';

const validateName = (value) => {
  let error;
  if (!value) {
    error = 'Por favor ingresa la informacion';
  }else if (value.length < 3) {
    error = 'debe tener mas de 3 caracteres';
  }
  return error;
}
const validateAlias = (value) => {
  let error;
  if (!value) {
    error = 'Por favor ingresa la informacion';
  }else if (value.length < 3) {
    error = 'debe tener mas de 3 caracteres';
  }
  return error;
}
const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Ingresa tu correo';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'correo invalido';
  }
  return error;
};
const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Ingresa tu clave';
  } else if (value.length < 8) {
    error = 'debe contener mas de 8 caracteres';
  }
  return error;
};
const validatePasswordConfirm = (value) => {
  let error;
  if (!value) {
    error = 'indroduce nuevamente la clave';
  } else if (value.password !== value.passwordConfirm ) {
    error = 'las claves deben coincidir';
  }
  return error;
};


const Register = ({ loading, error }) => {

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Register Error', 3000, null, null, '');
    }
  }, [error]);

  const onUserRegister = (values) => {
   /* if (email !== '' && password !== '') {
      history.push(adminRoot);
    } */
    if (!loading){
      console.log(values);
      // registerUserAction()
    }
    
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
            <Formik onSubmit={onUserRegister}>
            {({ handleChange, handleBlur, errors, touched }) => (
              <Form className="av-tooltip tooltip-label-bottom">
                <FormGroup className="form-group has-float-label  mb-4">
                  <Label>
                    <IntlMessages id="user.fullname" />
                  </Label>
                  <Field 
                    className="form-control"
                    name="name" 
                    validate={ validateName }
                  />
                  { errors.name && touched.name && (
                    <div className="invalid-feedback d-block">
                      {errors.name}
                    </div>
                  )}
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
                  <Field
                    className="form-control" 
                    name="alias" 
                    validate ={ validateAlias } />
                    { errors.alias && touched.alias && (
                    <div className="invalid-feedback d-block">
                      {errors.alias}
                    </div>
                  )}
                  <FormText color="muted">
                      <IntlMessages id="user.alias-under-text" />
                      <br/>
                      <IntlMessages id="user.alias-under-text-2" />
                  </FormText>
                </FormGroup>

                <div className="form-group has-float-label">
                    <select
                      name="tipoUsuario"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                     >
                      <option value="">Selecciona una opcion</option>
                      <option value="1">Ciudadano</option>
                      <option value="2">Colaborador</option>
                    </select>
                    {errors.tipoDeUsuario && touched.tipoDeUsuario ? (
                      <div className="invalid-feedback d-block">
                        {errors.select}
                      </div>
                    ) : null}
                    <span>
                      <IntlMessages id="forms.state" />
                    </span>
                </div>

                <FormGroup className="form-group has-float-label  mb-4">
                  <Label>
                    <IntlMessages id="user.email" />
                  </Label>
                  <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                </FormGroup>

                <FormGroup className="form-group has-float-label  mb-4">
                  <Label>
                    <IntlMessages id="user.password" />
                  </Label>
                  <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                </FormGroup>
                
                <FormGroup className="form-group has-float-label  mb-4">
                  <Label>
                    <IntlMessages id="user.password-confirm" />
                  </Label>
                  <Field
                      className="form-control"
                      type="password"
                      name="passwordConfirm"
                      validate={validatePasswordConfirm}
                    />
                    {errors.passwordConfirm && touched.passwordConfirm && (
                      <div className="invalid-feedback d-block">
                        {errors.passwordConfirm}
                      </div>
                    )}
                </FormGroup>
                
                <div className="d-flex justify-content-end align-items-center">
                  <Button
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                    type="submit"
                  >
                    <IntlMessages id="user.register-button" />
                  </Button>
                </div>
              </Form>)}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
/*
const mapStateToProps = ({ registeredUser }) => {
  const { loading, error } = registeredUser;
  return { loading, error }
};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
*/