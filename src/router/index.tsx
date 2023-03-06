import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { PAGE_LIST } from './constants';

export const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {PAGE_LIST.map((path) => {
          const [Component, setComponent] = useState(null);
          useEffect(() => {
            const importModule = async () => {
              const component = lazy(() => import(`../pages/${path}`));
              setComponent(component);
            };
            importModule();
          }, [path]);
          return Component && <Route path={path} element={<Component />} />;
        })}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
