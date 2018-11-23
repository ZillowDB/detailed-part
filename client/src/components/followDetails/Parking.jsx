import React from 'react';

const Parking = ({data}) => (
	<div>
		<div className="detail-title">
            parking
        </div>
        <div className="body">
            <div className="details module-group">
                <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                    <div className="module-text">
                        <div className="body">
                            <span className="detail-module-title">Parking: </span>
                            {data.parkinglong}
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
)

export default Parking;