import { MakesPeoplePage } from '@/pages/MakesPeople';
import { ResetPasswordPage } from '@/pages/auth/ResetPassword';
import { FrequentlyAskedQuestionsPage } from '@/pages/FrequentlyAskedQuestions';
import { HomePage } from '@/pages/Home';
import { JobPostingPage } from '@/pages/company/job-posting';
import { SignInPage } from '@/pages/auth/SignIn';
import { NotFoundPage } from '@/pages/NotFound';
import { ResumeDetailPage } from '@/pages/developers/resume/Detail';
import { SignUpPage } from '@/pages/auth/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { JobPostingDetailPage } from '@/pages/company/job-posting/Detail';
import { ErrorState, routePath } from './constants';
import { MyPage } from '@/pages/MyPage';
import { BasicPage } from '@/pages/write/Basic';
import { ProjectPage } from '@/pages/write/Project';
import { ExperiencePage } from '@/pages/write/Experiment';
import { EditProfileWrapper } from '@/layouts/Wrapper/EditProfile';

const {
  home,
  signin,
  signup,
  resetPassword,
  makesPeople,
  frequentlyAskedQuestions,
  developers,
  company,
  myPage,
  notFound,
  unAuth,
  forbid,
  profile,
} = routePath;

const { unfind404, unAuth401, forbid403 } = ErrorState;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<HomePage />} />
        <Route path={signin} element={<SignInPage />} />
        <Route path={signup} element={<SignUpPage />} />
        <Route path={resetPassword} element={<ResetPasswordPage />} />
        <Route path={makesPeople} element={<MakesPeoplePage />} />
        <Route
          path={frequentlyAskedQuestions}
          element={<FrequentlyAskedQuestionsPage />}
        />
        <Route path={developers.index}>
          {/* <Route index element={<DevelopersPage />} /> */}
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
          <Route
            path={profile.write.index}
            element={
              <EditProfileWrapper>
                <Routes>
                  <Route path={profile.write.basic} element={<BasicPage />} />
                  <Route
                    path={profile.write.project}
                    element={<ProjectPage />}
                  />
                  <Route
                    path={profile.write.work}
                    element={<ExperiencePage />}
                  />
                </Routes>
              </EditProfileWrapper>
            }
          ></Route>
        </Route>
        <Route path={notFound} element={<NotFoundPage Error={unfind404} />} />
        <Route path={unAuth} element={<NotFoundPage Error={unAuth401} />} />
        <Route path={forbid} element={<NotFoundPage Error={forbid403} />} />
      </Routes>
    </BrowserRouter>
  );
};
