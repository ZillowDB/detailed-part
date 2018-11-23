import React from 'react';

const ExteriorFeatures = ({data}) => (
	<div>
		<div className="detail-title">
            exterior features
        </div>
        <div className="body">
            <div className="details module-group">
                <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                    <div className="module-text">
                        <div className="label">Lot</div>
                        <div className="body">
                            <span className="detail-module-title">lot: </span>
                            {data.lot}
                        </div>
                        <div className="body">
                            <span className="detail-module-title">Lot Width: </span>
                            {data.lotwidth}
                        </div>
                    </div>
                </div>
                <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                    <div className="module-text">
                        <div className="label">Other Exterior Features</div>
                        <div className="body">
                            <span className="detail-module-title">Parcel #: </span>
                            {data.otherexterior}
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
)

export default ExteriorFeatures;