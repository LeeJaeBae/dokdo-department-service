import FlexBox from "../atoms/box/FlexBox"
import Logo from "../molecules/Logo"

const Header = () => {
    
    return (
        <FlexBox
            height="4rem"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            maxWidth="1440px"
            >
                <Logo/>
            {
                // 로그인 버튼 자리
            }
        </FlexBox>
    )
}

export default Header