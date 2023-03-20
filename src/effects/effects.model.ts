import { MonoTypeOperatorFunction } from "rxjs";
import { Action } from "../action/action.model";

export type Effects = MonoTypeOperatorFunction<Action>