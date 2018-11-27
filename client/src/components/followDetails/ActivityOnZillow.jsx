import React from 'react';
import moment from 'moment';

const ActivityOnZillow = props => (
    <div>
    <div className="detail-title">
        Activity On Zillow
    </div>
    <div className="body">
        <div className="details module-group">
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="body">
                        <span className="detail-module-title">Days on Zillow: </span>
                        {moment(props.days).fromNow()}
                    </div>
                    <div className="body">
                        <span className="detail-module-title">Views in the past 30 days: </span>
                        {props.pastthirty}
                    </div>
                    <div className="body">
                        {props.savedlog} shoppers saved this home
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
);

export default ActivityOnZillow;
