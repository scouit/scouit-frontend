import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Company } from '@/assets';
import { Text } from '../common/text';
import { CompanyType } from '@/apis/company';

interface PropsType {
  data: CompanyType;
}

export const JobPostingCard = ({ data }: PropsType) => (
  <Link to={`/company/job-posting/${data._id}`}>
    <_Wrapper>
      <img src={Company} alt="채용공고 이미지" />
      <Text size="title1">{data.workingPosition}</Text>
      <Text size="body1" color="gray500">
        비바리퍼블리카 (토스)
      </Text>
      <Text size="body1" color="gray500">
        상시채용
      </Text>
    </_Wrapper>
  </Link>
);

const _Wrapper = styled.article`
  width: 452px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.color.gray400};
`;
