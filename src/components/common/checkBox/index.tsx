import styled from 'styled-components';
import { CheckBoxUnSelected } from '@/assets';
import { CheckBoxClicked } from '@/assets/svgs/CheckboxClicked';
import { Text } from '../text';
import { useInversion } from '@/hooks/useInversion';

interface PropsType {
  disable?: boolean;
  margin?: string;
  padding?: string;
  gap?: string;
  children?: React.ReactNode;
}

export const CheckBox = ({
  disable = false,
  margin,
  padding,
  gap,
  children,
}: PropsType) => {
  const { state: check, invertState } = useInversion();
  return (
    <_Wrapper onClick={invertState} margin={margin} padding={padding} gap={gap}>
      {check ? (
        <CheckBoxClicked disable={disable} />
      ) : (
        <CheckBoxUnSelected disable={disable} />
      )}
      <Text size="body1" color="gray900">
        {children}
      </Text>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<PropsType>`
  cursor: pointer;
  width: auto;
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;
