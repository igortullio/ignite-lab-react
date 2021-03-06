import classNames from 'classnames';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

interface SidebarProps {
  open: boolean;
}

export function Sidebar({ open }: SidebarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside className={classNames('absolute z-50 h-full w-full bg-gray-700 p-6 border-l border-gray-600 md:h-auto md:relative md:block md:w-[348px] md:max-w-[33vw]', { hidden: open })}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronograma de aulas</span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, title, slug, availableAt, lessonType }) => (
          <Lesson key={id} title={title} slug={slug} availableAt={new Date(availableAt)} lessonType={lessonType} />
        ))}
      </div>
    </aside>
  );
}
