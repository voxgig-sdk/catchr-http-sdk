import { BinEntity } from './entity/BinEntity';
import { BinPublicEntity } from './entity/BinPublicEntity';
import { BinRequestEntity } from './entity/BinRequestEntity';
import { HntEntity } from './entity/HntEntity';
export type * from './CatchrHttpTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CatchrHttpEntityBase } from './CatchrHttpEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class CatchrHttpSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Bin(entopts?: Record<string, any>): BinEntity;
    BinPublic(entopts?: Record<string, any>): BinPublicEntity;
    BinRequest(entopts?: Record<string, any>): BinRequestEntity;
    Hnt(entopts?: Record<string, any>): HntEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CatchrHttpSDK;
    tester(testopts?: any, sdkopts?: any): CatchrHttpSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CatchrHttpSDK;
export { stdutil, config, BaseFeature, CatchrHttpEntityBase, CatchrHttpSDK, SDK, };
export type { DirectResult };
