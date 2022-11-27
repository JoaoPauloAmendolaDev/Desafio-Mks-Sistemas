import styled from "styled-components";

const ExitButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;

  background-color: #000;
  border-radius: 100px;

  >p {
    font-style: "Montserrat";
    font-weight: 400;
    font-size: 20px;
    color: #fff;
  }
`;
const LateralBar = styled.div`
  width: 486px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background-color: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  z-index: ${(isOpen) => (isOpen ? 1 : 0)};

  position: fixed;
  right: 0;
  top: 0;
`;

const TextAndCloseButton = styled.div`
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 36px;
  margin-bottom: 76px;

  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > p {
    font-family: "Montserrat";
    size: 27px;
    color: #fff;
    font-weight: 700;
  }
  }
`;

const ItemsConteiner = styled.div`
  width: 80%;
  height: 65%;

  overflow-y: scroll;
  overflow-wrap: break-word;
`;

const ConfirmBuy = styled.div`
  width: 100%;
  height: 97px;
  background-color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 0;

  span {
    font-family: 'Montserrat';
    font-weight: 700;
    size: 28px;
    color: #fff;
  }
`;

const Total = styled.div`
  width: 70%;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 40px;

  p{
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 28px;
    color: #fff;
  }
`;


export {ExitButton, Total, ConfirmBuy, ItemsConteiner, TextAndCloseButton, LateralBar}