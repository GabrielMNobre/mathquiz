import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  margin-top: 7%;
  padding: 8px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-align: center;
  transition: .3s;
  cursor: pointer;
  text-transform: uppercase;

  &:hover, &:focus {
    opacity: .8;
  }
  &:disabled {
    background-color: #1C1814;
    cursor: not-allowed;
  }
`;

Button.GoBack = styled.button`
  width: 100%;
  margin-top: 7%;
  padding: 8px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-align: center;
  transition: .3s;
  cursor: pointer;
  text-transform: uppercase;

  &:hover, &:focus {
    opacity: .8;
  }
  &:disabled {
    background-color: #1C1814;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
