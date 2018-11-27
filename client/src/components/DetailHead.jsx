import React from 'react';
import ReactDOM from 'react-dom';
import PopupCal from './PopupCal.jsx';
import Tooltip from './Tooltip.jsx';

class DetailHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltip: false
        };
        this.showTool = this.showTool.bind(this);
    }

    showTool(){
        this.setState({
            tooltip: !this.state.tooltip
        })
    }

    render(){
        return(
            <div>
                <div className="detail head">
                    <div className="title zlw-lg-2-3 zlw-sm-2-2">
                        <div className="main-title title">{this.props.homeInfo.address}</div>
                        <div className="sub-title title">{this.props.homeInfo.subtitle}</div>
                    </div>
                    <div className="floater zlw-lg-1-3 zlw-sm-2-2">
                        <div className="price-area">
                            <div className="status">
                                <i className="fas fa-circle"></i>
                                New Construction
                            </div>
                            <div className="price">${this.props.homeInfo.price.toLocaleString()}</div>
                            <div className="zestimate">
                                {
                                    this.state.tooltip ? <div className="tooltip-overlay" onClick={this.showTool}></div> : ''
                                }
                                <span className="tooltip">
                                <span className="tooltip-btn" onClick={this.showTool}></span>
                                    Zestimate
                                    {
                                        this.state.tooltip ? <Tooltip address = {this.props.homeInfo.address} price = {this.props.homeInfo.price} /> : ''
                                    }
                                </span><sup>®</sup>
                                : ${Math.floor(this.props.homeInfo.price * 1.32).toLocaleString()}
                            </div>
                        </div>
                        <div className="calculator">
                            <div className="cal-head">Est. Mortgage</div>
                            <PopupCal 
                                price={this.props.homeInfo.price} 
                                handleClick = {this.props.handleClick}
                                isCal = {this.props.isCal}/>
                            <div className="cal-btn">
                                <a href="#"><i className="fas fa-dollar-sign"></i> Get pre-qualified</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailHead;