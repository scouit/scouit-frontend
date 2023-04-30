import { useState } from 'react';
import styled from 'styled-components';
import { RowGap } from '@/layouts/DirectionGap';
import WriteProject from './project';
import WriteStudy from './study';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { Header } from '@/components/header';
import { SelectFalse, SelectTrue } from '@/assets';
import { Text } from '@/components/common/text';
import { Selector } from '@/components/common/selector';
import { Button } from '@scouit/design-system';

const kinda = ['모각코', '사이드 프로젝트', '스터디'];

const LoungeWrite = () => {
  const [kind, setKind] = useState<string>('모각코');
  console.log(kind);
  return (
    <>
      <Header />
      <Columns padding="40px 0">
        <ColumnContent gap="40px">
          <Selector
            list={['모각코', '사이드 프로젝트', '스터디']}
            value={kind}
            onClick={setKind}
          />
          {
            {
              '모각코': <WriteStudy />,
              '사이드 프로젝트': <WriteProject />,
              '스터디': <WriteStudy />,
            }[kind]
          }
          <_ButtonWrapper>
            <_Button kind="fill" radius="circle" height="LargeButton">
              작성하기
            </_Button>
          </_ButtonWrapper>
        </ColumnContent>
      </Columns>
    </>
  );
};

const _ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const _Button = styled(Button)`
  width: fit-content;
  padding: 15px 85px;
`;
export default LoungeWrite;
