
import {
  BrowserRouter
} from "react-router-dom";

import CustomRoutes from "../Routes/CustomRoutes";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
