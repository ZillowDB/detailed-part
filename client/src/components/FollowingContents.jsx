import React from 'react';
import ReactDOM from 'react-dom';
import FollowFact from './FollowFact.jsx';
import FollowDetails from './FollowDetails.jsx';

const FollowingContents = ({data}) => (
  <div>
  	<div className="following-contents">
        <FollowFact factsAndFeatures = {data}/>
        <FollowDetails details = {data}/>
    </div>
  </div>
)

export default FollowingContents;