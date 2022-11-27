import styled from "styled-components";

const HeaderBoxStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 101px;
  background-color: #0f52ba;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 90px;
    height: 45px;
    border-radius: 8px;
    background-color: #fff;
    margin-right: 88px;
  }
`;

const Text = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-left: 65px;
  * {
    color: #ffffff;
    font-family: "Montserrat";
  }

  h1 {
    font-weight: 700;
    font-size: 40px;
    margin-right: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
  }
`;

export { HeaderBoxStyle, Text };
