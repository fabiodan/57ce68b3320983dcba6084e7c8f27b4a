import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from './Input';

const StyledTextarea = styled(Input)`
  height: auto !important;
  padding: 10px !important;
  resize: ${({ resizable }) => (resizable ? 'both' : 'none')};
`;

const Textarea = ({ resizable, ...props }) => {
  return (
    <StyledTextarea
      resizable={resizable}
      type="textarea"
      {...props}
    />
  )
};

Textarea.propTypes = {
  /** Color of the input border as a string */
  color: PropTypes.oneOf([
    'gray', 'red', 'green'
  ]),
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Label text */
  label: PropTypes.string,
  /** Message object to be displayed below the input */
  message: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.oneOf([
      '', 'success', 'error'
    ])
  }),
  /** Pre-fill the input's default value */
  defaultValue: PropTypes.string,
  /** Number of rows */
  rows: PropTypes.number,
  /** Can you resize the textarea? */
  resizable: PropTypes.bool
};

Textarea.defaultProps = {
  rows: 5,
  resizable: true
};

export default Textarea;
