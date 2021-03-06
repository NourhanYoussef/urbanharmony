import React from 'react';
import { getInternalNews } from '../actions/index'
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';

class IntNews extends React.Component {
    constructor(props) {
        super(props);
    }

    getinternal() {
        fetch('/internalnews/2', {
            method: 'GET'
        }).then(res => res.json()

        )
            .then(data => this.props.dispatch(getInternalNews(data))
            );
    }

    componentDidMount() {
        this.getinternal();
    }

    render() {
        if (this.props.hide) {
            return null;
        }
        let news = this.props.internalnews;
        return news.map(a => {
            return <Internal record={a} key={a.id} />;
        });
    }
}

class Internal extends React.Component {
    constructor(props) {
        super(props);
    }

    translateLabel(label) {
        if(label == 'Social') {
            return 'سوشيال ميديا'
        }
        else if (label == 'Paper') {
            return 'صحافة ورقية'
        }
        else {
            return 'صحافة الكترونية'
        }
    }

    render() {
        return (
            <div className="tile newsCard col-xs-12 no-padding">
                <div className="col-xs-12 newscard-container no-padding">
                    <div className="col-xs-12 col-sm-3 news-rightSide nopadding-mobile">
                        <div className="image-container-4x3">
                            <img src={this.props.record.image} />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9 news-leftSide nopadding-mobile">
                        <span className="cardCat">{this.translateLabel(this.props.record.label)}</span>
                        <h3>{this.props.record.title}</h3>
                        <span className="author">   كتبة  {this.props.record.author} </span>
                        <h5>تاريخ النشر : {this.props.record.DatePublished}</h5>
                        <p>{this.props.record.article}</p>
                        <a href={"/detail?news=" + this.props.record.id} >اقرأ المزيد</a>
                    </div>
                </div>

            </div>

        );
    }
}


export default connect()(IntNews);