import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ProfileCard } from '@/components/card/Profile';
import { SimplyModal } from '@/components/modal/SimplyProfile';
import { Columns } from '@/layouts/Columns';
import { useState } from 'react';
import { useDeveloper } from '@/hooks/useDeveloper';
import { Profile } from '@/assets';
import styled from 'styled-components';
import { ProfileLayout } from '@/layouts/ProfileLayout';

export const HomePage = () => {
  const { useGetDeveloperList } = useDeveloper();
  const { data } = useGetDeveloperList();
  return (
    <>
      <Header />
      <ProfileLayout>
        {Array(10)
          .fill(0)
          .map((cardData, idx) => (
            <ProfileCard key={idx} name={'name'} url={Profile} />
          ))}
      </ProfileLayout>
    </>
  );
};
