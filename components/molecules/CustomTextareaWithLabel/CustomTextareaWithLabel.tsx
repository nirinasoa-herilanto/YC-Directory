import React from 'react';

import { Label, Textarea } from '@project/components/atoms';

export type CustomTextareaWithLabelProps = {
  className?: string;
  labelTxt: string;
  htmlFor: string;
  error?: string[];
} & JSX.IntrinsicElements['textarea'];

const CustomTextareaWithLabel: React.FC<CustomTextareaWithLabelProps> = ({
  className,
  labelTxt,
  htmlFor,
  error,
  ...rest
}) => {
  return (
    <div className={`grid w-full gap-1.5 ${className || ''}`}>
      <Label className="startup-form_label" htmlFor={htmlFor}>
        {labelTxt}
      </Label>

      <Textarea className="startup-form_textarea" {...rest} />

      {error &&
        error.map((e) => (
          <span className="startup-form_error" key={e}>
            {e}
          </span>
        ))}
    </div>
  );
};

export default CustomTextareaWithLabel;
