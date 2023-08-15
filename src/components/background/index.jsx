import { BackgroundImage, BackgroundLinear } from './style'

export const Background = ({ children, imageBanner }) => {
    return (
        <BackgroundImage bgImage={imageBanner}>
            <BackgroundLinear>
                {children}
            </BackgroundLinear>
        </BackgroundImage>
    )
};