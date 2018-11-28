import React from 'react';
import moment from 'moment';

const Other = (props) => (
	<div>
		<div className="detail-title">
        Other
    </div>
    <div className="body">
        <div className="details module-group">
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="body">
                        <span className="detail-module-title">Last sold: </span>
                        {moment(props.date).fromNow()}
                    </div>
                    <div className="body">
                        <span className="detail-module-title">Price/sqft: </span>
                        {props.price.toLocaleString()}
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
)

export default Other;