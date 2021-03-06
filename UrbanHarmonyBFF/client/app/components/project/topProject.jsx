import React from 'react';
import { getProject } from '../../actions/index'
import { connect } from 'react-redux';

class TopProject extends React.Component {
    constructor(props) {
        super(props);
    }

    firstProject() {
        fetch('/project/working', {
            method: 'GET'
        }).then(res => res.json())
            .then(data => this.props.dispatch(getProject(data))
            );

    }
    componentDidMount() {
        this.firstProject();
    }

    render() {
        if (this.props.hide) {
            return null;
        }
        let rec = this.props.oneproject;
        return (
            <Prj rec={this.props.oneproject} />

        );
    }
}

class Prj extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="carouselContent">
                <h2><h2><img class="thumb-img" src={this.props.rec.image}></img>{this.props.rec.title}</h2>{this.props.rec.title}</h2>
                <p>{this.props.rec.event}</p>
                <a href="#">المزيد</a>
            </div>
        );
    }
}


export default connect()(TopProject);