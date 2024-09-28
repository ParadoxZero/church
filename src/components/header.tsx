import { Card, Image, Menu, MenuProps, Button, Flex, Typography, Space, List } from 'antd';
import React from 'react';

import { ScreenSize, getCurrentScreenSize } from '../service/screen_size';

import avatar from '../assets/logo.png';

type MenuItem = Required<MenuProps>['items'][number];


export interface HeaderProps {
    news: string[];
    newsletter: string;
}

interface HeaderState {
    screen_size: ScreenSize;
}

export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        window.onresize = () => {
            this.setState({ screen_size: getCurrentScreenSize() });
            console.log(this.state.screen_size);
        }
        this.state = {
            screen_size: getCurrentScreenSize()
        }
    }

    render() {
        switch (this.state.screen_size) {
            case ScreenSize.SMALL:
                return this.render_small_screen();
            case ScreenSize.MEDIUM:
                return this.render_medium_screen();
            case ScreenSize.LARGE:
                return this.render_big_screen();
        }
    }

    render_big_screen() {
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
                label: (
                    <Button type='link' style={{ boxShadow: '1px 1px 5px grey' }} href={this.props.newsletter}> News Letter</Button>
                ),
                key: 'newsletter',
            },
            {
                label: '',
                key: '',
                icon: <Space />
            }
        ];

        return (
            <>
                <Menu mode="horizontal"
                    title='St. George Orthodox Church'
                    style={{ justifyContent: 'flex-end', boxShadow: '0 2px 2px -2px grey', position: 'fixed', top: 0, width: '100%', height: 50 }}
                    items={items}>
                </Menu>
                <Typography.Title level={2} style={{
                    position: 'fixed', padding: 0, margin: 0, left: '50%', transform: 'translateX(-50%)',
                    top: 0
                }}>St. George Orthodox Church</Typography.Title>
                {this.render_big_side_nav()}
                <Card style={{ position: 'fixed', padding: 0, boxShadow: '1px 1px 5px grey', borderRadius: '10px 10px 100px 100px', top: 0 }} size='small' hoverable>
                    <Image src={avatar} width={150} preview={false} />
                </Card>
            </>
        );

    }

    render_medium_screen() {
        const small_items: MenuItem[] = [
            {
                label: (
                    <Button type='link' style={{ boxShadow: '1px 1px 5px grey' }} href={this.props.newsletter}> News Letter</Button>
                ),
                key: 'newsletter',

            },
            {
                label: (
                    <a href="/">
                        Home
                    </a>
                ),
                key: 'home',
            },
            {
                label: (
                    <a href='/vicars'>
                        Vicars
                    </a>
                ),
                key: 'vicars',
            },
            {
                label: (
                    <a href='/management'>
                        Management
                    </a>
                ),
                key: 'management',
            },
            {
                label: (
                    <a href='/ministries'>
                        Ministries
                    </a>
                ),
                key: 'ministries',
            },
            {
                label: (
                    <a href='/gallery'>
                        Gallery
                    </a>
                ),
                key: 'gallery',
            },
        ];
        let render_avatar = false;
        if (window.location.pathname === '/') {
            console.log(window.location.pathname);
            render_avatar = true;
        }
        return (
            <>
                <Menu mode="horizontal"
                    title='St. George Orthodox Church'
                    style={{ justifyContent: 'flex-end', boxShadow: '0 2px 2px -2px grey', position: 'fixed', top: 0, width: '100%', height: 50 }}
                    items={small_items}>
                </Menu>
                {render_avatar &&
                    (
                        < Card style={{ position: 'fixed', padding: 0, boxShadow: '1px 1px 5px grey', borderRadius: '10px 10px 100px 100px', top: 0 }} size='small' hoverable>
                            <Image src={avatar} width={100} preview={false} />
                        </Card >
                    )
                }
            </>
        );
    }

    render_small_screen() {
        const small_items: MenuItem[] = [
            {
                label: (
                    <Button type='link' style={{ boxShadow: '1px 1px 5px grey' }} href={this.props.newsletter}> News Letter</Button>
                ),
                key: 'newsletter',

            },
            {
                label: (
                    <a href="/">
                        Home
                    </a>
                ),
                key: 'home',
            },
            {
                label: (
                    <a href='/vicars'>
                        Vicars
                    </a>
                ),
                key: 'vicars',
            },
            {
                label: (
                    <a href='/management'>
                        Management
                    </a>
                ),
                key: 'management',
            },
            {
                label: (
                    <a href='/ministries'>
                        Ministries
                    </a>
                ),
                key: 'ministries',
            },
            {
                label: (
                    <a href='/gallery'>
                        Gallery
                    </a>
                ),
                key: 'gallery',
            },
        ];
        return (
            <>
                <Menu mode="horizontal"
                    title='St. George Orthodox Church'
                    style={{ justifyContent: 'flex-end', boxShadow: '0 2px 2px -2px grey', position: 'fixed', top: 0, width: '100%', height: 50 }}
                    items={small_items}>
                </Menu>
            </>
        )
    }

    render_big_side_nav() {
        return (
            <div style={{ position: 'fixed', top: 80, right: 10, width: 200 }}>
                <Flex vertical gap={10}>
                    <Button shape='round' size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href="/vicars">Vicars</Button>
                    <Button shape='round' size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href="/management">Management</Button>
                    <Button shape='round' size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href="/ministries" >Ministries</Button>
                    <Button shape='round' size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href="/gallery" >Gallery</Button>
                    {this.render_news()}
                </Flex>
            </div>
        )
    }

    render_medium_side_nav() {
        return (
            <div style={{ position: 'fixed', top: 80, right: 10, width: 200 }}>
                <Flex vertical gap={10}>
                    <Button size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href='/vicars'>Vicars</Button>
                    <Button size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href="/management">Management</Button>
                    <Button size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href="/ministries" >Ministries</Button>
                    <Button size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href='/gallery' >Gallery</Button>
                    <Button size='large' style={{ boxShadow: '1px 1px 5px grey' }} block href='/news'>News</Button>
                </Flex>
            </div>
        )
    }
    render_news() {
        const news_items = this.props.news;
        if (news_items.length === 0) {
            return (<> </>);
        }
        return (

            <Card title="Latest" extra={<a href="#">More</a>} style={{ marginTop: 30, maxHeight: 300, overflowY: 'scroll', scrollBehavior: 'smooth', boxShadow: '1px 1px 5px grey' }} bordered>
                <Flex vertical gap={10}>
                    <List
                        dataSource={news_items}
                        renderItem={(item) =>
                        (
                            <List.Item>
                                <Typography.Text style={{ fontSize: 16, color: 'grey' }}>{item}</Typography.Text>
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
