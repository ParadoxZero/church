import { Descriptions, Flex } from "antd";
import { ContactDetails } from "../service/data_service";


export function Contact(props: { contact: ContactDetails }) {
    return (
        <Flex vertical align="center">
            <Descriptions bordered colon column={1} title="Connect with Us">
                <Descriptions.Item label="Address">{props.contact.address.join(', ')}</Descriptions.Item>
                <Descriptions.Item label="Chairman">{props.contact.chairman}</Descriptions.Item>
                <Descriptions.Item label="Chairman's phone">{props.contact.phone}</Descriptions.Item>
                <Descriptions.Item label="Email">{props.contact.email}</Descriptions.Item>
            </Descriptions>
        </Flex>
    );
}
