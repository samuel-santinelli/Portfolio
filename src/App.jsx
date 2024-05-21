import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import DefaultLayout from './layout/DefaultLayout';
import ParticleComponent from './component/particles/Particles';

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
    <ParticleComponent/>
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
