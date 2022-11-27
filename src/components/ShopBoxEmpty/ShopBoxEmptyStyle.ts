import styled, { keyframes } from "styled-components";

const loading = keyframes`
  100%{
    transform:translateX(100%);
    }
`

const Empty = styled.div`
  width: 218px;
  height: 285px;
  overflow: hidden;

  background-color: whitesmoke;

  margin-bottom: 30px;

  div{
  width: 100%;
  height: 100%;
  
  background: linear-gradient( to right , transparent, #e3e3e3, transparent);
  transform: translateX(-100%); 
  animation: ${loading} 1s infinite;   
}
`

export default Empty