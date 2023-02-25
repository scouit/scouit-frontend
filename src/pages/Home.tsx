import { Header } from '@/components/header';
import { dummy, ProfileCard } from '@/components/card/Profile';
import { ProfileLayout } from '@/layouts/ProfileLayout';
import { ProfileData } from '@/components/card/ProfileData';

export const HomePage = () => (
  <>
    <Header />
    <ProfileLayout>
      {Array(10)
        .fill(0)
        .map(() => (
          <ProfileCard isProfile>
            <ProfileData
              url=""
              name={dummy.name}
              descript={dummy.descript}
              role={dummy.role}
            />
          </ProfileCard>
        ))}
    </ProfileLayout>
  </>
);
