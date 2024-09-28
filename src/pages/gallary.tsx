import { Flex, Image } from "antd";
import { getCurrentScreenSize, ScreenSize } from "../service/screen_size";

export function Gallary(props: { url_list: string[] }) {
    let screen_width = '50vw';
    if (getCurrentScreenSize() === ScreenSize.SMALL) {
        screen_width = '90vw';
    }
    return (
        <Flex style={{ width: '100vw' }} align="center" justify="center">
            <Flex style={{ width: screen_width, padding: 15 }} align="center" justify="stretch" wrap gap={15}>
                {props.url_list.map((url, index) => (
                    <Image key={index} src={url} width={350} />
                ))}
            </Flex>
        </Flex>
    );
}
