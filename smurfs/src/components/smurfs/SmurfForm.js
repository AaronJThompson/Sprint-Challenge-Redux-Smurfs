import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../../actions";

export function SmurfForm(props) {
  let nameRef = React.createRef();
  let ageRef = React.createRef();
  let heightRef = React.createRef();

  const addSmurfEvent = (e) => {
    e.preventDefault();
    props.addSmurf({
      name: nameRef.current.value,
      age: ageRef.current.value,
      height: heightRef.current.value,
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
        <button type="submit">Add Smurf</button>
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
