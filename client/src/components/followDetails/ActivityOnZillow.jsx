import React from 'react';
import moment from 'moment';

const ActivityOnZillow = ({data}) => (
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
                        {moment(data.daysonzillow).fromNow()}
                    </div>
                    <div className="body">
                        <span className="detail-module-title">Views in the past 30 days: </span>
                        {data.pastthirtydayview}
                    </div>
                    <div className="body">
                        {data.savedlog} shoppers saved this home
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
)

export default ActivityOnZillow;