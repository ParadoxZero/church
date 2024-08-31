import { Card, Flex, Typography } from 'antd';

export function MinistriesPage(props: { ministry_paras: string[] }) {
    return (
        <Flex justify='center' align='center' style={{ marginTop: 100 }}>
            <Card>
                <Typography.Title>Ministries</Typography.Title>
                {props.ministry_paras.map((para, index) => (
                    <Typography.Paragraph key={index}>{para}</Typography.Paragraph>
                ))}
            </Card>
        </Flex>
    )
}
