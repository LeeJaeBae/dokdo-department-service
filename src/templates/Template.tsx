import Header from "../theme/organisms/Header";
import MainTemplate from "./MainTemplate";
import TemplateBackground from "./TemplateBackground";
import TimeLineTemplate from "./TimeLineTemplate";

export const Template = Object.assign(MainTemplate, {
    Header: Header,
    Body: TemplateBackground,
    TimeLine: TimeLineTemplate
});