import FlexBox from "../theme/atoms/box/FlexBox";

interface TimeLineTemplateProps {
    children: React.ReactNode;
}

export default function TimeLineTemplate({ children }: TimeLineTemplateProps) {
    return (
        <FlexBox
            width="800px"
            marginTop="1rem"
            padding="1rem"
            borderRadius="1rem"
            backgroundColor="#fff"
        >
            {children}
        </FlexBox>
    )
}