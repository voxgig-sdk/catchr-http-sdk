import { CatchrHttpEntityBase } from '../CatchrHttpEntityBase';
import type { CatchrHttpSDK } from '../CatchrHttpSDK';
import type { Control } from '../types';
import type { BinRequest, BinRequestLoadMatch } from '../CatchrHttpTypes';
declare class BinRequestEntity extends CatchrHttpEntityBase<BinRequest> {
    constructor(client: CatchrHttpSDK, entopts: any);
    make(this: BinRequestEntity): BinRequestEntity;
    load(this: any, reqmatch?: BinRequestLoadMatch, ctrl?: Control): Promise<BinRequestEntity>;
}
export { BinRequestEntity };
