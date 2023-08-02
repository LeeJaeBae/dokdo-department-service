import FlexBox from "../atoms/box/FlexBox"
import Logo from "../molecules/Logo"

const Header = () => {
    return (
        <FlexBox
            height="3rem"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            >
                <Logo/>
            </FlexBox>
    )
}

export default Header