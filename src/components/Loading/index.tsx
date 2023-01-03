import pokeball from '../../assets/images/pokeball.png';

import { LoadingDiv, Pokeball } from './Loading.styled';

const Loading = () => {
    return (
        <LoadingDiv>
            <Pokeball src={pokeball}/>
        </LoadingDiv>
    )
}

export default Loading;