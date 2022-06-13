import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  delegeted,
}) => {
  return (
    <Wrapper style={{
      "--width": width + "px",
      "--height": size === "small" ? "24px" : "36px",
      "--icon-size": size === "small" ? "16px" : "24px",
      "--font-size": size === "small" ? "0.875rem" : "1.125rem",
      "--border-size": size === "small" ? "1px" : "2px",
      "--icon-padding": size === "small" ? "24px" : "38px",
    }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <BaseInput placeholder={placeholder} {...delegeted} />
      <IconWrapper>
        <Icon id={icon} size={size === "small" ? 16 : 22} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>


  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
`

const BaseInput = styled.input`
  width: 100%;
  height: var(--height);
  padding-left: var(--icon-padding);
  border: none;
  border-bottom: var(--border-size) solid ${COLORS.black};

  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: var(--font-size);

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 3px;
  height: var(--icon-size);
  margin: auto;
  color: ${COLORS.gray700};

  ${BaseInput}:hover + & {
    color: ${COLORS.black};
  }

  ${BaseInput}:focus + & {
    color: ${COLORS.black};
  }
`



export default IconInput;
