import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/App.css';

class Dashboard extends Component {
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

export default connect(mapStateToProps)(Dashboard);
