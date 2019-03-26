var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'DepartmentQuickLaunchWebPartStrings';
import "jquery";
import { readItems, checkUserinGroup } from "../../commonJS";
var DepartmentQuickLaunchWebPart = /** @class */ (function (_super) {
    __extends(DepartmentQuickLaunchWebPart, _super);
    function DepartmentQuickLaunchWebPart() {
        // USER GROUP VALIDATION
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userflag = false;
        return _this;
    }
    DepartmentQuickLaunchWebPart.prototype.render = function () {
        var _this = this;
        checkUserinGroup("Quick Launch", this.context.pageContext.user.email, function (result) {
            if (result == 1) {
                _this.userflag = true;
                _this.QuickLaunchDisplay(_this.userflag);
            }
        });
    };
    // STRUCTURE
    DepartmentQuickLaunchWebPart.prototype.QuickLaunchDisplay = function (userflag) {
        var webURL = this.context.pageContext.web.absoluteUrl;
        this.domElement.innerHTML = "\n   <section class=\"vertical-menu\">\n     <div class=\"panel-group\" id=\"accordionMenu\" role=\"tablist\" aria-multiselectable=\"true\">\n       <div class='panel panel-default'>\n         <div style=\"background-color: #E42313;\" class='panel-heading' role='tab' id=\"addNew\">\n           <h4  class='panel-title'>\n             <a id='quickLaunchTitleId' style=\"color:#fff;\" target='_blank' href='../Pages/ListView.aspx?CName=Quick Launch'><i class='icon-new'></i>Customize</a>\n           </h4>\n         </div>\n       </div>\n     </div>\n   </section>\n   ";
        this.displayQuickLinks(userflag);
        //  var divHeight = $('#right-side').height(); 
        //  $('.vertical-menu').css('min-height', divHeight+'px');
    };
    // BIND DATA TO HTML
    DepartmentQuickLaunchWebPart.prototype.displayQuickLinks = function (userflag) {
        return __awaiter(this, void 0, void 0, function () {
            var Renderhtml, linkListItems, linksListItemsLength, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Renderhtml = "";
                        return [4 /*yield*/, readItems("Quick Launch", ["Title", "LinkURL"], 5, "Modified", "Display", 1)];
                    case 1:
                        linkListItems = _a.sent();
                        linksListItemsLength = linkListItems.length;
                        if (linksListItemsLength == 0) {
                            Renderhtml += "<div class='panel panel-default'>" +
                                "<div class='panel-heading' role='tab' id='NoItemToDisp'>" +
                                "<h4 class='panel-title'>No Item To Display </h4>" +
                                "</div>";
                            "</div>";
                        }
                        else {
                            for (i = 0; i < linksListItemsLength; i++) {
                                Renderhtml += "<div class='panel panel-default'>" +
                                    "<div class='panel-heading' role='tab' id=" + linkListItems[i].Title + ">" +
                                    "<h4 class='panel-title'>" +
                                    "<a  target='_blank' href='" + linkListItems[i].LinkURL.Url + "'><i class='icon-file'></i>" + linkListItems[i].Title + "</a>" +
                                    "</h4>" +
                                    "</div>";
                                "</div>";
                            }
                        }
                        $('#accordionMenu').append(Renderhtml);
                        if (userflag == true) {
                            $('#quickLaunchTitleId').show();
                        }
                        else if (userflag == false) {
                            $('#quickLaunchTitleId').hide();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DepartmentQuickLaunchWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    DepartmentQuickLaunchWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return DepartmentQuickLaunchWebPart;
}(BaseClientSideWebPart));
export default DepartmentQuickLaunchWebPart;
//# sourceMappingURL=DepartmentQuickLaunchWebPart.js.map