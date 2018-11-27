import React from 'react';
import InteriorFeatures from './followDetails/InteriorFeatures.jsx';
import SpaceAndAmenities from './followDetails/SpaceAndAmenities.jsx';
import Construction from './followDetails/Construction.jsx';
import ExteriorFeatures from './followDetails/ExteriorFeatures.jsx';
import Parking from './followDetails/Parking.jsx';
import Other from './followDetails/Other.jsx';
import ActivityOnZillow from './followDetails/ActivityOnZillow.jsx';


const FollowDetails = ({homeInfo}) => (
		<div>
			<div className="follow-details">
	        <div className="details">
	        	<InteriorFeatures interiorInfo = {homeInfo}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<SpaceAndAmenities  size = {homeInfo.size} amenities = {homeInfo.amenities} spaces = {homeInfo.spaces} />
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Construction constructionInfo = {homeInfo}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<ExteriorFeatures lot = {homeInfo.exteriorlot} lotwidth = {homeInfo.lotwidth} otherext = {homeInfo.otherexterior} />
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Parking parkingInfo = {homeInfo.parkinglong}/>
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<Other date = {homeInfo.solddate} price = {homeInfo.soldprice} />
	        	</div>
	    </div>
	    <div className="follow-details">
	        <div className="details">
	        	<ActivityOnZillow days = {homeInfo.daysonzillow} pastthirty = {homeInfo.pastthirtydayview} savedlog = {homeInfo.savedlog} />
	        </div>
	    </div>
    </div>
  )
export default FollowDetails;