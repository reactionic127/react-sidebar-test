import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Breadcrumb } from 'react-bootstrap'
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
                <div className="project-container">
                <Breadcrumb className="custom-breadcrumb">
                    <Col md={6}>
                        <Breadcrumb.Item href="/projects">
                            <i className="fa fa-folder breadcrumb-text" aria-hidden="true"></i>
                            <span className="breadcrumb-text">
                                Projects
                            </span>
                        </Breadcrumb.Item>
                    </Col>
                    <Col md={6} className="text-right">
                        <span className="margin-l-5">
                            1 projects
                        </span>
                        <i className="fa fa-plus margin-l-20" aria-hidden="true"></i>
                        <span className="margin-l-5">
                            Add Project
                        </span>
                    </Col>
                </Breadcrumb>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Projects);
