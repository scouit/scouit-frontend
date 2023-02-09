import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ProfileCard } from '@/components/card/Profile';
import { SimplyModal } from '@/components/modal/SimplyProfile';
import { Columns12 } from '@/layouts/columns/12';
import { useState } from 'react';
import styled from 'styled-components';
import { useDeveloper } from '@/hooks/useDeveloper';

export const HomePage = () => {
  const [openModal, setOpenModal] = useState<boolean>(true);
  const { useGetDeveloperList } = useDeveloper();
  const { data } = useGetDeveloperList();
  return (
    <div>
      <Header />
      <Columns12>
        <_ProfileCardWrapper>
          {data &&
            data.map(({ name, id, profile, tagList }, idx) => (
              <ProfileCard
                key={idx}
                onClick={() => setOpenModal(true)}
                name={name}
              />
            ))}
        </_ProfileCardWrapper>
      </Columns12>
      <Footer />
      {openModal && <SimplyModal closeModal={() => setOpenModal(false)} />}
    </div>
  );
};

const _ProfileCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin: 100px 0;
`;
