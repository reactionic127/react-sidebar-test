import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Breadcrumb, Button, Modal, FormControl } from 'react-bootstrap'
import Sidebar from '../components/Sidebar';
import { makeData } from "../components/Utils";
import '../styles/App.css';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
            projects: makeData(),
            addModalVisible: false,
            projectName: ''
        };
        this.goProject = this.goProject.bind(this);
        this.openModal = this.openModal.bind(this);
        this.addProject = this.addProject.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.onProjectNameChange = this.onProjectNameChange.bind(this);
	}

	componentWillMount() {

    }

    goProject(project) {
        this.props.history.push({
            pathname: `/projects/${project.id}`,
            state: project
		});
    }

    addProject() {
        let {projectName} = this.state;
        if (projectName.length > 0) {
            this.setState({
                addModalVisible: false
            })            
        }else {
            this.setState({
                addModalVisible: false
            })
        }
    }

    openModal() {
        this.setState({ addModalVisible: true });
    }

    modalClose() {
        this.setState({ addModalVisible: false });
    }

    onProjectNameChange(e) {
        this.setState({
            projectName: e.target.value
        })
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
                            <Button className="visit-button" onClick={this.goProject.bind(this, project)}>
                                Visit
                            </Button>
                        </div>
                    </div>
				);
			})
		);
    }

    render() {
        let {projects, addModalVisible, projectName} = this.state;
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
                                {projects.length} projects
                            </span>
                            <i className="fa fa-plus margin-l-20" aria-hidden="true"></i>
                            <span className="margin-l-5 cursor-pointer" onClick={this.openModal}>
                                Add Project
                            </span>
                        </Col>
                    </Breadcrumb>
                    <div className="project-content">
                        <span className="myproject-title">
                            MY PROJECT(S)
                        </span>
                        <div>
                            {this.renderProject()}
                        </div>
                    </div>
                </div>
                <Modal show={addModalVisible} onHide={this.modalClose}>
                    <Modal.Header>
                        <Modal.Title>
                            Project info
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>
                            Project Name
                        </span>
                        <FormControl
                            type="text"
                            autoFocus
                            placeholder="project name"
                            value={projectName}
                            onChange={this.onProjectNameChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.modalClose}>Close</Button>
                        <Button bsStyle="primary">Add</Button>
                    </Modal.Footer>

                </Modal>
            </div>
		);
	}
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(Projects);
