import { CatchrHttpEntityBase } from '../CatchrHttpEntityBase';
import type { CatchrHttpSDK } from '../CatchrHttpSDK';
import type { Control } from '../types';
import type { Bin, BinCreateData, BinRemoveMatch } from '../CatchrHttpTypes';
declare class BinEntity extends CatchrHttpEntityBase<Bin> {
    constructor(client: CatchrHttpSDK, entopts: any);
    make(this: BinEntity): BinEntity;
    create(this: any, reqdata?: BinCreateData, ctrl?: Control): Promise<BinEntity>;
    remove(this: any, reqmatch?: BinRemoveMatch, ctrl?: Control): Promise<BinEntity>;
}
export { BinEntity };
