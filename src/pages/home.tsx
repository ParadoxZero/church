import React from 'react';

import bibleSrc from '../assets/bible1.jpg';
import bible2Src from '../assets/bible2.jpg';
import crossSrc from '../assets/cross.jpg';

import { Card, Carousel, Flex, Image, Typography } from 'antd';
import { getCurrentScreenSize, ScreenSize } from '../service/screen_size';
import { Contact } from '../components/contact';
import { ContactDetails } from '../service/data_service';

export interface HomeProps {
    title: string;
    description: string[];
    story_title: string;
    story: string[];
    service_info: string;
    contact_details: ContactDetails;
}
export class Home extends React.Component<HomeProps> {
    render() {
        return (
            <div style={{}}>
                {this.render_show_screen()}
                {this.render_intro_text()}
            </div>
        );
    }

    render_show_screen() {
        const carhousel_item = (src: string, caption: string, subcaption: string) => {
            let header_level: 1 | 2 | 3 | 4 | undefined = 1;
            let subtitle_level: 1 | 2 | 3 | 4 | undefined = 3;
            switch (getCurrentScreenSize()) {
                case ScreenSize.SMALL:
                    header_level = 2;
                    subtitle_level = 4;
                    break;
                case ScreenSize.MEDIUM:
                    header_level = 2;
                    subtitle_level = 4;
                    break;
            }
            return (
                <div>
                    <div style={{ maxHeight: '60vh', overflow: 'hidden' }}>
                        <Image src={src} style={{ padding: 0, margin: 0 }}
                            preview={false} placeholder={true} width={'100%'} />
                        <div style={{
                            textAlign: 'center', position: 'absolute',
                            top: 0, width: '100vw', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex'
                        }}>
                            <div style={{ padding: '5px 30px', borderRadius: 20, backgroundColor: 'rgba(0, 0, 0, 0.459)', width: 'auto' }}>
                                <Typography.Title style={{ color: '#f0f0f0' }} level={header_level}>{caption}</Typography.Title>
                                <Typography.Title style={{ color: '#f0f0f0' }} color='grey' level={subtitle_level} className="light grey-text text-lighten-3">{subcaption}</Typography.Title>
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
        let width = '100%';
        if (getCurrentScreenSize() === ScreenSize.LARGE) {
            width = '50%';
        }
        return (
            <Flex vertical style={{ width: '100%', padding: 10 }} gap={10} align='center' justify='center'>
                <Card style={{ width: width }} bordered={false}>
                    <Typography.Title level={2}>{this.props.title}</Typography.Title>
                    {this.props.description.map((para, index) => (
                        <Typography.Paragraph key={index}>{para}</Typography.Paragraph>
                    ))}
                    <Image src={this.props.service_info} width={"100%"}
                        preview={false}
                        style={{ padding: 0, margin: 0, marginTop: 10, marginBottom: 10 }} />
                    <Typography.Title level={3}>{this.props.story_title}</Typography.Title>
                    {this.props.story.map((para, index) => (
                        <Typography.Paragraph key={index}>{para}</Typography.Paragraph>
                    ))}
                    <br id='contact' />
                    <Contact contact={this.props.contact_details} />
                </Card>
            </Flex>
        )
    }
}
