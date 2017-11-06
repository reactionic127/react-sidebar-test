import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/App.css';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
            
        };
	}

	componentWillMount() {

    }

    render() {
		return (
            <div className="sidebar-container">
                
            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Sidebar);
