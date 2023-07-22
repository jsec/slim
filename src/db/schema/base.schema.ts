/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { type Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ModelBase extends Base {}
export class ModelBase extends TimeStamps {}
