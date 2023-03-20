import { Action } from "./action.model";

export function createAction<Payload extends object | undefined>(type: string, _config: Payload | undefined = undefined) {
  return (...payload: Payload extends undefined ? [] : [payload: Payload]): Action => ({ type, payload })
}
