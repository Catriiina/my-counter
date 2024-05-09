
import { S } from './FirstCounter_Styles'
import styled from "styled-components";

export const CounterSettings = () => {



    return (
        <S.Div>
            <TitleNum>
                <InputLabel>max value: <InputField /> </InputLabel>
                <InputLabel>start value: <InputField /> </InputLabel>
            </TitleNum>
            <DivButton>
                <S.Button>
                   set
                </S.Button>
            </DivButton>
        </S.Div>
    );
};

const DivButton = styled.div`
 border: 2px solid deeppink;
  width: 60%;
  height: 30%;
  display: flex;
  border-radius: 5px;
  padding: 0 10%;
  justify-content: center;
  align-items: center;
`
const TitleNum = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-between; 
  border-radius: 5px;
  border: 2px solid deeppink;
`

const InputLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px 20px;

`;

const InputField = styled.input`
  width: 40%;
  margin-left: 10px;
`;