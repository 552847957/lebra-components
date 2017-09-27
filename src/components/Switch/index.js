import {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
	className: PropTypes.string,
    defaultChecked: PropTypes.bool
};

const defaultProps = {

};

class Switch extends Component {
    constructor(props, context){
       super(props, context);

    }

	render() {
        let {
            className,
            defaultChecked,
            ...props
        } = this.props;

        let classes = classNames({
            'lebra-switch' : true
        },className);

		return (
            <label className={classes}>
                <input type="checkbox"
                       onChange={this.props.onChange}
                       defaultChecked={defaultChecked}
                />
                <div className="lebra-track">
                    <div className="lebra-handle"></div>
                </div>
            </label>
		);
	}
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
