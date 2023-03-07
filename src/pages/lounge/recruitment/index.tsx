import { useState } from 'react';
import styled from 'styled-components';
import { RowGap } from '@/layouts/DirectionGap';
import WriteProject from './project';
import WriteStudy from './study';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { Header } from '@/components/header';
import { SelectFalse, SelectTrue } from '@/assets';
import { Text } from '@/components/common/text';

const kinda = ['모각코', '사이드 프로젝트', '스터디'];

const LoungeWrite = () => {
  const [kind, setKind] = useState<string>('모각코');
  return (
    <>
      <Header />
      <Columns padding="140px 0">
        <ColumnContent width="35.25rem" gap="35px">
          <RowGap width="fit-content" gap="33px" margin="0 0 50px">
            {kinda.map((e, idx) => (
              <_Wrapper onClick={() => setKind(e)}>
                {kinda[idx] === kind ? <SelectTrue /> : <SelectFalse />}
                <Text size="body1" color="gray700">
                  {e}
                </Text>
              </_Wrapper>
            ))}
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

const _Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
`;

export default LoungeWrite;
