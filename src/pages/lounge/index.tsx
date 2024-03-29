import styled from 'styled-components';
import { ColumnGap } from '@/layouts/DirectionGap';
import { cardLoungeDummy } from '@/_dummy/lounge';
import { Text } from '@/components/common/text';
import { ColumnContent, Columns } from '@/layouts/Columns';
import { Selector } from '@/components/common/selector';
import { Header } from '@/components/header';
import { PageTitle } from '@/components/PageTitle';
import { BookMark, LoungeBack } from '@/assets';
import { Link } from 'react-router-dom';
import { Write } from '@/assets/svgs/Write';

const LoungeHomePage = () => (
  <>
    <Header />
    <PageTitle src={LoungeBack} title="라운지" />{' '}
    <Link to="/lounge/recruitment">
      <_ToWrite>
        <Write />
      </_ToWrite>
    </Link>
    <Columns padding="0 1rem 1rem 1rem">
      <_SelectorWrapper>
        <Selector
          list={['전체', '프로젝트', '스터디', '모각코']}
          value="전체"
          onClick={() => {}}
        />
      </_SelectorWrapper>

      <ColumnContent wrap direction="row" justify="center">
        {cardLoungeDummy.map(
          ({ title, content, peoples, kinda, url, location }) => (
            <Link to="yourid">
              <_ItemWrapper>
                <_Img src={url} />
                <ColumnGap gap="16px" margin="8px 0" padding="0 18px">
                  <Text size="title1" color="gray900">
                    {title}
                  </Text>
                  {kinda && (
                    <Text size="body1" color="gray900">
                      {kinda}
                    </Text>
                  )}
                  {location && (
                    <Text size="body1" color="gray900">
                      {location}
                    </Text>
                  )}
                  {content && (
                    <_ItemContentText size="body2" color="gray900">
                      {content}
                    </_ItemContentText>
                  )}
                  {peoples && (
                    <Text size="body1" color="gray900">
                      {peoples}
                    </Text>
                  )}
                </ColumnGap>
              </_ItemWrapper>
            </Link>
          ),
        )}
      </ColumnContent>
    </Columns>
  </>
);

const _Img = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

const _ItemWrapper = styled.div`
  height: 365px;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  width: 360px;
`;

const _ItemContentText = styled(Text)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const _SelectorWrapper = styled(ColumnContent)`
  margin-bottom: 35px;
  margin-top: 40px;
`;

const _ToWrite = styled.div`
  cursor: pointer;
  position: sticky;
  overflow-y: auto;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: ${({ theme }) => theme.color.gray100};
  margin-left: 90%;
  top: 330px;
  :hover {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;

export default LoungeHomePage;
