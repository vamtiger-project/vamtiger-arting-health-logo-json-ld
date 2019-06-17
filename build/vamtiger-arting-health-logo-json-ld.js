"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const json_ld_1 = require("./json-ld");
const json_1 = require("./json");
const load_script_1 = require("./load-script");
const jsonLdParams = json_ld_1.default.map(data => ({
    url: types_1.url,
    type: types_1.ScriptType.jsonLd,
    data
}));
const jsonParams = {
    url: types_1.url,
    type: types_1.ScriptType.json,
    data: json_1.default
};
const scriptParams = [
    ...jsonLdParams,
    jsonParams
];
scriptParams.forEach(load_script_1.default);
//# sourceMappingURL=vamtiger-arting-health-logo-json-ld.js.map