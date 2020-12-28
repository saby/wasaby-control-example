import {Control, TemplateFunction} from "UI/Base";
import * as Template from "wml!ControlExample-demo/process/Diagram/Template";

export default class extends Control {
    protected _template: TemplateFunction = Template;
}
