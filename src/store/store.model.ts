import { Observable } from "rxjs";
import { Action } from "../action/action.model";

export interface Store {
  dispatch: (action: Action) => void
}