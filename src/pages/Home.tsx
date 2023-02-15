import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ProfileCard } from '@/components/card/Profile';
import { SimplyModal } from '@/components/modal/SimplyProfile';
import { Columns } from '@/layouts/Columns';
import { useState } from 'react';
import { useDeveloper } from '@/hooks/useDeveloper';
import { Profile } from '@/assets';

export const HomePage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { useGetDeveloperList } = useDeveloper();
  const { data } = useGetDeveloperList();
  return (
    <div>
      <Header />
      <Columns>
        <div>
          {data &&
            data.map(({ name, id, profile, tagList }, idx) => (
              <ProfileCard
                key={idx}
                onClick={() => setOpenModal(true)}
                name={name}
                url={Profile}
              />
            ))}
        </div>
      </Columns>
      <Footer />
      {openModal && <SimplyModal closeModal={() => setOpenModal(false)} />}
    </div>
  );
};
