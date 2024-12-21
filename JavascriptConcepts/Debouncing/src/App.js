import "./styles.css";
import DebounceUsingCustomHook from "./DebounceUsingCustomHook";
import DebounceInSameComponent from "./DebounceInSameComponent";

// Debouncing is a programming technique used to ensure that
//  a function is not called too frequently. In the context of
//   React.js, debouncing is particularly useful for optimizing
//   performance by limiting the rate at which a function can fire

// Debouncing ensures that a function is only executed after a
// certain period of inactivity.

// Common Use Cases in React:
// Search Inputs: Waiting for the user to stop typing before making an API call.
// Window Resizing: Adjusting layout or components only after resizing has stopped.
// Form Validation: Validating inputs after the user has paused typing.
// Infinite Scrolling: Loading more content when the user stops scrolling.
export default function App() {
  return (
    <div className="App">
      <DebounceUsingCustomHook />
      <DebounceInSameComponent />
    </div>
  );
}
