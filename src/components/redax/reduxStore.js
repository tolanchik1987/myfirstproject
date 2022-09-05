import {
   applyMiddleware,
   combineReducers,
   compose,
   legacy_createStore as createStore,
} from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   authUser: authReducer,
   app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
   reducers,
   composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;
export default store;
