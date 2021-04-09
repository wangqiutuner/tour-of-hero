import React from 'react';
import { connect } from 'react-redux';
import { clearMessages } from '../../store/actions/index';
import './style.css';

class Messages extends React.Component {
	state = {};
	render() {
		const { messages } = this.props;
		return (
			<>
				{!!messages.length && (
					<div className="messages-ui">
						<h2>Messages</h2>
						<button className="clear" onClick={this.props.clearMessages}>
							clear
						</button>
						{messages.map((message, ind) => {
							return <div key={ind}>{message}</div>;
						})}
					</div>
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { clearMessages })(Messages);
