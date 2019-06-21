import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurf, editSmurf } from '../../actions'
import Smurf from './Smurf';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.fetchSmurfs()
    }

    

    render() {
        if (this.props.fetching) {
            return(
                <h2>Fetching Smurfs...</h2>
            )
        }

        return (
            <ul>
                {
                    this.props.smurfs.map((smurf) => {
                        return <Smurf key={smurf.id} smurf={smurf} delete={this.props.deleteSmurf} edit={this.props.editSmurf} />
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
      smurfs: state.smurfs,
      fetching: state.fetchingSmurfs,
      error: state.error,
    };
  }
  // our mapStateToProps needs to have two properties inherited from state
  // the characters and the fetching boolean
  export default connect(
    mapStateToProps,
    {
      fetchSmurfs,
      deleteSmurf,
      editSmurf
    }
  )(SmurfList);