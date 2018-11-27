import React from 'react';

const ExteriorFeatures = (props) => (
	<div>
		<div className="detail-title">
            Exterior Features
        </div>
        <div className="body">
            <div className="details module-group">
                <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                    <div className="module-text">
                        <div className="label">Lot</div>
                        <div className="body">
                            <span className="detail-module-title">Lot: </span>
                            {props.lot}
                        </div>
                        <div className="body">
                            <span className="detail-module-title">Lot Width: </span>
                            {props.lotwidth}
                        </div>
                    </div>
                </div>
                <div className="feature-module zlw-lg-1-2 zlw-sm-1-2">
                    <div className="module-text">
                        <div className="label">Other Exterior Features</div>
                        <div className="body">
                            <span className="detail-module-title">Parcel #: </span>
                            {props.otherexterior}
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
)

export default ExteriorFeatures;