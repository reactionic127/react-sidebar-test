import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Image} from 'react-bootstrap';
import '../styles/App.css';
import defaultUser from '../assets/default.png'

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
                <div className="app-logo">
                    <span className="logo-text">
                        audienti
                    </span>
                </div>
                <div className="user-info">
                    <Image src={defaultUser} className="userIcon" />
                    <span className="user-email">
                        wflanagan@audienti.com
                    </span>
                    <div className="icon-group">
                        <i className="fa fa-cog fa-lg custom-icon" aria-hidden="true"></i>
                        <i className="fa fa-building fa-lg custom-icon margin-l-20" aria-hidden="true"></i>
                        <i className="fa fa-commenting fa-lg custom-icon margin-l-20" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Sidebar);
