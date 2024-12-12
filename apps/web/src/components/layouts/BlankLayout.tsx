import { FC, ReactElement } from 'react';

type BlankLayoutProps = {
  children: ReactElement;
};

const BlankLayout: FC<BlankLayoutProps> = ({ children }) => (
  <div className="h-screen w-full">
    {children}
  </div>
);

export default BlankLayout;
