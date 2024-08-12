import React from 'react';

import bibleSrc from '../assets/bible1.jpg';
import bible2Src from '../assets/bible2.jpg';
import crossSrc from '../assets/cross.jpg';

import { Card, Carousel, Flex, Image, Typography } from 'antd';

export class Home extends React.Component {
    render() {
        return (
            <div style={{ width: '100vw' }}>
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
                    {carhousel_item(crossSrc, "'He who seeks shall find'", "John 15:2")}
                </div>
            </Carousel>

        )
    }

    render_intro_text() {
        const paras = [
            "St. George was a knight and born in Cappadocia. On a time he came in to the province of Libya, to a city which is said Silene. And by this city was a stagne or a pond like a sea, wherein was a dragon which envenomed all the country. And on a time the people were assembled for to slay him, and when they saw him they fled. And when he came nigh the city he venomed the people with his breath, and therefore the people of the city gave to him every day two sheep for to feed him, because he should do no harm to the people, and when the sheep failed there was taken a man and a sheep.",
            "Then was an ordinance made in the town that there should be taken the children and young people of them of the town by lot, and every each one as it fell, were he gentle or poor, should be delivered when the lot fell on him or her. So it happed that many of them of the town were then delivered, insomuch that the lot fell upon the king/'s daughter, whereof the king was sorry, and said unto the people: For the love of the gods take gold and silver and all that I have, and let me have my daughter.",
            "They said: How sir! ye have made and ordained the law, and our children be now dead, and ye would do the contrary. Your daughter shall be given, or else we shall burn you and your house.",
            "When the king saw he might no more do, he began to weep, and said to his daughter: Now shall I never see thine espousals.",
            "Then returned he to the people and demanded eight days/' respite, and they granted it to him. And when the eight days were passed they came to him and said: Thou seest that the city perisheth.",
            "Then did the king do array his daughter like as she should be wedded, and embraced her, kissed her and gave her his benediction, and after led her to the place where the dragon was.",
            "When she was there St. George passed by, and when he saw the lady he demanded the lady what she made there and she said: Go ye your way fair young man, that ye perish not also.",
            "Then said he: Tell to me what have ye and why weep ye, and doubt ye of nothing.",
            "When she saw that he would know, she said to him how she was delivered to the dragon. Then said St. George: Fair daughter, doubt ye no thing hereof for I shall help thee in the name of Jesu Christ.",
            "She said: For God/'s sake, good knight, go your way, and abide not with me, for ye may not deliver me.",
            "Thus as they spake together the dragon appeared and came running to them, and St. George was upon his horse, and drew out his sword and garnished him with the sign of the cross, and rode hardily against the dragon which came towards him, and smote him with his spear and hurt him sore and threw him to the ground. And after said to the maid: Deliver to me your girdle, and bind it about the neck of the dragon and be not afeard.",
            "When she had done so the dragon followed her as it had been a meek beast and debonair. Then she led him into the city, and the people fled by mountains and valleys, and said: Alas! alas! we shall be all dead.",
            "Then St. George said to them: Ne doubt ye no thing, without more, believe ye in God, Jesu Christ, and do ye to be baptized and I shall slay the dragon.",
            "Then the king was baptized and all his people, and St. George slew the dragon and smote off his head, and commanded that he should be thrown in the fields, and they took four carts with oxen that drew him out of the city.",
            "Then were there well fifteen thousand men baptized, without women and children, and the king did do make a church there of our Lady and of St. George, in the which yet sourdeth a fountain of living water, which healeth sick people that drink thereof. After this the king offered to St. George as much money as there might be numbered, but he refused all and commanded that it should be given to poor people for God/'s sake; and enjoined the king four things, that is, that he should have charge of the churches, and that he should honour the priests and hear their service diligently, and that he should have pity on the poor people, and after, kissed the king and departed."
        ];
        return (
            <Card style={{ width: '50%', left: '50%', transform: 'translate(-50%, 0)' }} bordered={false}>
                <Typography.Title level={2}>Welcome to St. George Orthodox Church, Dwarka, New Delhi</Typography.Title>
                <Typography.Paragraph>
                We are a Keralite Orthodox Christian Community gathering to worship the Lord Almighty. Please come and join us 
                and for our fellow ship. We are associated with the Malankara Orthodox Church, which is an ancient Church of India
                 and it traces its origin to as far back as A. D. 52 when St. Thomas one of the Disciples of Jesus Christ came 
                 to India and established Christianity in the South Western parts of the sub-continent.
                </Typography.Paragraph>
                <Typography.Title level={3}>The legend of St. George</Typography.Title>
                {paras.map((para, index) => (
                    <Typography.Paragraph key={index}>{para}</Typography.Paragraph>
                )) }
            </Card>
        )
    }
}