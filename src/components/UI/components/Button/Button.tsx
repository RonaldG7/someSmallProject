import React, {forwardRef} from 'react';
import {ReactComponent as Success} from "../../../../assests/icons/success.svg";
import './button.css';

export interface ButtonProps {
    id?: string;
    priority: 'primary' |
        'secondary'
        | 'secondary-light'
        | 'secondary-dark'
        | 'secondary-transparent'
        | 'delete';
    isDisabled?: boolean;
    active?: boolean;
    style?: any;
    size?: 'small' | 'normal';
    onClick?: (e?: any) => void;
    ref?: any;
    type?: 'button' | 'submit';
    loading?: boolean;
    loaded?: boolean;
    labelloading?: string;
    labelloaded?: string;
    label?: string;
    children?: any;
    onMouseOver?: (e?: any) => void;
    onMouseOut?: (e?: any) => void;
}

export const Button: React.FC<ButtonProps> = forwardRef(({
                                                             priority,
                                                             isDisabled,
                                                             size,
                                                             style,
                                                             type,
                                                             onClick,
                                                             loading,
                                                             loaded,
                                                             active,
                                                             id,
                                                             ...props
                                                         }: ButtonProps, ref) => {
    const getLabel = () => {
        if (loading) {
            return props.labelloading;
        }
        if (loaded) {
            return props.labelloaded;
        }
        return props.label;
    };
    const classNames = () => {
        const classes = ['storybook-button', `storybook-button--${priority}`];
        if (isDisabled) {
            classes.push('storybook-button--disabled');
        }
        if (loading) {
            classes.push('storybook-button--loading');
        }
        if (loaded) {
            classes.push('storybook-button--loaded');
        }
        if (size) {
            classes.push(`storybook-button--${size}`);
        }
        if (active) {
            classes.push('storybook-button--active');
        }
        return classes;
    };

    return (
        <button
            id={id}
            ref={ref}
            type={type}
            onClick={onClick}
            onPointerEnter={props.onMouseOver}
            onPointerLeave={props.onMouseOut}
            style={style}
            className={classNames().join(' ')}
            {...props}
            disabled={isDisabled}
        >
            {loaded &&
                <span
                    className="storybook-button-icon">
          <Success/>
        </span>
            }
            {props.children ? props.children : ''}
            <span>{getLabel()}</span>
        </button>
    );
});

Button.displayName = 'Button';