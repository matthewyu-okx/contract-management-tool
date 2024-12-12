import React, { FC } from 'react';
import { MenuProps, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
// import { useAccount } from 'wagmi';

type HeaderProps = {
  menuItems?: MenuProps['items']
}

const Header: FC<HeaderProps> = ({ }) => {
  // const { address } = useAccount()

  return (
    <header className="w-full flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center">
        {/* <GoogleLogin onSuccess={handleGoogleLoginSuccess} /> */}
      </div>
      <div className="flex items-center">
        <div className="mr-4 flex items-center">
          {/* {(address || user) && (
            <Badge count={cart.length} size='small'>
              <ShoppingCartOutlined
                className="text-2xl cursor-pointer"
                onClick={() => setShowCart(true)}
              />
            </Badge>
          )} */}
        </div>
      </div>
    </header>
  );
}

export default Header;
