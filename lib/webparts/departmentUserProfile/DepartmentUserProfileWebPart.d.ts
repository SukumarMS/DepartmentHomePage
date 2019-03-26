import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import 'jquery';
export interface IDepartmentUserProfileWebPartProps {
    description: string;
}
export default class DepartmentUserProfileWebPart extends BaseClientSideWebPart<IDepartmentUserProfileWebPartProps> {
    render(): void;
    getDocuments(): Promise<void>;
    addDocuments(): boolean;
    getColumns(DocumentLib: any): Promise<void>;
    getuserdetails(): void;
    renderhtml(objResults: any): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
