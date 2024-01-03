import styled from 'styled-components';

export const ToastContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100% !important;
    left: 0;
  }
`;

export const WarningContainer = styled.div`
  background-color: ${({ isError }) => (isError ? '#EB5757' : '#6FCF97')};
  width: 500px;
  padding: 16px;
  color: white;
  position: fixed;
  top: 0;
  box-shadow: 0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  display: ${({ show }) => show};
  z-index: 200;

  @media (max-width: 500px) {
    width: 100% !important;
    left: 0;
  }
`;

export const WarningHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    margin-bottom: 5px;
  }

  h2 {
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    color: black;
    margin-top: -8px;
    margin-right: 5px;
  }
`;

export const Message = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const MainWarningContainer = styled.div`
  background-color: #ffd7b1;
  width: 500px;
  padding: 10px;
  color: white;
  position: fixed;
  top: 0;
  box-shadow: 0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  display: ${({ show }) => show};
  z-index: 500;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 100% !important;
    left: 0;
  }

  h5 {
    /* font-family: 'GT Walsheim'; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #6619d2;
  }
`;

export const InformationContainer = styled.div`
  background-color: #efe3ff;
  width: 500px;
  padding: 10px;
  color: white;
  position: fixed;
  top: 0;
  box-shadow: 0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  display: ${({ show }) => show};
  z-index: 500;

  @media (max-width: 500px) {
    width: 100% !important;
    left: 0;
  }

  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #6619d2;
  }
`;

export const SuccessContainer = styled.div`
  background-color: #e3ffeb;
  width: 500px;
  padding: 10px;
  color: white;
  position: fixed;
  top: 0;
  box-shadow: 0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  display: ${({ show }) => show};
  z-index: 500;

  @media (max-width: 500px) {
    width: 100% !important;
    left: 0;
  }

  h5 {
    /* font-family: 'GT Walsheim'; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #6619d2;
  }
`;

export const FailedContainer = styled.div`
  background-color: #ffb1b1;
  width: 500px;
  padding: 10px;
  color: white;
  position: fixed;
  top: 0;
  box-shadow: 0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  display: ${({ show }) => show};
  z-index: 500;

  @media (max-width: 500px) {
    width: 100% !important;
    left: 0;
  }

  h5 {
    /* font-family: 'GT Walsheim'; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #6619d2;
  }
`;

export const ToastHead = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000 !important;
  margin-bottom: 8px;
`;

export const LinkArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
`;

export const FlexArea = styled.div`
  display: flex;
  justify-content: space-between;

  h5 {
    color: #400092;
    margin-bottom: 15px;
  }

  h2 {
    color: black;
    font-weight: 500;
    color: #400092;
  }
`;
