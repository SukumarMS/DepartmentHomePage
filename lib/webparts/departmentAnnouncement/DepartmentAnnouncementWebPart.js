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
import * as strings from 'DepartmentAnnouncementWebPartStrings';
import 'jquery';
import { readItems, checkUserinGroup } from '../../commonJS';
var DepartmentAnnouncementWebPart = /** @class */ (function (_super) {
    __extends(DepartmentAnnouncementWebPart, _super);
    function DepartmentAnnouncementWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userflag = false;
        return _this;
    }
    DepartmentAnnouncementWebPart.prototype.render = function () {
        this.domElement.innerHTML = '<section class="about-section announ-section">' +
            "<h3 id='HeadingAnnounce'><a id='AnnounceEdit' href='../Pages/EditListItem.aspx?CName=Announcements'>Edit</a></h3>" +
            "<p id='ParaAnnounce'></p>" +
            "</section>";
        var _this = this;
        //Checking user details in group
        checkUserinGroup("Admin", this.context.pageContext.user.email, function (result) {
            if (result == 1) {
                _this.userflag = true;
            }
            _this.getAnnouncements(_this.userflag);
        });
        // $("#Showmore").click(function(){
        //   if($("#ParaAnnounce").hasClass("ParaAnnounce")) {
        //       $(this).text("Show Less");
        //   } else {
        //       $(this).text("Show More");
        //   }
        //   $("#ParaAnnounce").toggleClass("ParaAnnounce");
        //   var divHeight = $('#right-side').height();
        //   $('.vertical-menu').css('min-height', divHeight + 'px');
        //   });
    };
    DepartmentAnnouncementWebPart.prototype.getAnnouncements = function (userflag) {
        return __awaiter(this, void 0, void 0, function () {
            var listName, columnArray, Username, getItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listName = "Announcements";
                        columnArray = ["Announcements", "ID", "Title"];
                        Username = this.context.pageContext.user.displayName;
                        return [4 /*yield*/, readItems(listName, columnArray, 1, "Modified", "ID", 1)];
                    case 1:
                        getItems = _a.sent();
                        if (getItems.length > 0) {
                            $('#ParaAnnounce').html(getItems[0].Announcements);
                            $('#HeadingAnnounce').prepend(getItems[0].Title);
                            if (userflag == true) {
                                $('#AnnounceEdit').show();
                            }
                            else {
                                $('#AnnounceEdit').hide();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DepartmentAnnouncementWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    DepartmentAnnouncementWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return DepartmentAnnouncementWebPart;
}(BaseClientSideWebPart));
export default DepartmentAnnouncementWebPart;
//# sourceMappingURL=DepartmentAnnouncementWebPart.js.map