import { Subject } from "rxjs"
import { Action } from "../action/action.model"
import { Effects } from "../effects/effects.model"
import { Reducer } from "../reducer/reducer.model"
import { Store } from "./store.model"

export const createStore = (
  { reducer, effects }:
  { reducer: Reducer, effects: Effects }
): Store => {
  const actionsSubject$ = new Subject<Action>()
  const actions$ = actionsSubject$.asObservable()
  
  actions$.pipe(reducer, effects).subscribe()

  const dispatch = (action: Action) => actionsSubject$.next(action)
  return { dispatch }
}