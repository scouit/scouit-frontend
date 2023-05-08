import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { PAGE_LIST } from './constants';
import NotFoundPage from '@/pages/errorPage';

const pathRegex = /(\[)(:)((\D)+)(\])/g;

const PathComponent = (path: (typeof PAGE_LIST)[number]) => {
  const componentPath = path.replace(pathRegex, '$2$3');
  const filePath = path.replace(pathRegex, '$1$3$5').slice(1);
  const [Component, setComponent] = useState(null);

  console.log(filePath);
  useEffect(() => {
    const importModule = async () => {
      const component = lazy(() => import(`../pages/${filePath || 'index'}`));
      setComponent(component);
    };
    importModule();
  }, [filePath]);
  return Component && <Route path={componentPath} element={<Component />} />;
};

export const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {PAGE_LIST.map(PathComponent)}
        <Route path="/*" element={<NotFoundPage type="notFound" />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
