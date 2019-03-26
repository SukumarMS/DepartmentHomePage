import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IDepartmentTilesWebPartProps {
    description: string;
}
export default class DepartmentTilesWebPart extends BaseClientSideWebPart<IDepartmentTilesWebPartProps> {
    render(): void;
    FetchItems(): Promise<void>;
    AddNewTile(): void;
    UpdateItem(): void;
    DeleteItem(): void;
    Validation(): boolean;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
