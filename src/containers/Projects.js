import React, { Component } from 'react';
import {connect} from 'react-redux';
import Sidebar from '../components/Sidebar';
import '../styles/App.css';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
            
        };
	}

	componentWillMount() {

    }

    render() {
		return (
            <div className="dashboard-container">
                <Sidebar history={this.props.history} selected="projects"/>
            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Projects);
