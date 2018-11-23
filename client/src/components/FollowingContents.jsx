import React from 'react';
import ReactDOM from 'react-dom';
import FollowFact from './FollowFact.jsx';
import FollowDetails from './FollowDetails.jsx';

const FollowingContents = ({data}) => (
  <div>
  	<div className="following-contents">
        <FollowFact data = {data}/>
        <FollowDetails data = {data}/>
    </div>
  </div>
)

export default FollowingContents;