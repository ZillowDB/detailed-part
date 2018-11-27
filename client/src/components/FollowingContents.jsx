import React from 'react';
import ReactDOM from 'react-dom';
import FollowFact from './FollowFact.jsx';
import FollowDetails from './FollowDetails.jsx';

const FollowingContents = ({homeInfo}) => (
  <div>
  	<div className="following-contents">
        <FollowFact homeInfo = {homeInfo}/>
        <FollowDetails homeInfo = {homeInfo}/>
    </div>
  </div>
)

export default FollowingContents;