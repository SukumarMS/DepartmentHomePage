import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IDepartmentMediaGalleryWebPartProps {
    description: string;
}
export default class DepartmentMediaGalleryWebPart extends BaseClientSideWebPart<IDepartmentMediaGalleryWebPartProps> {
    userflag: boolean;
    render(): void;
    MediaGallery(): void;
    GetmediaGalleryItems(userflag: any): Promise<void>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
