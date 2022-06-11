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
    <Wrapper style={{ ...SIZES[size] }}>
      <InnerWrapper>
        <Bar value={value} />
      </InnerWrapper>
    </Wrapper>
  )
};

export default ProgressBar;

const Wrapper = styled.div`
  height: var(--progressbar-height , 24px);
  padding: var(--progressbar-padding , 4px);
  width: 370px;
  border: none;
  border-radius: var(--progressbar-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  overflow: hidden;
`

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: calc(var(--progressbar-radius) - 2px);
  overflow: hidden;
`

const Bar = styled.div`
  width: ${p => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`