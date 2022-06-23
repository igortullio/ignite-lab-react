import { LogoRocket } from './LogoRocket';

export function Footer() {
  return (
    <footer className="p-8 border-t border-gray-500 flex flex-col gap-8 items-center justify-between md:flex-row">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <LogoRocket />
        <span>Rocketseat - Todos os direitos reservados</span>
      </div>
      <span className="text-end">Políticas de privacidade</span>
    </footer>
  );
}
