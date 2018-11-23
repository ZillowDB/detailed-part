import React from 'react';
import InteriorFeatures from './followDetails/InteriorFeatures.jsx';
import SpaceAndAmenities from './followDetails/SpaceAndAmenities.jsx';
import Construction from './followDetails/Construction.jsx';
import ExteriorFeatures from './followDetails/ExteriorFeatures.jsx';
import Parking from './followDetails/Parking.jsx';
import Other from './followDetails/Other.jsx';
import ActivityOnZillow from './followDetails/ActivityOnZillow.jsx';


const FollowDetails = ({data}) => (
		<div>
			<div className="follow-details">
	        <div className="details">
	        	<InteriorFeatures data = {data}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<SpaceAndAmenities data = {data}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Construction data = {data}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<ExteriorFeatures data = {data}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Parking data = {data}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Other data = {data}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<ActivityOnZillow data = {data}/>
	        </div>
	    </div>
    </div>
  )
export default FollowDetails;