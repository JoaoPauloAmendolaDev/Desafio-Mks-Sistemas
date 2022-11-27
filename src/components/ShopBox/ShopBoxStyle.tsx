import styled from "styled-components";

const ShopBoxConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 218px;
  height: 285px;

  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2 8 #000;

  > img {
    width: 111px;
    height: 138px;
    margin-bottom: 15px;
  }

  > p {
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 10px;
    line-height: 19px;
    color: #2c2c2c;

    width: 90%;
    margin-left: 14px;
    margin-bottom: 30px;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 32px;
    border-radius: 8px;

    background-color: #0f52ba;

    span {
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #fff;

      margin-left: 11px;
    }
  }
`;

const NameAndValue = styled.span`
  display: flex;
  justify-content: space-around;

  height: 50px;
  width: 100%;

  p {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2c2c2c;

    width: 124px;
    height: 38px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: 26px;
    margin-right: 12px;

    border-radius: 5px;
    background-color: #373737;

    color: #fff;

    font-family: "Montserrat";
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
  }
`;

const InformationBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export { ShopBoxConteiner, NameAndValue, InformationBox };
