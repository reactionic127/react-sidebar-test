import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Breadcrumb } from 'react-bootstrap'
import Sidebar from '../components/Sidebar';
import '../styles/App.css';

class ProjectDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {

        };
	}

	componentWillMount() {

    }

    render() {
        let projectDetail = this.props.location.state
		return (
            <div className="dashboard-container">
                <Sidebar history={this.props.history} projectDetail={projectDetail}/>
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
                            <Breadcrumb.Item href={`/projects/${projectDetail.id}`} className="breadcrumb-item">
                                <div>
                                <i className="fa fa-home breadcrumb-text" aria-hidden="true"></i>
                                <span className="breadcrumb-text margin-l-5">
                                    {projectDetail.id}
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
