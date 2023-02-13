import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  gap: string;
  margin?: string;
}

type DirectionType = 'column' | 'row';
type PositionType = 'start' | 'center' | 'end';

const curry =
  (direction: DirectionType) =>
  (align?: PositionType) =>
  (justify?: PositionType) =>
  ({ children, gap, margin }: PropsType) =>
    (
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

const column = curry('column');
const row = curry('row');

export const ColumnGap = column()();

export const ColumnStartGap = column('start')();

export const ColumnCenterGap = column('center')();

export const ColumnEndGap = column('end')();

export const RowGap = row()();

export const RowStartGap = row()('start');

export const RowCenterGap = row()('center');

export const RowEndGap = row()('center');

const _Wrapper = styled.div<{
  gap: string;
  margin?: string;
  direction?: DirectionType;
  align?: PositionType;
  justify?: PositionType;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;
