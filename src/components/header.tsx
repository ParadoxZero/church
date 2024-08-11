import { Affix, Card, Image, Menu, MenuProps, Button, Flex, Typography, Divider, Space, List } from 'antd';
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
    },
    {
        label: '',
        key: '',
        icon:<Space/>
    }
];
export class Header extends React.Component {
    render() {
        return (
           <>
            <Menu mode="horizontal" 
            style={{justifyContent: 'flex-end', boxShadow:'0 2px 2px -2px grey', position:'fixed', top:0, width:'100%', height:50}}
            items={items} />
           {this.render_side_nav()}
           <Card style={{position:'fixed', padding:0, boxShadow:'1px 1px 5px grey', borderRadius:'10px 10px 100px 100px', top:0 }} size='small' hoverable>
                <Image src={avatar} width={150} preview={false}  />
            </Card>
           </> 
        );
    }

    render_side_nav() {
        return (
            <div style={{position:'fixed', top:80, right:30, width: 200}}>
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
        const render_news_item = (info: any, index:number) => {
            return (
                <div key={index}>
                    <Divider style={{ margin:5}} />
                </div>
            )
        }
        const news_items = ['Sunday school to resume soon', 'New church building to be completed soon', 'New church website to be launched soon'];
        return (
            <Card title="Latest" extra={<a href="#">More</a>} style={{marginTop:30}}>
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