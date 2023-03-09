import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { PageListType, PAGE_LIST } from './constants';
import NotFoundPage from '@/pages/errorPage';

const pathRegex = /(\[)(:)((\D)+)(\])/g;

const PathComponent = (path: (typeof PAGE_LIST)[number]) => {
  const componentPath = path.replace(pathRegex, '$2$3');
  console.log(componentPath);
  const filePath = path.replace(pathRegex, '$1$3$5');
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const importModule = async () => {
      const component = lazy(() => import(`../pages/${filePath}`));
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
