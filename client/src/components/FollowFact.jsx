import React from 'react';
import moment from 'moment';

const FollowFact = ({homeInfo}) => (
	<div>
		<div className="follow-fact">
        <div className="features">
            <div className="title sub-title">Facts and Features</div>
            <div className="body">
                <div className="facts module-group">
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="far fa-building"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Type</div>
                            <div className="body">{homeInfo.type}</div>
                        </div>
                    </div>
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="far fa-sticky-note"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Year Built</div>
                            <div className="body">{moment(homeInfo.yearbuilt).fromNow()}</div>
                        </div>
                    </div>
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="fas fa-thermometer-three-quarters"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Heating</div>
                            <div className="body">{homeInfo.heating}</div>
                        </div>
                    </div>
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="far fa-snowflake"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Cooling</div>
                            <div className="body">{homeInfo.cooling}</div>
                        </div>
                    </div>
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="fas fa-parking"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Parking</div>
                            <div className="body">{homeInfo.parking}</div>
                        </div>
                    </div>
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="fas fa-expand"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Lot</div>
                            <div className="body">{homeInfo.lot}</div>
                        </div>
                    </div>
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="far fa-clock"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Days on Zillow</div>
                            <div className="body">{moment(homeInfo.daysonzillow).fromNow()}</div>
                        </div>
                    </div>
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="fas fa-dollar-sign"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Price/sqft</div>
                            <div className="body">{homeInfo.pricepersqft}</div>
                        </div>
                    </div>
                    <div className="feature-module zlw-lg-1-3 zlw-sm-1-2">
                        <div className="module-img">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="module-text">
                            <div className="label">Saves</div>
                            <div className="body">{homeInfo.saves}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
)

export default FollowFact;