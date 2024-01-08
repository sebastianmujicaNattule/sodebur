/* eslint-disable no-param-reassign */

import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';
import Validation from 'containers/wizard/Validation';

const Publicar = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12" className="mb-5">
          <h5 className="mb-4">Validation</h5>
          <Validation />
        </Colxx>
      </Row>
    </>
  );
};
export default Publicar;
