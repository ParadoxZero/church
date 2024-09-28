import { Flex } from "antd";
import { Contact as ContactElement } from "../components/contact";
import { ContactDetails } from "../service/data_service";

export function Contact(props: { contact: ContactDetails }) {
    return (
        <Flex vertical align="center" justify="center" style={{ width: "100vw", height: "50vh" }}>
            <ContactElement contact={props.contact} />
        </Flex>
    );
}
