import { Affix, Card, Image, Menu, MenuProps } from 'antd';
import React from 'react';

import avatar from '../assets/logo.png';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'Newsletter',
        key: 'newsletter',
    },
    {
        label: 'Contact',
        key: 'contact',
    }
];
export class Header extends React.Component {
    render() {
        return (
           <>
            <Card style={{position:'absolute', padding:0, boxShadow:'1px 1px 5px grey' }} size='small' hoverable>
                <Image src={avatar} width={150} preview={false}  />
            </Card>
            <Menu mode="horizontal" 
            style={{justifyContent: 'flex-end', boxShadow:'0 2px 2px -2px grey',}}
            items={items} />;
           </> 
        );
    }
}

export default Header;