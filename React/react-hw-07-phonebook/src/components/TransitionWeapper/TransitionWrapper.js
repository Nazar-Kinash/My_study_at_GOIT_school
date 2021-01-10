import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const TransitionWrapper = ({ action, time, clases, children }) => {
	return (
		<>
			<CSSTransition
				in={action}
				timeout={time}
				classNames={clases}
				mountOnEnter
				unmountOnExit
			>
				{children}
			</CSSTransition>
		</>
	);
};

TransitionWrapper.propTypes = {
	action: PropTypes.bool.isRequired,
	time: PropTypes.number.isRequired,
	clases: PropTypes.string.isRequired,
};

export default TransitionWrapper;
