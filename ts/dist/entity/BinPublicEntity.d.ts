import { CatchrHttpEntityBase } from '../CatchrHttpEntityBase';
import type { CatchrHttpSDK } from '../CatchrHttpSDK';
import type { Control } from '../types';
import type { BinPublic, BinPublicLoadMatch } from '../CatchrHttpTypes';
declare class BinPublicEntity extends CatchrHttpEntityBase<BinPublic> {
    constructor(client: CatchrHttpSDK, entopts: any);
    make(this: BinPublicEntity): BinPublicEntity;
    load(this: any, reqmatch?: BinPublicLoadMatch, ctrl?: Control): Promise<BinPublicEntity>;
}
export { BinPublicEntity };
