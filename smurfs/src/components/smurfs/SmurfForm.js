import React from "react";
import styled from 'styled-components';
import Colors from './colors';
import { connect } from "react-redux";
import { addSmurf, updateSmurf } from "../../actions";

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
  background: none;
  background-color: ${Colors.primary};
  display: block;
  margin: 0 auto;
  border: none;
`;
export class SmurfForm extends React.Component {

  nameRef = React.createRef();
  ageRef = React.createRef();
  heightRef = React.createRef();

  componentDidUpdate() {
    if (this.props.currentSmurf) {
      this.nameRef.current.value = this.props.currentSmurf.name;
      this.ageRef.current.value = parseInt(this.props.currentSmurf.age, 10);
      this.heightRef.current.value = parseInt(this.props.currentSmurf.height, 10);
    }
  }

  addSmurfEvent = (e) => {
    e.preventDefault();
    const smurf = {
      name: this.nameRef.current.value,
      age: parseInt(this.ageRef.current.value, 10),
      height: `${this.heightRef.current.value}cm`,
    };
    this.props.currentSmurf ? this.props.updateSmurf(this.props.currentSmurf.id, smurf) : this.props.addSmurf(smurf);
    this.nameRef.current.value = "";
    this.ageRef.current.value = "";
    this.heightRef.current.value = "";
  }
  render(){
    return (
      <div>
        <form onSubmit={this.addSmurfEvent}>
          <input
            ref={this.nameRef}
            placeholder="name"
            name="name"
            type="text"
            required
          />
          <input
            ref={this.ageRef}
            placeholder="age"
            name="age"
            type="number"
            min="1"
            required
          />
          <input
            ref={this.heightRef}
            placeholder="height"
            name="height"
            type="number"
            min="1"
            required
          />
          <StyledButton type="submit">{this.props.currentSmurf ? "Update Smurf" : "Add Smurf"}</StyledButton>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSmurf: state.currentSmurf,
    error: state.error
  };
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    addSmurf,
    updateSmurf,
  }
)(SmurfForm);
