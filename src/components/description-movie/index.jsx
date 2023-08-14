import * as C from './style';
import { BsPlayFill } from 'react-icons/bs';

export const DescriptionMovie = ({ handleOpenPlayVideo }) => {
    return (
        <C.Container>
            <C.Title>Oppenheimer</C.Title>
            <C.Description>Physicist J. Robert Oppenheimer works with a team of scientists during the Manhattan Project, leading to the development of the atomic bomb.</C.Description>
            <C.Button onClick={handleOpenPlayVideo}>
                <BsPlayFill size={24} />
                Watch Now
            </C.Button>
        </C.Container>
    );
};