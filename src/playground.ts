import { createAction } from "./action/action-creator"
import { createEffect } from "./effects/effects-creator"
import { createReducer } from "./reducer/reducer-creator"
import { createStore } from "./store/store-creator"
import { props } from "./utils/props"

const store = createStore({
  reducer: createReducer(),
  effects: createEffect()
})

// playground

const loginAction = createAction('login', props<{ username: string }>())

const action = createAction('action')
action()

store.dispatch(loginAction({username: 'kaspar'}))


