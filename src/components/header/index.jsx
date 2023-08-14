import logoImage from '../../assets/logo.svg'
import { Container } from './style'

export const Header = () => {
    return (
        <Container>
            <img src={logoImage} alt='logo'/>
            <nav>
                <a href="#">Movies</a>
                <a href="#">TV Shows</a>
                <a href="#">All</a>
            </nav>
        </Container>
    )
};