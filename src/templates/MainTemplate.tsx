import FlexBox from "../theme/atoms/box/FlexBox";

interface MainTemplateProps {
    children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
    return (
        <FlexBox
            width="100%"
            minHeight="100vh"
            flexDirection="column"
            alignItems="center"
            
        >
            {children}
        </FlexBox>
    )
}

