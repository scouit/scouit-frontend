import { useState } from 'react';
import { SelectBox } from '@/components/select/SelectBox';
import { RowGap } from '@/layouts/DirectionGap';
import { WriteProject } from './write/Project';
import { WriteStudy } from './write/Study';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { Header } from '@/components/header';

const kinda = ['모각코', '사이드 프로젝트', '스터디'];

export const LoungeWrite = () => {
  const [kind, setKind] = useState<string>('모각코');
  return (
    <>
      <Header />
      <Columns padding="140px 0">
        <ColumnContent width="35.25rem" gap="35px">
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
        </ColumnContent>
      </Columns>
    </>
  );
};
