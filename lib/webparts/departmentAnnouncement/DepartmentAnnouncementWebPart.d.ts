import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import 'jquery';
export interface IDepartmentAnnouncementWebPartProps {
    description: string;
}
export default class DepartmentAnnouncementWebPart extends BaseClientSideWebPart<IDepartmentAnnouncementWebPartProps> {
    userflag: boolean;
    render(): void;
    getAnnouncements(userflag: any): Promise<void>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
