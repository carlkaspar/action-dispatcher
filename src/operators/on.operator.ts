import { Observable } from "rxjs";
import { Action } from "../action/action.model";

export type On = (source: Observable<Action>) => Observable<Action>
export const on: On = (source: Observable<Action>) => source