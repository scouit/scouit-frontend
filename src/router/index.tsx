import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MakesPeoplePage } from '@/pages/MakesPeople';
import { ResetPasswordPage } from '@/pages/auth/ResetPassword';
import { FrequentlyAskedQuestionsPage } from '@/pages/FrequentlyAskedQuestions';
import { HomePage } from '@/pages/Home';
import { JobPostingPage } from '@/pages/company/job-posting';
import { SignInPage } from '@/pages/auth/SignIn';
import { NotFoundPage } from '@/pages/NotFound';
import { ResumeDetailPage } from '@/pages/developers/resume/Detail';
import { SignUpPage } from '@/pages/auth/SignUp';
import { JobPostingDetailPage } from '@/pages/company/job-posting/Detail';
import { MyPage } from '@/pages/MyPage';
import { BasicPage } from '@/pages/write/Basic';
import { ProjectPage } from '@/pages/write/Project';
import { ExperiencePage } from '@/pages/write/Experiment';
import { EditProfileWrapper } from '@/layouts/wrapper/EditProfile';
import { IntroducePage } from '@/pages/write/introduce';
import { TechPage } from '@/pages/write/Tech';
import { ActivePage } from '@/pages/write/Active';
import { EducatePage } from '@/pages/write/Educate';
import { ClubPage } from '@/pages/Club';
import { SideProjectPage } from '@/pages/Side';
import { AdminHomePage } from '@/pages/admin/Home';
import { AdminClubPage } from '@/pages/admin/Club';
import { LoungeHomePage } from '@/pages/lounge/Home';
import { LoungeWrite } from '@/pages/lounge/Write';
import { LoungeDetail } from '@/pages/lounge/Detail';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/club" element={<ClubPage />} />
      <Route path="/side-project" element={<SideProjectPage />} />
      <Route path="/admin" element={<AdminHomePage />} />
      <Route path="/admin/club" element={<AdminClubPage />} />
      <Route path="/lounge">
        <Route index element={<LoungeHomePage />} />
        <Route path=":id" element={<LoungeDetail />} />
        <Route path="recruitment" element={<LoungeWrite />} />
      </Route>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/makes-people" element={<MakesPeoplePage />} />
      <Route
        path="/frequently-asked-questions"
        element={<FrequentlyAskedQuestionsPage />}
      />
      <Route path="/developers">
        {/* <Route index element={<DevelopersPage />} /> */}
        <Route path="resume/*">
          <Route path=":id" element={<ResumeDetailPage />} />
        </Route>
      </Route>
      <Route path="/company">
        <Route path="job-posting">
          <Route index element={<JobPostingPage />} />
          <Route path=":id" element={<JobPostingDetailPage />} />
        </Route>
      </Route>
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/profile">
        <Route
          path="write/*"
          element={
            <EditProfileWrapper>
              <Routes>
                <Route path="basic" element={<BasicPage />} />
                <Route path="introduce" element={<IntroducePage />} />
                <Route path="project" element={<ProjectPage />} />
                <Route path="work-experience" element={<ExperiencePage />} />
                <Route path="technology" element={<TechPage />} />
                <Route path="activity" element={<ActivePage />} />
                <Route path="education" element={<EducatePage />} />
              </Routes>
            </EditProfileWrapper>
          }
        />
      </Route>
      <Route path="/*" element={<NotFoundPage type="notFound" />} />
      <Route path="/403" element={<NotFoundPage type="forbidden" />} />
    </Routes>
  </BrowserRouter>
);
