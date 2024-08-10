import { Affix, Card, Image, Menu, MenuProps, Button, Flex, Typography, Divider } from 'antd';
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
            items={items} />
           {this.render_side_nav()}
           </> 
        );
    }

    render_side_nav() {
        return (
            <div style={{position:'absolute', top:80, right:10, width: 200}}>
                <Flex vertical gap={10}>
                <Button shape='round' size='large' block>Vicars</Button>
                <Button shape='round' size='large' block>Management</Button>
                <Button shape='round' size='large' block>Ministries</Button>
                <Button shape='round' size='large' block>Gallery</Button>
                {this.render_news()}
                </Flex>
            </div>
        )
    }

    render_news() {
        const render_news_item = (info: string) => {
            return (
                <>
                <Typography.Text style={{fontSize: 16, color: 'grey'}}>{info}</Typography.Text>
                <Divider style={{padding:0, margin:0}} />
                </>
            )
        }
        const news_items = ['Sunday school to resume soon', 'New church building to be completed soon', 'New church website to be launched soon'];
        return (
            <Card title="Latest" extra={<a href="#">More</a>}>
                <Flex vertical gap={10}>
                {news_items.map((item) => render_news_item(item))}
                </Flex>
            </Card>
        )

    }
}

export default Header;