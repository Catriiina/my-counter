import {useState} from "react";
import { S } from './FirstCounter_Styles'

export const FirstCounter = () => {

    const [value, setValue] = useState<number>(0)

    // useEffect(() => {
    //     const valueAsString = localStorage.getItem('counterValue');
    //     const parsedValue = JSON.parse(valueAsString || '0');
    //     setValue(parsedValue);
    // }, []);
    //
    // useEffect( ()=>{
    //         localStorage.setItem('counterValue', JSON.stringify(value))
    // }, [value])


    const increment = () => {
        if (value < 5) {
            setValue(value + 1);
        }
    }
    const handleReset = () => setValue(0);

    const disableInc = value === 5
    const disableReset = value === 0


    return (
            <S.Div>
                <S.TitleNum style={{ color: value === 5 ? 'deeppink' : 'black' }}>{value}</S.TitleNum>
                <S.DivButton>
                    <S.Button
                        onClick={increment}
                        disabled={disableInc}
                        disabledClass={value === 5}
                      >
                        inc
                    </S.Button>
                    <S.Button
                        onClick={handleReset}
                        disabled={disableReset}
                        disabledClass={value === 0}
                      >
                        reset
                    </S.Button>
                </S.DivButton>
            </S.Div>
    );
};
