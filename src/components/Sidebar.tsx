import { gql, useQuery } from '@apollo/client';
import { Lesson, LessonProps } from './Lesson';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      lessonType
      availableAt
    }
  }
`;

interface GetLessonQueryResponse {
  lessons: LessonProps[];
}

interface SidebarProps {
  open: boolean;
}

export function Sidebar({ open }: SidebarProps) {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className={`absolute z-50 h-full w-full ${!open && 'hidden'} bg-gray-700 p-6 border-l border-gray-600 md:h-auto md:relative md:block md:w-[348px] md:max-w-[33vw]`}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronograma de aulas</span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, title, slug, availableAt, lessonType }) => (
          <Lesson key={id} title={title} slug={slug} availableAt={new Date(availableAt)} lessonType={lessonType} />
        ))}
      </div>
    </aside>
  );
}
