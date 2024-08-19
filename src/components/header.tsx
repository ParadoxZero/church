import { Affix, Card, Image, Menu, MenuProps, Button, Flex, Typography, Divider, Space, List } from 'antd';
import React from 'react';

import avatar from '../assets/logo.png';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: (
            <a href="/">
              Home
            </a>
          ),
        key: 'home',
    },
    {
        label: 'Newsletter',
        key: 'newsletter',
    },
    {
        label: 'Contact',
        key: 'contact',
    },
    {
        label: '',
        key: '',
        icon:<Space/>
    }
];

export interface HeaderProps {
    news: string[];
}

export class Header extends React.Component<HeaderProps> {
    render() {
        return (
           <>
            <Menu mode="horizontal"
            title='St. George Orthodox Church' 
            style={{justifyContent: 'flex-end', boxShadow:'0 2px 2px -2px grey', position:'fixed', top:0, width:'100%', height:50} }
            items={items}>
            </Menu>
            <Typography.Title level={2} style={{position: 'fixed', padding:0, margin:0, left:'50%', transform:'translateX(-50%)',
                            top: 0}}>St. George Orthodox Church</Typography.Title>
           {this.render_side_nav()}
           <Card style={{position:'fixed', padding:0, boxShadow:'1px 1px 5px grey', borderRadius:'10px 10px 100px 100px', top:0 }} size='small' hoverable>
                <Image src={avatar} width={150} preview={false}  />
            </Card>
           </> 
        );
    }

    render_side_nav() {
        return (
            <div style={{position:'fixed', top:80, right:10, width: 250}}>
                <Flex vertical gap={10}>
                <Button shape='round' size='large' style={{boxShadow:'1px 1px 5px grey'}} block>Vicars</Button>
                <Button shape='round' size='large' style={{boxShadow:'1px 1px 5px grey'}} block href="/management">Management</Button>
                <Button shape='round' size='large' style={{boxShadow:'1px 1px 5px grey'}} block>Ministries</Button>
                <Button shape='round' size='large' style={{boxShadow:'1px 1px 5px grey'}} block>Gallery</Button>
                {this.render_news()}
                </Flex>
            </div>
        )
    }

    render_news() {
        const news_items = this.props.news;
        return (
            <Card title="Latest" extra={<a href="#">More</a>} style={{marginTop:30, maxHeight:300, overflowY:'scroll', scrollBehavior:'smooth',boxShadow:'1px 1px 5px grey'}} bordered>
                <Flex vertical gap={10}>
                    <List
                    dataSource={news_items}
                    renderItem={(item) => 
                       (
                        <List.Item>
                        <Typography.Text style={{fontSize: 16, color: 'grey'}}>{item}</Typography.Text>
                        </List.Item>
                       )
                    }
                    />
                  
                </Flex>
            </Card>
        )

    }
}

export default Header;