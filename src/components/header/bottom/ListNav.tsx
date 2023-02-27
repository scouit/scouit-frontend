import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@/styles/media';
import { Text } from '@/components/common/text';

export interface BottomHeaderType {
  textList?: {
    title: string;
    url: string;
  }[];
  currentPage?: string;
  gap?: string;
  isMedia?: boolean;
}

export const BottomListNav = ({
  textList,
  gap,
  currentPage,
  isMedia,
}: BottomHeaderType) => (
  <_TapWrapper gap={gap} isMedia={isMedia}>
    {textList?.map((e) => (
      <Link to={e.url}>
        <Text
          size="heading3"
          color={e.title === currentPage ? 'primary' : 'gray10'}
        >
          {e.title}
        </Text>
      </Link>
    ))}
  </_TapWrapper>
);

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
  ${({ isMedia }) => isMedia && `display:none; ${media._1024('display:flex')}`}
`;
