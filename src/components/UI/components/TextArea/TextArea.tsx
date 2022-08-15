import React, {forwardRef} from 'react';
import './textarea.css';

const Textarea = (props: any, ref: any) => {
    return (
        <div className="storybook-textarea-container" style={{width: props.width}}>
      <textarea
          className={props.className}
          ref={ref}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
      />
            <label className={props.value && 'filled'} >
                {props.label}
            </label>
        </div>
    );
};

const ForwardTextarea = forwardRef(Textarea);

export default ForwardTextarea;