import { Layout } from 'antd';
import { FC, ReactNode } from 'react';

import Header from './Header';
import { Content } from 'antd/lib/layout/layout';
// import Sider from './Sider';


type BasicLayoutProps = {
  children: ReactNode;
};

const BasicLayout: FC<BasicLayoutProps> = ({ children }) => {

  return (
    <Layout className="h-screen w-full overflow-hidden flex">
      {/* {children} */}
      {/* <Sider /> */}
      <Header />
      <Content className="flex-1 flex flex-col">
        {/* <div className="w-full overflow-auto">{children}</div> */}
        {/* <div className="w-full overflow-auto">
          {accounts.length > 0 && currentSubject !== subject && <Alert message="You are not the owner of this account" banner />}
          {accounts.length > 0 ? children : null}
        </div> */}
        {children}
      </Content>
    </Layout>
  );
};

export default BasicLayout;
