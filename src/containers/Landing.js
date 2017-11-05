import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {Grid} from 'react-bootstrap';
import '../styles/App.css';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
            
        };
	}

	componentWillMount() {

    }

    render() {
		return (
            <div>

            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Landing);
