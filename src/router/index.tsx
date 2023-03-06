import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';

// 파일경로랑 === path
// export default
const PAGE_LIST = ['Home', 'Club', 'MakesPeople', 'write/Active'];

export const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Link to="wqd" />
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
      <Route path="/403" element={<NotFoundPage type="forbidden" />} /> */}
        {PAGE_LIST.map((path) => {
          const [Component, setComponent] = useState(null);
          useEffect(() => {
            const importModule = async () => {
              const component = lazy(() => import(`../pages/${path}`));
              setComponent(component);
            };
            importModule();
          }, [path]);
          return Component && <Route path={path} element={<Component />} />;
        })}
      </Routes>
    </Suspense>
  </BrowserRouter>
);
