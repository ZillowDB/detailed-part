import React from 'react';
import ReactDOM from 'react-dom';

const Tooltip = (props) => (
	<div className ="tool-tip">
		<span className="right-arrow"></span>
		<p>The home at {this.props.address} is worth ${Math.floor(this.props.price * 1.32).toLocaleString()}</p>
		<p>A <strong>Zestimate<sup>®</sup></strong> home valuation is Zillow's estimated market value. It is not an appraisal. Use it as a starting point to determine a home's value. <a href="#"> Learn more</a></p>
		<p>If your home facts are wrong this will cause an incorrect Zestimate,<a href="#"> click here to update them</a>.</p>
	</div>
)

export default Tooltip;