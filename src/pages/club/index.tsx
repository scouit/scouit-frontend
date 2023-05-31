import styled from 'styled-components';
import { cardDummy } from '@/_dummy/profile';
import { ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { Text } from '@/components/common/text';
import { Back, ClubBack } from '@/assets';
import { ColumnContent, Columns } from '@/layouts/Columns';
import { Header } from '@/components/header';
import { PageTitle } from '@/components/PageTitle';
import { Link } from 'react-router-dom';
import { clubCardList } from '@/_dummy/club';

const ClubPage = () => (
  <>
    <Header />
    <PageTitle src={ClubBack} title="연합동아리" margin="0 0 40px" isWhite />
    <Columns>
      <ColumnContent gap="24px" direction="row" wrap>
        {clubCardList.map(
          ({ title, url, condition, job, logo, name, date }) => (
            <Link to="yourid">
              <_ItemWrapper>
                <_Img src={url} />
                <_ItemContent>
                  <ColumnGap gap="10px">
                    <Text size="title2">{title}</Text>
                    <div>
                      <Text size="body1">{condition}</Text>
                      <Text size="body1">{job}</Text>
                    </div>
                  </ColumnGap>
                  <RowGap gap="15px">
                    <_Logo src={logo} />
                    <ColumnGap gap="3px">
                      <Text size="title2">{name}</Text>
                      <Text size="body3">{date}</Text>
                    </ColumnGap>
                  </RowGap>
                </_ItemContent>
              </_ItemWrapper>
            </Link>
          ),
        )}
      </ColumnContent>
    </Columns>
  </>
);

const _ItemWrapper = styled.div`
  width: 360px;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

const _ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 30px;
`;

const _Img = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 20px 20px 0 0;
`;

const _Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
`;

const _Title = styled(Text)`
  height: 46px;
`;

export default ClubPage;
