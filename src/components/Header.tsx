import { List, X } from 'phosphor-react';
import { Logo } from './Logo';

interface HeaderProps {
  openSidebar: boolean;
  onClickNav: () => void;
}

export function Header({ openSidebar, onClickNav }: HeaderProps) {
  return (
    <header className="w-full py-5 px-5 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />

      <nav className="flex items-center text-xl font-medium cursor-pointer md:hidden" onClick={onClickNav}>
        Aulas
        <div className="text-blue-500">{openSidebar ? <X size={32} /> : <List size={32} />}</div>
      </nav>
    </header>
  );
}
