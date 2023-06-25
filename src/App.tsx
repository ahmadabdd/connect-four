// components
import Board from "./components/board/Board";
import NewGame from "./components/new-game/NewGame";

// router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Board />,
    },
    {
      path: "/new",
      element: <NewGame />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
