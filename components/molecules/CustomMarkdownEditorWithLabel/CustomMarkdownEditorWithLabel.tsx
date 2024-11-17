'use client';

import React from 'react';

import MDEditor, { MDEditorProps } from '@uiw/react-md-editor';

import { Label } from '@project/components/atoms';

export type CustomMarkdownEditorWithLabelProps = {
  className?: string;
  labelTxt: string;
  htmlFor: string;
  error?: string[];
} & MDEditorProps;

const CustomMarkdownEditorWithLabel: React.FC<
  CustomMarkdownEditorWithLabelProps
> = ({ className, labelTxt, htmlFor, error, ...rest }) => {
  return (
    <div className={`grid w-full gap-1.5 ${className || ''}`}>
      <Label className="startup-form_label" htmlFor={htmlFor}>
        {labelTxt}
      </Label>

      <MDEditor
        className="startup-form_editor"
        id="pitch"
        preview="edit"
        height={300}
        style={{ borderRadius: 20, overflow: 'hidden' }}
        textareaProps={{
          placeholder: 'Briefly describe your idea and what problem it solves',
        }}
        previewOptions={{
          disallowedElements: ['style'],
        }}
        {...rest}
      />

      {error &&
        error.map((e) => (
          <span className="startup-form_error" key={e}>
            {e}
          </span>
        ))}
    </div>
  );
};

export default CustomMarkdownEditorWithLabel;
