import { styled } from "styled-components";

interface FlexBoxProps { 
    children: React.ReactNode;
    [key: string]: any;
}

export default function FlexBox({ children, ...props }: FlexBoxProps) {
    return <StyledFlexBox {...props}>{children}</StyledFlexBox>;
}

const spreadProps = (props: any) => {
    const keys = Object.keys(props);
    const spreadedProps: any = [];
    keys.forEach((key) => {
        if (key === "children") return;
        // convert camelCase to snake-case
        const snakeKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
        spreadedProps.push(`${snakeKey}: ${props[key]};`);
    });
    return spreadedProps;
}

const StyledFlexBox = styled.div`
    display: flex;
    // spread props
    ${(props) => spreadProps(props).join("\n")}
`;