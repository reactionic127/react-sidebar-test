import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Breadcrumb, Button } from 'react-bootstrap'
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

    renderProject() {
        return (
            <div className="one-project-view">
                <div className="project-header">
                    <span className="header-title">
                        TestExample 2
                    </span>
                </div>
                <div className="project-button">
                    <Button className="visit-button">
                        Visit
                    </Button>
                </div>
            </div>
        )
    }

    render() {
		return (
            <div className="dashboard-container">
                <Sidebar history={this.props.history} selected="projects"/>
                <div className="project-container">
                    <Breadcrumb className="custom-breadcrumb">
                        <Col md={6} className="no-padding">
                            <Breadcrumb.Item href="/projects">
                                <i className="fa fa-folder breadcrumb-text" aria-hidden="true"></i>
                                <span className="breadcrumb-text margin-l-5">
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
                    <div className="project-content">
                        <span className="myproject-title">
                            MY PROJECT(S)
                        </span>
                        {this.renderProject()}
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Projects);