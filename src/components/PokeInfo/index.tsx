import React from 'react'

import {
    Value,
    Wrapper,
    Cell,
    Label
} from './PokeInfo.styled'
interface InfoProps {
    height: number
    weight: number
    abilities: any
}

const PokeInfo: React.FC<InfoProps> = ({height, weight, abilities}) => {
    function round(num: number) {
        let res = String(num)
        if(res.length === 1) {
            res = res.padStart(2, '0')
        }
        const response = res.slice(0, res.length-1) + ',' + res.slice(res.length-1, res.length)
        return response
    }
    const heightFixed = round(height)
    const weightFixed = round(weight)
    return (
        <Wrapper>
                <Cell>
                    <Label>Altura</Label>
                    <Value>{ `${heightFixed} metros` }</Value>
                </Cell>
                <Cell>
                    <Label>Peso</Label>
                    <Value>{ `${weightFixed} kg` }</Value>
                </Cell>
                <Cell>
                    <Label>Habilidades</Label>
                    { abilities.map((index: any) => {
                        return <Value key={index.ability.name}>{index.ability.name}</Value>
                    }) }
                </Cell>
        </Wrapper>
    )
}
export default PokeInfo