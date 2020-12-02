import UserActionTypes from "./user.types";
import userReducer from "./user.reducer";

const initialState = {
    currentUser: null,
    error: null,
};

describe("userReducer", () => {
    it("should return initial state", () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    it("should set the current user to payload when Sign In Success", () => {
        const mockUser = { id: 1, displayName: "Dhruv" };
        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_IN_SUCCESS,
                payload: mockUser,
            }).currentUser
        ).toEqual(mockUser);
    });

    it("should set the current user to null when Sign Out Success", () => {
        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_OUT_SUCCESS,
            }).currentUser
        ).toBe(null);
    });

    it("should set errorMessage to payload on Sign in Failure, Sign Up Failure, Sign out Failure", () => {
        const mockError = {
            message: "NOT FOUND",
            code: 404,
        };

        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_IN_FAILURE,
                payload: mockError,
            }).error
        ).toBe(mockError);

        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_UP_FAILURE,
                payload: mockError,
            }).error
        ).toBe(mockError);

        expect(
            userReducer(initialState, {
                type: UserActionTypes.SIGN_OUT_FAILURE,
                payload: mockError,
            }).error
        ).toBe(mockError);
    });
});
