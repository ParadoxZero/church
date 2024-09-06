import { Flex, Table, Typography } from "antd";
import { ManagementDetails } from "../service/data_service";

export function Management(props: { details: ManagementDetails, history: ManagementDetails[] }) {
    const columns = [
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Chairman',
            dataIndex: 'chairman',
            key: 'chairman',
        },
        {
            title: 'Vice Chairman',
            dataIndex: 'vice_chairman',
            key: 'vice_chairman',
        },
        {
            title: 'Secretary',
            dataIndex: 'seccretary',
            key: 'seccretary'
        },
        {
            title: 'Treasurer - Church',
            dataIndex: 'treasuerer_church',
            key: 'treasuerer_church'
        },
        {
            title: 'Treasurer - Society',
            dataIndex: 'treasuerer_society',
            key: 'treasuerer_society'
        }
    ];

    const current_management = props.details;
    current_management.year = "Present";
    return (
        <Flex vertical align="center" gap={50} style={{ marginTop: 100 }}>
            <div>
                <Typography.Title level={2}>Current Management</Typography.Title>
                <Table dataSource={[props.details]} columns={columns} pagination={false} style={{ width: '100%' }} size="large" bordered />
            </div>
            <div>
                <Typography.Title level={2}>History</Typography.Title>
                <Table dataSource={props.history} columns={columns} size="small" />
            </div>
        </Flex>
    )
}
