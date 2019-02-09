import { INCREMENT, DECREMENT, RESET } from "../actions/types";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  const payload = action.payload || 1;
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + payload
      };
    case DECREMENT:
      return {
        count: state.count - payload
      };
    case RESET:
      return {
        count: 0
      };
  }
};

export default reducer;
