import { Back } from '@/assets';
import { ContentCard } from '@/components/card/detail/Content';
import { DetailContent } from '@/layouts/detail/Content';
import { DetailLayout } from '@/layouts/detail/DetailLayout';
import { developersDummy } from '@/_dummy/developers';

export const ResumeDetailPage = () => {
  const { title, role, date, works, image, url, content, skills } =
    developersDummy;
  return (
    <DetailLayout>
      <DetailContent title="업무 경험">
        <ContentCard title={title} role={role} date={date} works={works} />
      </DetailContent>
      <DetailContent title="프로젝트">
        <ContentCard
          title={title}
          direction="column"
          date={date}
          works={works}
          image={image}
          url={url}
          content={content}
          skills={skills}
        />
        <ContentCard
          title={title}
          direction="column"
          date={date}
          works={works}
          image={image}
          url={url}
          content={content}
          skills={skills}
        />
      </DetailContent>
    </DetailLayout>
  );
};
