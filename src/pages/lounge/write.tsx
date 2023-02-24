import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { TextListInput } from '@/components/common/input/TextList';
import { SelectBox } from '@/components/select/SelectBox';
import { TextArea } from '@/components/textarea';
import { RowGap } from '@/layouts/DirectionGap';
import { LoungeLayout } from '@/layouts/lounge/Write';
import { useState } from 'react';
import { WriteProject } from './write/Project';
import { WriteStudy } from './write/Study';

const kinda = ['모각코', '사이드 프로젝트', '스터디'];

export const LoungeWrite = () => {
  const [kind, setKind] = useState<string>('모각코');
  return (
    <LoungeLayout width="35.25rem">
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
    </LoungeLayout>
  );
};
