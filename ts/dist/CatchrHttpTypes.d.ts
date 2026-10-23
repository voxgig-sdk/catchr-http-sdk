export interface Bin {
    id?: string;
}
export interface BinCreateData {
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface BinRemoveMatch {
    id: string;
    token: string;
    $action?: string;
    [action: string]: any;
}
export interface BinPublic {
    id?: string;
}
export interface BinPublicLoadMatch {
    id: string;
}
export interface BinRequest {
    id?: string;
}
export interface BinRequestLoadMatch {
    id: string;
    since?: number;
    token: string;
    wait?: number;
}
export interface Hnt {
    id?: string;
}
export interface HntCreateData {
    id: string;
}
