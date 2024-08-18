import React from 'react';

import bibleSrc from '../assets/bible1.jpg';
import bible2Src from '../assets/bible2.jpg';
import crossSrc from '../assets/cross.jpg';

import { Card, Carousel, Image, Typography } from 'antd';

export interface HomeProps {
    title: string;
    description: string[];
    story_title: string;
    story: string[];
}
export class Home extends React.Component<HomeProps> {
    render() {
        return (
            <div style={{  }}>
                {this.render_show_screen()}
                {this.render_intro_text()}
            </div>
        );
    }

    render_show_screen() {
        const carhousel_item = (src: string, caption: string, subcaption: string) => {
            return (
                <div>
                    <div style={{ height: '60vh', overflow: 'hidden' }}>
                        <Image src={src} preview={false} placeholder={true} width={'100%'} />
                        <div style={{
                            textAlign: 'center', position: 'absolute',
                            top: 0, width: '100vw', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex'
                        }}>
                            <div style={{ padding: '5px 30px', borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.459)', width: 'auto' }}>
                                <Typography.Title style={{ color: '#f0f0f0' }} level={1}>{caption}</Typography.Title>
                                <Typography.Title style={{ color: '#f0f0f0' }} color='grey' level={3} className="light grey-text text-lighten-3">{subcaption}</Typography.Title>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <Carousel arrows style={{ margin: 0 }} dotPosition='top'>
                <div>
                    {carhousel_item(bibleSrc, "St. George Orthodox Church", "Dwarka, New Delhi")}
                </div>
                <div>
                    {carhousel_item(bible2Src, "'He who seeks shall find'", "John 15:2")}
                </div>
                <div>
                    {carhousel_item(crossSrc, "'God is love.'", "John 4:8")}
                </div>
            </Carousel>

        )
    }

    render_intro_text() {
        return (
            <Card style={{ width: '50%', left: '50%', transform: 'translate(-50%, 0)' }} bordered={false}>
                <Typography.Title level={2}>{this.props.title}</Typography.Title>
                {this.props.description.map((para, index) => (
                    <Typography.Paragraph key={index}>{para}</Typography.Paragraph>
                ))}
                <Typography.Title level={3}>{this.props.story_title}</Typography.Title>
                {this.props.story.map((para, index) => (
                    <Typography.Paragraph key={index}>{para}</Typography.Paragraph>
                ))}
            </Card>
        )
    }
}