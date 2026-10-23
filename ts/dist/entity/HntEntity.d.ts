import { CatchrHttpEntityBase } from '../CatchrHttpEntityBase';
import type { CatchrHttpSDK } from '../CatchrHttpSDK';
import type { Control } from '../types';
import type { Hnt, HntCreateData } from '../CatchrHttpTypes';
declare class HntEntity extends CatchrHttpEntityBase<Hnt> {
    constructor(client: CatchrHttpSDK, entopts: any);
    make(this: HntEntity): HntEntity;
    create(this: any, reqdata?: HntCreateData, ctrl?: Control): Promise<HntEntity>;
}
export { HntEntity };
