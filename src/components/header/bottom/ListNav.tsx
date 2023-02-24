import { media } from '@/styles/media';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BottomHeaderType } from '..';

export const BottomListNav = ({
  textList,
  gap,
  currentPage,
  isMedia,
}: BottomHeaderType) => {
  return (
    <_TapWrapper gap={gap} isMedia={isMedia}>
      {textList?.map((e) => (
        <Link to={e.url}>
          <_TabText selected={e.title === currentPage}>{e.title}</_TabText>
        </Link>
      ))}
    </_TapWrapper>
  );
};

const _TapWrapper = styled.div<{ gap: string; isMedia: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 57px;
  gap: ${({ gap }) => gap};
  border-top: 1px solid ${({ theme }) => theme.color.gray4};
  background-color: ${({ theme }) => theme.color.gray1};
  color: ${({ theme }) => theme.color.primary};
  ${({ isMedia }) => isMedia && `display:none; ${media._1024(`display:flex`)}`}
`;

const _TabText = styled.div<{ selected: boolean }>`
  width: fit-content;
  border-radius: 0.5rem;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? 'blue' : 'black')};
  ${({ theme }) => theme.font.heading3};
`;
