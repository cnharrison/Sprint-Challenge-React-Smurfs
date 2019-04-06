import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Smurf = props => {
  return (
    <div className="Smurf">
    <Card>
      <CardBody>
      <CardTitle>{props.name}</CardTitle>
      <CardText>{props.height} tall</CardText>
      <CardText>{props.age} smurf years old</CardText>
      </CardBody>
      </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

