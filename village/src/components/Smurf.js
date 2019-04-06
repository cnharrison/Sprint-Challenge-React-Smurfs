import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import axios from "axios";

class Smurf extends Component {
  constructor(props) {
    super(props);
  }

  deleteSmurf = id => {
    // add code to create the smurf using the api
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.props.updateSmurfs(response.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Smurf">
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>{this.props.height} tall</CardText>
            <CardText>{this.props.age} smurf years old</CardText>
          </CardBody>
          <Button onClick={() => this.deleteSmurf(this.props.id)}>Delete</Button>
        </Card>
      </div>
    );
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
