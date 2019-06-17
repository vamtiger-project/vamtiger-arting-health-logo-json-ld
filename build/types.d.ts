export declare enum ScriptType {
    jsonLd = "application/ld+json",
    json = "application/json"
}
export interface IAnyObject {
    [key: string]: any;
}
export interface ILoadScript {
    type: ScriptType;
    url: string;
    data: IAnyObject;
}
export declare const url = "https://vamtiger-project.github.io/vamtiger-arting-health-logo-json-ld/build/vamtiger-arting-health-logo-json-ld.js";
