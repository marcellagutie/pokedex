import { InfoResponse, Ability } from '../../utils/types/info.type'

import {
    Value,
    Wrapper,
    Cell,
    Label
} from './PokeInfo.styled';


const PokeInfo = (props: InfoResponse) => {
    function round(num: number) {
        let res = String(num);
        if(res.length === 1) {
            res = res.padStart(2, '0');
        }
        return res.slice(0, res.length-1) + ',' + res.slice(res.length-1, res.length);
    }
    const heightFixed = round(props.height);
    const weightFixed = round(props.weight);
    return (
        <Wrapper>
            <Cell>
                <Label>Altura</Label>
                <Value>{`${heightFixed} metros`}</Value>
            </Cell>
            <Cell>
                <Label>Peso</Label>
                <Value>{`${weightFixed} kg`}</Value>
            </Cell>
            <Cell>
                <Label>Habilidades</Label>
                {props.abilities?.map((index: Ability) => {
                    return <Value key={index.ability.name}>{index.ability.name}</Value>
                })}
            </Cell>
        </Wrapper>
    )
}
export default PokeInfo