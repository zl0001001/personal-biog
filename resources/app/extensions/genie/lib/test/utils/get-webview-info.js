"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWebviewInfo = void 0;
const activity_utils_1 = require("../utils/activity-utils");
class GetWebviewInfo {
    static async isWebviewVisible() {
        try {
            const info = await activity_utils_1.ActivityUtils.getWebviewInfo();
            if (info === null || info === void 0 ? void 0 : info.isVisible) {
                console.log('info: ' + JSON.stringify(info));
                // 校验 info.isVisible 是否为 true
                return info.isVisible;
            }
        }
        catch (error) {
            console.error('Error occurred while checking webview visibility:', error);
            return false;
        }
    }
}
exports.GetWebviewInfo = GetWebviewInfo;
//# sourceMappingURL=get-webview-info.js.map