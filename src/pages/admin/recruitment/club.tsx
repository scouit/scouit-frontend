import { Header } from '@/components/header';
import { ColumnContent, Columns } from '@/layouts/Columns';
import {
  DateInput,
  ImageInput,
  Input,
  TagInput,
  Textarea,
  TextList,
  Button,
  Text,
} from '@scouit/design-system';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Club = () => {
  return (
    <>
      <Header />
      <Columns>
        <ColumnContent direction="column" gap="40px">
          <ComponentLabel label="공고 제목">
            <Input
              label=""
              name=""
              placeholder=""
              value=""
              onChange={() => {}}
            />
          </ComponentLabel>
          <ComponentLabel label="태그">
            <TagInput placeholder="" onChange={() => {}} list={[]} />
          </ComponentLabel>
          <ComponentLabel label="메인 사진">
            <ImageInput
              label=""
              name=""
              imageList={[]}
              onChange={() => {}}
              imgToUrl={() => new Promise(() => {})}
              isLoading
            />
          </ComponentLabel>
          <ImageInput
            label=""
            name=""
            imageList={[]}
            onChange={() => {}}
            imgToUrl={() => new Promise(() => {})}
            isLoading
          />
          <ComponentLabel label="회사 사진 (최대 10개)">
            <Textarea
              placeholder=""
              name=""
              label=""
              value=""
              onChange={() => {}}
            />
          </ComponentLabel>
          <ComponentLabel label="업무 내용">
            <DateInput name="" value={undefined} onSubmitAtInput={() => {}} />
          </ComponentLabel>
          <ComponentLabel label="모집 날짜">
            <Input
              label=""
              name=""
              placeholder=""
              value=""
              onChange={() => {}}
            />
          </ComponentLabel>

          <ComponentLabel label="경력 요건">
            <Input
              label=""
              name=""
              placeholder=""
              value=""
              onChange={() => {}}
            />
          </ComponentLabel>
          <ComponentLabel label="모집 인원">
            <Textarea
              placeholder=""
              name=""
              label=""
              value=""
              onChange={() => {}}
            />
          </ComponentLabel>
          <ComponentLabel label="채용 조건">
            <Textarea
              placeholder=""
              name=""
              label=""
              value=""
              onChange={() => {}}
            />
          </ComponentLabel>
          <ComponentLabel label="계약 사항">
            <TextList
              textList={[]}
              name=""
              onChange={() => {}}
              placeholder=""
            />
          </ComponentLabel>
          <ComponentLabel label="추가 링크">
            <Button kind="fill">완료</Button>
          </ComponentLabel>
        </ColumnContent>
      </Columns>
    </>
  );
};

interface PropsType {
  label?: string;
  important?: boolean;
  children: ReactNode;
}

const ComponentLabel = ({ label, important, children }: PropsType) => {
  return (
    <_LabelWrapper>
      <Text size="heading2">
        {label}
        {important && <Text color="error900">*</Text>}
      </Text>
      <_LabelContent>{children}</_LabelContent>
    </_LabelWrapper>
  );
};

const _LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const _LabelContent = styled.div`
  width: 450px;
  display: flex;
  direction: row-reverse;
  > div {
    width: 100%;
  }
`;

export default Club;
