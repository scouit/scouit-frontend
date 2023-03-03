import styled from 'styled-components';

export const _Columns = styled.div<{ padding?: string }>`
  width: 100%;
  padding: ${({ padding }) => padding || '0 1rem'};
`;

export const _ColumnContent = styled.div<{
  width?: string;
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end' | 'space-between';
  direction?: 'row' | 'column';
  wrap?: boolean;
  gap?: string;
}>`
  max-width: ${({ width }) => width || '72rem'};
  margin: 0 auto;
  display: ${({ justify, wrap, gap }) => (justify || wrap || gap) && 'flex'};
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
  gap: ${({ gap }) => gap || '1.5rem'};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;
