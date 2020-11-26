import {Control, IControlOptions, TemplateFunction} from 'UI/Base';
import {IDiagramCategory} from 'ControlExample/process';
import controlTemplate = require('wml!ControlExample-demo/process/Diagram/BorderVisible/Template');

class Diagram extends Control<IControlOptions> {
    protected _template: TemplateFunction = controlTemplate;
    protected _data: IDiagramCategory[] = [];

    protected _beforeMount(): void {
        this._data = [
            {
                name : 'done',
                value: 30
            },
            {
                name: 'inprocess',
                value: 60
            },
            {
                name: 'error',
                value: 10
            }
        ];
    }

    static _theme: string[] = ['Controls/Classes'];
}
export default Diagram;
