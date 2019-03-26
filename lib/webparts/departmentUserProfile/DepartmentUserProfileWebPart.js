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
import * as strings from 'DepartmentUserProfileWebPartStrings';
import pnp from 'sp-pnp-js';
import 'jquery';
var arrDocument = [];
var DepartmentUserProfileWebPart = /** @class */ (function (_super) {
    __extends(DepartmentUserProfileWebPart, _super);
    function DepartmentUserProfileWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DepartmentUserProfileWebPart.prototype.render = function () {
        var _this = this;
        this.domElement.innerHTML = "\n    <div class=\"modal fade\" id=\"AddUploadmodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"basicModal\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"myDocModalLabel\">Document Upload</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span class=\"icon-remove\"></span> </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"col-xs-12 form-element\">\n            <label class=\"required\">Title</label>\n            <input type=\"text\" id=\"txtDocTitle\" placeholder=\"Title of the Document\" class=\"form-control\">\n          </div>\n          <div class=\"col-xs-12 form-element\">\n          <label class=\"required\">Library</label>\n          <select id=\"ddlDocLibrary\" class='form-control'>\n          \n          </select>\n          </div>\n          <div class=\"col-xs-12 form-element\" id=\"divUploadDoc\">\n          <div class=\"custom-upload banner-upload\">\n          <label class='control-label required'>Document File</label>\n          <input type='file' id='uploadDocFile' title=\"\" name='file' accept='.doc,.docx,.xls,.ppt,.pdf' multiple='' class='file'>\n          <div class='input-group'>\n          <span class='input-group-btn input-group-sm'>\n          <button type='button' class='btn btn-fab btn-fab-mini'>Browse</button>\n          </span>\n          <input type='text' readonly='' id='Uploadedtxt' class='form-control' placeholder='Upload Files'>\n          </div>\n          </div>\n          </div>\n        </div>\n          <div class=\"modal-footer\">\n            <div class=\"col-xs-12 form-element\"> \n            <a id=\"btnDocAddSubmit\" href=\"#\" class=\"s-button\">Submit</a><label id=\"lblwait\" style=\"display:none;float:left;\">Please Wait...</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section class=\"user-profile\">\n      <div class=\"user-view user-detail\">\n      </div>\n      <div class=\"user-view user-view1\">\n      <a href=\"\" data-toggle=\"modal\" data-target=\"#AddUploadmodal\"><i class=\"icon-add\"></i>Upload</a>\n      <p class=\"center-p\">(Upload your files)</p>\n      </div>\n    </section>\n    <div class='modal-loader-cls'><!-- Place at bottom of page --></div>";
        this.getuserdetails();
        this.getDocuments();
        var Submitevent = $('#btnDocAddSubmit');
        Submitevent.on("click", function (e) { return _this.addDocuments(); });
        $("#btnDocAddSubmit").hover(function () {
            $(this).css("background-color", "#E42313");
        });
        $("input[type=file]").change(function () {
            $('#Uploadedtxt').val($('#uploadDocFile').val().replace(/C:\\fakepath\\/i, ''));
        });
        var _thiss = this;
        $("#ddlDocLibrary").change(function () {
            _thiss.getColumns($(this).val());
        });
    };
    DepartmentUserProfileWebPart.prototype.getDocuments = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                pnp.sp.site.getDocumentLibraries(this.context.pageContext.web.absoluteUrl).then(function (data) {
                    var strTitle = "";
                    strTitle += '<option id="select" disabled selected>select</option>';
                    for (var i = 0; i < data.length; i++) {
                        // arrDocument.push({
                        //   Title:data[i].Title,
                        //   URL:data[i].ServerRelativeUrl
                        // })
                        var stringlen = data[i].AbsoluteUrl.split('/');
                        var Lib = stringlen[stringlen.length - 1];
                        //console.log(stringlen);
                        if (Lib != "SharedDocuments") {
                            strTitle += "<option id='" + Lib + "'>" + Lib + "</option>";
                        }
                    }
                    $('#ddlDocLibrary').html(strTitle);
                }).catch(function (err) {
                    alert(err);
                });
                return [2 /*return*/];
            });
        });
    };
    DepartmentUserProfileWebPart.prototype.addDocuments = function () {
        var $body = $('body');
        if ($('.ajs-message').length > 0) {
            $('.ajs-message').remove();
        }
        var isAllfield = true;
        var dynamicvalidation = true;
        if (!$('#txtDocTitle').val().trim()) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error("Please enter the Title");
            isAllfield = false;
        }
        else if ($('#ddlDocLibrary').find(":selected").text() == "select") {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error("Please select the Document Library");
            isAllfield = false;
        }
        else if (!$('#uploadDocFile').val().trim()) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error("Please Choose the File");
            isAllfield = false;
        }
        else {
            for (var i = 0; i < arrDocument.length; i++) {
                if (!$('#txt' + arrDocument[i]["Title"]).val().trim()) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please Enter the " + arrDocument[i]["Title"]);
                    isAllfield = false;
                    return false;
                }
            }
        }
        if (isAllfield) {
            $('#btnDocAddSubmit').hide();
            $('#lblwait').show();
            // $('#btnDocAddSubmit').css('disabled','disabled');
            var files = document.getElementById("uploadDocFile");
            var file_1 = files.files[0];
            var VideoTitle = { User: $('#txtDocTitle').val().trim() };
            var Json = [];
            var item = {};
            for (var i = 0; i < arrDocument.length; i++) {
                if (arrDocument[i]["TypeDisplayName"] == "Single line of text") {
                    item[arrDocument[i]["Title"]] = $('#txt' + arrDocument[i]["Title"]).val().trim();
                }
                else if (arrDocument[i]["TypeDisplayName"] == "Hyperlink or Picture") {
                    var link = {
                        "__metadata": {
                            "type": "SP.FieldUrlValue"
                        },
                        Url: $('#txt' + arrDocument[i]["Title"]).val().trim(),
                    };
                    item[arrDocument[i]["Title"]] = link;
                }
            }
            Json.push(item);
            var Vdotile = Json[0];
            $('body').addClass("loading");
            pnp.sp.web.getFolderByServerRelativeUrl($('#ddlDocLibrary').find(":selected").text()).files.add(file_1.name, file_1, true)
                .then(function (result) {
                console.log(file_1.name + " upload successfully!");
                result.file.listItemAllFields.get().then(function (listItemAllFields) {
                    pnp.sp.web.lists.getByTitle($('#ddlDocLibrary').find(":selected").text()).items
                        .getById(listItemAllFields.Id).update(Vdotile).then(function (r) {
                        alertify.set('notifier', 'position', 'top-right');
                        alertify.success("Document Uploaded Successfully");
                        window.location.reload();
                    });
                });
            });
            $('body').removeClass("loading");
        }
    };
    DepartmentUserProfileWebPart.prototype.getColumns = function (DocumentLib) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                $('#divUploadDoc').nextAll().remove();
                arrDocument = [];
                $.ajax({
                    url: this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('" + DocumentLib + "')/fields?select=Title,Name&$filter=Hidden eq false and ReadOnlyField eq false and Required eq true",
                    type: "GET",
                    headers: { Accept: "application/json;odata=verbose" },
                    success: function (Columndata) {
                        var DymHtml = "";
                        for (var i = 0; i < Columndata.d.results.length; i++) {
                            if (Columndata.d.results[i].Title != "Name") {
                                DymHtml += '<div class="col-xs-12 form-element">' +
                                    '<label class="required">' + Columndata.d.results[i].Title + '</label>' +
                                    '<input type="text" id="txt' + Columndata.d.results[i].Title + '" placeholder="' + Columndata.d.results[i].Title + '" class="form-control">' +
                                    '</div>';
                                arrDocument.push({
                                    "Title": Columndata.d.results[i].Title,
                                    "TypeDisplayName": Columndata.d.results[i].TypeDisplayName
                                });
                            }
                        }
                        $('#divUploadDoc').after(DymHtml);
                    },
                    error: function (data) {
                        console.log(data);
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    DepartmentUserProfileWebPart.prototype.getuserdetails = function () {
        var _this = this;
        pnp.sp.profiles.myProperties.get().then(function (result) {
            var props = result.UserProfileProperties;
            var propValue = {};
            props.forEach(function (prop) {
                if (typeof prop.Value === undefined || prop.Value == "" || prop.Value == "undefined") {
                    propValue[prop.Key] = "Not Available";
                }
                else {
                    propValue[prop.Key] = prop.Value;
                }
            });
            _this.renderhtml(propValue);
            // console.log(propValue);
        });
    };
    DepartmentUserProfileWebPart.prototype.renderhtml = function (objResults) {
        var url = objResults["PictureURL"];
        var Email = objResults["WorkEmail"].length;
        if (objResults["WorkEmail"].length > 24) {
            Email = objResults["WorkEmail"].substring(0, 24) + "...";
        }
        var pathname = new URL(url).origin + "/person.aspx";
        //console.log(pathname);
        var renderhtml = "";
        renderhtml += "<div align='center'>" +
            "<img src='" + objResults["PictureURL"] + "'>" +
            "</div>" +
            "<h3>" + objResults["FirstName"] + " " + objResults["LastName"] + "</h3>" +
            "<p class='pad-left0'>" + objResults["Department"] + "</p>" +
            "<p class='p-space' title='" + objResults["WorkEmail"] + "'><i class='icon-mail'></i>" + Email + "</p>" +
            "<p><i class='icon-phone'></i>" + objResults["WorkPhone"] + "</p>" +
            "<a href='" + pathname + "'>View Profile</a>";
        $('.user-detail').append(renderhtml);
    };
    Object.defineProperty(DepartmentUserProfileWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    DepartmentUserProfileWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return DepartmentUserProfileWebPart;
}(BaseClientSideWebPart));
export default DepartmentUserProfileWebPart;
//# sourceMappingURL=DepartmentUserProfileWebPart.js.map