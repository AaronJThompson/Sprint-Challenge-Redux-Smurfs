import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from '../../reducers'
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
            <div>
                {
                    this.props.smurfs.map((smurf) => {
                        return <Smurf smurf={smurf} />
                    })
                }
            </div>
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
      fetchSmurfs
    }
  )(SmurfList);