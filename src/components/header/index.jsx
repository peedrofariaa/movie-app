import logoImage from '../../assets/logo.svg'
import { Container } from './style'

export const Header = () => {
    return (
        <Container>
            <img src={logoImage} alt='logo'/>
            <nav>
                <a href="#Movies">Movies</a>
                <a href="#TV Shows">TV Shows</a>
                <a href="#All">All</a>
            </nav>
        </Container>
    )
};