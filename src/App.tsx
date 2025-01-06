import { Bounce, ToastContainer } from "react-toastify";
import { Homepage } from "./Pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Homepage />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
