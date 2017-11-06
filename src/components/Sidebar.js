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
        this.goProject  = this.goProject.bind(this);
        this.goLogout  = this.goLogout.bind(this);
        this.goOverView  = this.goOverView.bind(this);
	}

	componentWillMount() {

    }

    goProject() {
        this.props.history.push('/projects');
    }

    goLogout() {
        this.props.history.push('/logout');
    }

    goOverView() {

    }

    render() {
        let {selected, projectDetail} = this.props;
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
                {projectDetail !== undefined &&
                    <div className="project-side-view">
                        <span className="project-side-title">
                            {projectDetail.name}
                        </span>
                        <div className="global-group">
                            <div className="global-project" onClick={this.goOverView}>
                                <i className="fa fa-tachometer custom-icon" aria-hidden="true"></i>
                                <span className={selected === 'projects' ? "global-selected-text" : "global-text"}>
                                    Overview
                                </span>
                            </div>
                        </div>
                    </div>
                }
                <div className="category-view">
                    <span className="global-text">
                        GLOBAL
                    </span>
                    <div className="global-group">
                        <div className="global-project" onClick={this.goProject}>
                            <i className={ selected === 'projects' ? "fa fa-folder custom-selected-icon" : "fa fa-folder custom-icon"} aria-hidden="true"></i>
                            <span className={selected === 'projects' ? "global-selected-text" : "global-text"}>
                                Projects
                            </span>
                        </div>
                        <div className="global-project" onClick={this.goLogout}>
                            <i className={selected === 'logout' ? "fa fa-sign-out custom-selected-icon" : "fa fa-sign-out custom-icon"} aria-hidden="true"></i>
                            <span className={selected === 'logout' ? "global-selected-text" : "global-text"}>
                                Logout
                            </span>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Sidebar);
