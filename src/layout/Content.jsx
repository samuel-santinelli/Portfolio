import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
const Content = () => {
  const [routes, ] = useState([]);


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            exact={route.exact}
            render={(props) => <route.element {...props} />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Content;