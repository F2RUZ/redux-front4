const { createStore } = Redux;

// Boshlang'ich holat
const initialState = { count: 0 };

// Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

// Elementlar
const countEl = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

// Ekranni yangilash
function render() {
  countEl.textContent = store.getState().count;
}

// O'zgarishlarni kuzatish
store.subscribe(render);
render();

// Tugmalar hodisalari
plusBtn.addEventListener("click", () => store.dispatch({ type: "INCREMENT" }));
minusBtn.addEventListener("click", () => store.dispatch({ type: "DECREMENT" }));
