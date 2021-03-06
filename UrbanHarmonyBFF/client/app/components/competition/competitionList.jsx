import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getAllCompetitions } from '../../actions/index'

class CompetitionList extends React.Component {

    constructor(props) {
        super(props);
        this.getAllCompetitions();

    }

    getAllCompetitions() {
        fetch('/competition', {
            method: 'GET'
        }).then(res => res.json())
            .then(data => this.props.dispatch(getAllCompetitions(data))
            );
    }
    render() {
        return (
            <div className="col-xs-12 winners">
                <h2>المسابقات</h2>
                {/* <div className="col-xs-12 comp-filters competitionDetailsForm">
                    <div className="col-xs-12 col-sm-6 timepicker-cont nopadding-mobile"> </div>
                    <div className="col-xs-12 col-sm-6 compwin-cont nopadding-mobile">
                        <div className="col-xs-12 col-sm-6 form-group timepicker-cont nopadding-mobile">
                            <label className="fieldLabel col-sm-3 col-xs-12" htmlFor="email">تاريخ عرضها</label>
                            <div className="col-xs-12 col-sm-9 calendar input-group date" id="datetimepicker2"> <span className="input-group-addon"> <span className="glyphicon glyphicon-calendar"></span> </span>
                                <input className="form-control" type="text" />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 form-group no-padding">
                            <label className="fieldLabel col-sm-3 col-xs-12" htmlFor="email">إسم المسابقة</label>
                            <div className="col-xs-12 col-sm-9 formField">
                                <select className="formDropdown" name="#">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div> */}
                {typeof this.props.allCompetitions === 'undefined' ?  <div/> : this.props.allCompetitions.map(comp =>  <CompetitionEntry record={comp} key={comp.id}/>)}
            </div>
        );
    }
}


class CompetitionEntry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-xs-12 tite conferenceCard no-padding">
                <div className="col-xs-12 newscard-container nopadding-mobile">
                    <div className="col-xs-12 col-sm-3 news-rightSide nopadding-mobile">
                        <div className="image-container-4x3"> <img src={this.props.record.image} /> </div>
                    </div>
                    <div className="col-xs-12 col-sm-9 news-leftSide">
                        <div className="col-xs-12 winner-name no-padding">
                            <div><span>المسابقة</span> {this.props.record.title}</div>
                            <div><span>التاريخ</span>{this.props.record.deadline}</div>
                        </div>
                        <p> {this.props.record.description} </p>
                        <a className="read-more" href={"/competitionInfo?competition="+this.props.record.id}>المزيد</a>
                        {/* <div className="col-xs-12 no-padding"> <a href="#" className="share-btn"></a> <a href="#" className="pdf-btn"></a> </div> */}
                    </div>
                </div>
            </div>
        );
    }
}


export default connect()(CompetitionList);
