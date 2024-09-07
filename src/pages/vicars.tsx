import { Collapse, Descriptions, Flex, Image } from "antd";
import { VicarDetails } from "../service/data_service";

export function Vicars(props: { vicars: VicarDetails[] }) {
    return (
        <>
            <Flex vertical align="center" gap={50} style={{ marginTop: 100 }}>
                <Collapse accordion defaultActiveKey={0}>
                    {props.vicars.map((vicar, index) =>
                    (
                        <Collapse.Panel header={vicar.name} key={index} style={{ maxWidth: 800 }}>
                            <Flex vertical align="center" justify="center" gap={50}>
                                <Image src={vicar.image} alt={vicar.name} width={150} />
                                <Descriptions bordered colon column={1}>
                                    <Descriptions.Item label="Name">{vicar.name}</Descriptions.Item>
                                    <Descriptions.Item label="Period">{vicar.from_year} - {vicar.to_year}</Descriptions.Item>
                                    <Descriptions.Item label="Profile">{vicar.profile}</Descriptions.Item>
                                </Descriptions>
                            </Flex>
                        </Collapse.Panel>
                    )
                    )}
                </Collapse>
            </Flex>
        </>
    )
}
