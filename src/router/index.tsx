import { MakesPeoplePage } from '@/pages/MakesPeople';
import { ResetPasswordPage } from '@/pages/auth/ResetPassword';
import { FrequentlyAskedQuestionsPage } from '@/pages/FrequentlyAskedQuestions';
import { HomePage } from '@/pages/Home';
import { JobPostingPage } from '@/pages/company/job-posting';
import { SignInPage } from '@/pages/auth/SignIn';
import { NotFound } from '@/pages/NotFound';
import { ResumeDetailPage } from '@/pages/developers/resume/Detail';
import { SignUpPage } from '@/pages/auth/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { JobPostingDetailPage } from '@/pages/company/job-posting/Detail';
import { routePath } from './Constants';
import { DevelopersPage } from '@/pages/developers';
import { MyPage } from '@/pages/MyPage';
import { EditProfile } from '@/pages/EditProfile';

const {
  home,
  login,
  signup,
  resetPassword,
  makesPeople,
  frequentlyAskedQuestions,
  developers,
  company,
  myPage,
  notFound,
  profile,
} = routePath;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<HomePage />} />
        <Route path={login} element={<SignInPage />} />
        <Route path={signup} element={<SignUpPage />} />
        <Route path={resetPassword} element={<ResetPasswordPage />} />
        <Route path={makesPeople} element={<MakesPeoplePage />} />
        <Route
          path={frequentlyAskedQuestions}
          element={<FrequentlyAskedQuestionsPage />}
        />
        <Route path={developers.index}>
          <Route index element={<DevelopersPage />} />
          <Route path={developers.resume.index}>
            <Route
              path={developers.resume.dynamic}
              element={<ResumeDetailPage />}
            />
          </Route>
        </Route>
        <Route path={company.index}>
          <Route path={company.jobPosting.index}>
            <Route index element={<JobPostingPage />} />
            <Route
              path={company.jobPosting.dynamic}
              element={<JobPostingDetailPage />}
            />
          </Route>
        </Route>
        <Route path={myPage} element={<MyPage />} />
        <Route path={profile.index}>
          <Route path={profile.edit} element={<EditProfile />} />
        </Route>
        <Route path={notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
