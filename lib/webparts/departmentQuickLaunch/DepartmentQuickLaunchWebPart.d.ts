import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import "jquery";
export interface IDepartmentQuickLaunchWebPartProps {
    description: string;
}
export default class DepartmentQuickLaunchWebPart extends BaseClientSideWebPart<IDepartmentQuickLaunchWebPartProps> {
    userflag: boolean;
    render(): void;
    QuickLaunchDisplay(userflag: any): void;
    displayQuickLinks(userflag: any): Promise<void>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
