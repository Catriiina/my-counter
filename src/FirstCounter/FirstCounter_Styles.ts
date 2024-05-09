import styled from 'styled-components';

const Div = styled.div`
 border: 2px solid deeppink;
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 100px auto auto;
  align-items: center;
  padding-top: 20px; 
  padding-bottom: 20px; 
  border-radius: 5px;
`

const TitleNum = styled.div`
  width: 80%;
  height: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 5px;
  border: 2px solid deeppink;
`
const DivButton = styled.div`
 border: 2px solid deeppink;
  width: 60%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0 10%;
`

const Button = styled.button<{ disabledClass?: boolean; }>`
  background: ${props => props.disabledClass ? "grey" : "deeppink"};
  color: mistyrose;
  border-radius: 5px;
  width: 40%;
  height: 60%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
`

export const S = {
    Div,
    TitleNum,
    DivButton,
    Button
}
