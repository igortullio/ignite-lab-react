import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header openSidebar={openSidebar} onClickNav={() => setOpenSidebar(!openSidebar)} />

      <main className="flex flex-1 relative">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar open={openSidebar} />
      </main>
    </div>
  );
}
