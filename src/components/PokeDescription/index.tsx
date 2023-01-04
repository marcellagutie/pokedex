import useHandle from '../../hooks/useHandle';
import {
    DescriptionWrapper,
    DescriptionText,
    LabelSelect,
    Select,
    SelectWrapper
} from './PokeDescription.styled';

interface DescriptionInfo {
    language: string;
    text: string;
    version: number;
    versionFixed: string;
}
interface DescriptionProps {
    info: DescriptionInfo[];
}

const PokeDescription = ({ info }: DescriptionProps) => {
    const {
        gameDescription,
        handleGameDescriptionChange
    } = useHandle();

    return (
        <DescriptionWrapper>
            <SelectWrapper>
            <LabelSelect>Descrição: </LabelSelect>
            <Select name="version" defaultValue={gameDescription} onChange={(e) => handleGameDescriptionChange(e.target.value)}>
                {info.map((ver: any) => {
                    return <option key={ver.versionFixed} value={ver.version}>{ver.versionFixed}</option>
                })}
            </Select>
            </SelectWrapper>
            <DescriptionText>
                { info[gameDescription].text  }
            </DescriptionText>
        </DescriptionWrapper>
    );
}

export default PokeDescription;