import React from 'react';
import FlightClaimForm from './pages/form/FlightClaimForm';

import { useRoutes } from "./routers/Routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  const routes = useRoutes();
  return (
    <div>
        <BrowserRouter>
          {routes}
        </BrowserRouter>
    </div>
  );
}

export default App;
