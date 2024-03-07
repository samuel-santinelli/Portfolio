import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import '@mantine/core/styles.css';
import DefaultLayout from './layout/DefaultLayout';

function App() {

  const routes = [
    {
      path: "*",
      element: <DefaultLayout />,
      name: "Home",
    },

  ];

  return (
    <BrowserRouter>
    <Routes>
      {routes?.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          element={route.element}
          caseSensitive
        />
      ))}
    </Routes>
  </BrowserRouter>
  )
}

export default App
