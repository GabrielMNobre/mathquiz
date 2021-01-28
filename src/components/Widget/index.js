import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #1C1814;
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      padding: 8px;
      margin-top: 10px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.contrastText}; 
      background-color: #1C1814;
      font-style: normal;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.15px;
    }
    button {
      width: 100%;
      margin-top: 7%;
      padding: 8px;
      color: ${({ theme }) => theme.colors.contrastText};
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      font-style: normal;
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 1.25px;
      text-align: center;
    }
    button:disabled {
      background-color: #1C1814;
    }
  }
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
