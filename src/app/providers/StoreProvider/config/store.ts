import {
    configureStore, ReducersMapObject,
} from '@reduxjs/toolkit';
import { Reducer, CombinedState } from 'redux';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { uiReducer } from '@/features/UI';
import { rtkApi } from '@/shared/api/rtkApi';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?:StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>,
) {
    const rootReducers :ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg : ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({

        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

/*
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch */
