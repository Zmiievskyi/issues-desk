import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <BrowserRouter basename="issues-desk" >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);

reportWebVitals();
