import React from 'react';

const InteriorFeatures = ({interiorInfo}) => (
	<div>
		<div className="detail-title">
        Interior features
    </div>
    <div className="body">
        <div className="details module-group">
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Bedrooms</div>
                    <div className="body">
                        <span className="detail-module-title">Beds: </span>
                        {interiorInfo.bedroom}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Flooring</div>
                    <div className="body">
                        <span className="detail-module-title">Floor size: </span>
                        {interiorInfo.flooring}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Bathrooms</div>
                    <div className="body">
                        <span className="detail-module-title">Baths: </span>
                        {interiorInfo.bathroom}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Other Interior Features</div>
                    <div className="body">
                        <span className="detail-module-title">Addition size: </span>
                        {interiorInfo.otherinterior}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Heating and Cooling</div>
                    <div className="body">
                        <span className="detail-module-title">Heating: </span>
                        {interiorInfo.heatingandcooling}
                    </div>
                </div>
            </div>
            <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                <div className="module-text">
                    <div className="label">Basement</div>
                    <div className="body">
                        {interiorInfo.basement}
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
)

export default InteriorFeatures;