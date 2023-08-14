import { BackgroundImage, BackgroundLinear } from './style'
import backgroundImage from '../../assets/capa-open.jpg'

export const Background = ({ children }) => {
    return (
        <BackgroundImage bgImage={backgroundImage}>
            <BackgroundLinear>
                {children}
            </BackgroundLinear>
        </BackgroundImage>
    )
};