import FlexBox from "../theme/atoms/box/FlexBox";

interface MainTemplateProps {
    children: React.ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
    return (
        <FlexBox
            width="100%"
            height="100vh"
            minHeight="100%"
            flexDirection="column"
            alignItems="center"
        >
            {children}
        </FlexBox>
    )
}

