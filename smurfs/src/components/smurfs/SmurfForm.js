import React from "react";
import styled from 'styled-components';
import Colors from './colors';
import { connect } from "react-redux";
import { addSmurf } from "../../actions";

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
    props.addSmurf({
      name: nameRef.current.value,
      age: ageRef.current.value,
      height: `${heightRef.current.value}cm`,
    })
  }

  return (
    <div>
      <form onSubmit={addSmurfEvent}>
        <input
          ref={nameRef}
          placeholder="name"
          name="name"
          type="text"
          required
        />
        <input
          ref={ageRef}
          placeholder="age"
          name="age"
          type="number"
          min="1"
          required
        />
        <input
          ref={heightRef}
          placeholder="height"
          name="height"
          type="number"
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
    error: state.error
  };
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    addSmurf
  }
)(SmurfForm);
