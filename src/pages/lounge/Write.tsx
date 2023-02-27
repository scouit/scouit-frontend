import { useState } from 'react';
import { SelectBox } from '@/components/select/SelectBox';
import { RowGap } from '@/layouts/DirectionGap';
import { WriteProject } from './write/Project';
import { WriteStudy } from './write/Study';
import { _Columns, _ColumnContent } from '@/layouts/Columns';
import { Header } from '@/components/header';

const kinda = ['모각코', '사이드 프로젝트', '스터디'];

export const LoungeWrite = () => {
  const [kind, setKind] = useState<string>('모각코');
  return (
    <>
      <Header />
      <_Columns padding="140px 0">
        <_ColumnContent width="35.25rem" gap="35px">
          <RowGap width="fit-content" gap="33px" margin="0 0 50px">
            <SelectBox
              lists={kinda}
              value={kind}
              onClick={(value) => setKind(value)}
            />
          </RowGap>
          {
            {
              '모각코': <WriteStudy />,
              '사이드 프로젝트': <WriteProject />,
              '스터디': <WriteStudy />,
            }[kind]
          }
        </_ColumnContent>
      </_Columns>
    </>
  );
};
