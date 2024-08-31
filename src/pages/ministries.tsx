import { Card, Flex, Typography } from 'antd';

export function MinistriesPage() {
    return (
        <Flex justify='center' align='center' style={{ marginTop: 100 }}>
            <Card>
                <Typography.Title>Ministries</Typography.Title>
                <Typography.Paragraph>
                    The parish has 70 subscribing members, and a total strength of
                    200-250 people attend the Holy Qurbana on an average basis.
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Holy Qurbana is celebrated on all Sundays and other Feast days.
                </Typography.Paragraph>
            </Card>
        </Flex>
    )
}
