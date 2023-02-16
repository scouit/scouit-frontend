import styled from 'styled-components';
import { Company } from '@/assets';
import { Text } from '../common/text';
import { Link } from 'react-router-dom';
import { CompanyType } from '@/apis/company';

interface PropsType {
  data: CompanyType;
}

export const JobPostingCard = ({ data }: PropsType) => {
  return (
    <Link to={`/company/job-posting/${data._id}`}>
      <_Wrapper>
        <img src={Company} />
        <Text size="title1">{data.workingPosition}</Text>
        <Text size="body1" color="gray5">
          비바리퍼블리카 (토스)
        </Text>
        <Text size="body1" color="gray5">
          상시채용
        </Text>
      </_Wrapper>
    </Link>
  );
};

const _Wrapper = styled.article`
  width: 452px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.color.gray4};
`;
