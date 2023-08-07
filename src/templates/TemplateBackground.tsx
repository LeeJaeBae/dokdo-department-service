import FlexBox from "../theme/atoms/box/FlexBox";

interface TemplateBackgroundProps {
    children: React.ReactNode;
}

export default function TemplateBackground({ children }: TemplateBackgroundProps) {
        return (
            <FlexBox
                width="100%"
                height="100%"
                flexDirection="column"
                alignItems="center"
                backgroundColor="#e8e8e8"
            >
                {children}
            </FlexBox>
        )

}