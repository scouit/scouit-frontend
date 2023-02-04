import styled from 'styled-components';
import { Company } from '@/assets';
import { Text } from '../text';
import { Link } from 'react-router-dom';

export const JobPostingCard = () => {
  return (
    <Link to="/company/job-posting/ec561255-9600-4524-f657-bfc66c73f4b3">
      <_Wrapper>
        <img src={Company} />
        <Text size="title1">FrontEnd Developer</Text>
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
