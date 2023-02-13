import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  gap: string;
  margin?: string;
}

const curry = (direction: 'column' | 'row') => {
  return (align?: 'start' | 'center' | 'end') => {
    return (justify?: 'start' | 'center' | 'end') => {
      return ({ children, gap, margin }: PropsType) => (
        <_Wrapper
          gap={gap}
          margin={margin}
          align={align}
          justify={justify}
          direction={direction}
        >
          {children}
        </_Wrapper>
      );
    };
  };
};

export const ColumnGap = curry('column')()();

export const ColumnStartGap = curry('column')('start')();

export const ColumnCenterGap = curry('column')('center')();

export const ColumnEndGap = curry('column')('end')();

export const RowGap = curry('row')()();

export const RowStartGap = curry('row')()('start');

export const RowCenterGap = curry('row')()('center');

export const RowEndGap = curry('row')()('center');

const _Wrapper = styled.div<{
  gap: string;
  margin?: string;
  direction?: 'column' | 'row';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;
