import styled from 'styled-components';

interface PropsType {
  to?: string;
  padding?: string;
  margin?: string;
  children: React.ReactNode;
}

export const Tag = ({ to, padding, margin, children }: PropsType) => {
  return (
    <_Wrapper margin={margin} padding={padding}>
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin?: string; padding?: string }>`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border-radius: 6.25rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray3};
  ${({ theme }) => theme.font.body4};
`;
