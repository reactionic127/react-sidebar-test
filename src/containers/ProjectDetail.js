import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Breadcrumb, Button } from 'react-bootstrap'
import Sidebar from '../components/Sidebar';
import { makeData } from "../components/Utils";
import '../styles/App.css';

class ProjectDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
            projects: makeData(),
        };
        this.goProject = this.goProject.bind(this);
	}

	componentWillMount() {

    }

    goProject(id) {
        console.log(id)
    }

    renderProject() {
        let {projects} = this.state;
        return(
			projects.map((project, index) => {
				return (
					<div className="one-project-view" key={index}>
                        <div className="project-header">
                            <span className="header-title">
                                {project.name}
                            </span>
                        </div>
                        <div className="project-button">
                            <Button className="visit-button" onClick={this.goProject.bind(this, project.id)}>
                                Visit
                            </Button>
                        </div>
                    </div>
				);
			})
		);
    }

    render() {
        let currentProjectId = this.props.match.params.id
		return (
            <div className="dashboard-container">
                <Sidebar history={this.props.history} selected="projects"/>
                <div className="project-container">
                    <Breadcrumb className="custom-breadcrumb">
                        <Col md={6} className="no-padding">
                            <Breadcrumb.Item href="/projects" className="breadcrumb-item">
                                <div>
                                <i className="fa fa-folder breadcrumb-text" aria-hidden="true"></i>
                                <span className="breadcrumb-text margin-l-5">
                                    Projects
                                </span>
                                </div>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href={`/projects/${currentProjectId}`} className="breadcrumb-item">
                                <div>
                                <i className="fa fa-home breadcrumb-text" aria-hidden="true"></i>
                                <span className="breadcrumb-text margin-l-5">
                                    {currentProjectId}
                                </span>
                                </div>
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
                    </div>
                </div>
            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(ProjectDetail);
