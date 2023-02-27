import { ReactNode } from 'react';
import { Header } from '@/components/header';
import { _Columns, _ColumnContent } from '../Columns';

const homeLinkList = [
  { title: '홈', url: '/' },
  { title: '연합 동아리', url: '/club' },
  { title: '사이드 프로젝트', url: '/side-project' },
];

const adminLinkList = [
  { title: '홈', url: '/admin' },
  { title: '연합 동아리', url: '/admin/club' },
];

interface PropsType {
  children: ReactNode;
  type?: '유저' | '어드민';
  currentPage: '홈' | '사이드 프로젝트' | '연합 동아리';
}

export const HeaderWrapper = ({
  children,
  type = '유저',
  currentPage,
}: PropsType) => {
  return (
    <>
      <Header
        textList={type === '어드민' ? adminLinkList : homeLinkList}
        currentPage={currentPage}
        gap="78px"
      />
      <_Columns padding="123px 0">
        <_ColumnContent justify="center" direction="row" wrap>
          {children}
        </_ColumnContent>
      </_Columns>
    </>
  );
};
