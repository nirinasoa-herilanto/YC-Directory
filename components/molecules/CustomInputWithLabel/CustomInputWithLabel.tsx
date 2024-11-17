import React from 'react';

import { Label, Input } from '@project/components/atoms';

export type CustomInputWithLabelProps = {
  className?: string;
  labelTxt: string;
  htmlFor: string;
  error?: string[];
} & JSX.IntrinsicElements['input'];

const CustomInputWithLabel: React.FC<CustomInputWithLabelProps> = ({
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

      <Input className="startup-form_input" {...rest} />

      {error &&
        error.map((e) => (
          <span className="startup-form_error" key={e}>
            {e}
          </span>
        ))}
    </div>
  );
};

export default CustomInputWithLabel;
