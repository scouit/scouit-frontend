import { Header } from '@/components/header';

const developersList = [
  {
    field: 'FrontEnd',
    name: '조상현',
  },
  {
    field: 'Android',
    name: '조상현',
  },
  {
    field: 'iOS',
    name: '조상현',
  },
  {
    field: 'BackEnd',
    name: '조상현',
  },
  {
    field: 'desktop app',
    name: '조상현',
  },
  {
    field: '디자인',
    name: '조상현',
  },
  {
    field: '기획',
    name: '조상현',
  },
];

export const MakesPeoplePage = () => {
  return (
    <div>
      <Header />
      {developersList.map((developer) => {
        return (
          <div>
            <div>{developer.field}</div>
            <div>{developer.name}</div>
          </div>
        );
      })}
    </div>
  );
};
