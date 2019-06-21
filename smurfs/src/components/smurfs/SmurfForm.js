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
export function SmurfForm(props) {
  let nameRef = React.createRef();
  let ageRef = React.createRef();
  let heightRef = React.createRef();

  const addSmurfEvent = (e) => {
    e.preventDefault();
    const smurf = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      height: `${heightRef.current.value}cm`,
    };
    props.currentSmurf ? props.updateSmurf(props.currentSmurf.id, smurf) : props.addSmurf(smurf);
  }

  return (
    <div>
      <form onSubmit={addSmurfEvent}>
        <input
          ref={nameRef}
          placeholder="name"
          name="name"
          type="text"
          value={props.currentSmurf ? props.currentSmurf.name : ""}
          required
        />
        <input
          ref={ageRef}
          placeholder="age"
          name="age"
          type="number"
          value={props.currentSmurf ? props.currentSmurf.age : null}
          min="1"
          required
        />
        <input
          ref={heightRef}
          placeholder="height"
          name="height"
          type="number"
          value={props.currentSmurf ? parseInt(props.currentSmurf.height) : null}
          min="1"
          required
        />
        <StyledButton type="submit">Add Smurf</StyledButton>
      </form>
    </div>
  );
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
