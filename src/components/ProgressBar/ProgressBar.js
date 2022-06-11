/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const SIZES = {
    large: {
      "--progressbar-height": "24px",
      "--progressbar-padding": "4px",
      "--progressbar-radius": "8px",
    },
    medium: {
      "--progressbar-height": "12px",
      "--progressbar-padding": "0px",
      "--progressbar-radius": "4px",
    },
    small: {
      "--progressbar-height": "8px",
      "--progressbar-padding": "0px",
      "--progressbar-radius": "4px",
    }
  }

  return (
    <>
      <Wrapper max={100} value={value} style={{ "--progressbar-border-radius": value >= 100 ? "6px" : "6px 0px 0px 6px", ...SIZES[size] }} />
      <VisuallyHidden>Progressbar: {value}</VisuallyHidden>
    </>
  )
};

export default ProgressBar;

const Wrapper = styled.progress`
  --progressbar-color: ${COLORS.primary};
  --progressbar-border-radius: 6px 0px 0px 6px;
  appearance: none;
  height: var(--progressbar-height , 24px);
  padding: var(--progressbar-padding , 4px);
  width: 370px;
  border: none;
  border-radius: var(--progressbar-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
  background-color: ${COLORS.transparentGray15};

  &::-webkit-progress-bar {
    background-color: var(--progressbar-color);
    border-radius: var(--progressbar-border-radius);
  }
  ::-moz-progress-bar {
    background-color: var(--progressbar-color);
    border-radius: var(--progressbar-border-radius);
  }
`