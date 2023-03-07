import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import { PageListType, PAGE_LIST } from './constants';
import NotFoundPage from '@/pages/errorPage';

const pathRex = /(\[)(:)((\D)+)(\])/g;

const PathComponent = ({ replace }: PageListType) => {
  const componentPath = replace(pathRex, '$2$3');
  const filePath = replace(pathRex, '$1$3$5');
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
        <Route path="/*" element={<NotFoundPage type="notFound" />} />
        {PAGE_LIST.map(PathComponent)}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
