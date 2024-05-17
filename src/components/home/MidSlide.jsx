
import Slide from "./Slide";
import { Box, styled } from "@mui/material";

const Components = styled(Box)`
display: flex;
`;

const LeftComponents = styled(Box)(({ theme }) => ({
width: '80%',
[theme.breakpoints.down('md')]: {
    width: '100%'
}
}));

const RightComponent = styled(Box)(({ theme }) => ({
background: '#FFFFFF',
padding: '7px 5px 5px 5px',
marginTop: 10,
marginLeft: 10,
width: '20%',
textAlign: 'center',
[theme.breakpoints.down('md')]: {
    display: 'none'
}
}));


const MidSlide = ({products, title, timer}) => {

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Components>
            <LeftComponents>
                <Slide
                    products={products}
                    title = {title}
                    timer = {timer}
                />
            </LeftComponents>
            <RightComponent>
                <img src={adURL} style={{width: 230}} alt="ad"/>
            </RightComponent>
        </Components>
    )
}

export default MidSlide;