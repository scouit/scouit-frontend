import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { PAGE_LIST } from './constants';

const pathRex = /(\[)(:)((\D)+)(\])/g;

export const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {PAGE_LIST.map((path) => {
          const componentPath = path.replace(pathRex, '$2$3');
          const filePath = path.replace(pathRex, '$1$3$5');
          const [Component, setComponent] = useState(null);
          useEffect(() => {
            const importModule = async () => {
              const component = lazy(() => import(`../pages/${filePath}`));
              setComponent(component);
            };
            importModule();
          }, [filePath]);

          return (
            Component && <Route path={componentPath} element={<Component />} />
          );
        })}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
