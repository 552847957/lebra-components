import { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {

};

const defaultProps = {
	labelStyle: {},
	style: {},
	inputStyle: {},
}

class Input extends Component {

	render() {
		let {
			style,
			className,
			children,
			labelStyle,
			inputStyle,
			type = 'text',
			required,
			defaultValue,
			...props
		} = this.props;

		let classes = classNames({
			'u-input': true
		});

		let inputClass = classNames({
			'u-input-item': true
		}, className);

		let labelClass = classNames({
			'u-input-label': true
		});


		return (
			<div
				className={classes}
				style={ style ? style : null}>
				{ children
					? (<label className={ labelClass } style={ labelStyle }>{children}</label>)
					: null
				}
				<input
					type={type}
					style={ inputStyle }
					className={ inputClass }
					required={required ? required : null}
					{...props} />
			</div>
		)
	}
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
