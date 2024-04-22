import customerListAtom from "@/data/customers";
import { useAtom } from "jotai";
import { Card, Col, Space } from "antd";

import CustomerRenderer from "./CustomerRenderer";

const QueueRenderer = () => {

    const [customers] = useAtom(customerListAtom);

    return (
        <>
            <Col className="gutter-row border-r-4 border-gray-500" span={4}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card hoverable={true} className="border-4 border-black h-24 w-36 justify-center align-center mx-auto"><p className="text-center font-bold">Cashier #1</p></Card>
                    {customers[0] && <CustomerRenderer customersArray={customers[0]}/>}
                </Space>
            </Col>

            <Col className="gutter-row border-r-4 border-gray-500" span={4}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card hoverable={true} className="border-4 border-black h-24 w-36 justify-center align-center mx-auto"><p className="text-center font-bold">Cashier #2</p></Card>
                    {customers[1] && <CustomerRenderer customersArray={customers[1]}/>}
                </Space>
            </Col>

            <Col className="gutter-row" span={4}>
                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                    <Card hoverable={true} className="border-4 border-black h-24 w-36 justify-center align-center mx-auto"><p className="text-center font-bold">Cashier #3</p></Card>
                    {customers[2] && <CustomerRenderer customersArray={customers[2]}/>}
                </Space>
            </Col>
        </>
    );
}

export default QueueRenderer;