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
        <div>
          {data &&
            data.map(({ name, id, profile, tagList }, idx) => (
              <ProfileCard
                key={idx}
                onClick={() => setOpenModal(true)}
                name={name}
              />
            ))}
        </div>
      </Columns12>
      <Footer />
      {openModal && <SimplyModal closeModal={() => setOpenModal(false)} />}
    </div>
  );
};
