import customerListAtom from "@/data/customers";
import { useAtom } from "jotai";
import { Button, Col, Row } from "antd"

const RemoveCustomerButtonList = () => {

    const [customers, setCustomers] = useAtom(customerListAtom);

    function removeCustomer(cashierNumber: number) {
        
        const newCustomerList = customers.slice(0);
        newCustomerList[cashierNumber]?.shift();
    
        setCustomers(newCustomerList);
    }

    return (        
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Button onClick={() => {removeCustomer(0)}}>Handle Cashier #1</Button>
            </Col>
            <Col span={24}>
                <Button onClick={() => {removeCustomer(1)}}>Handle Cashier #2</Button>
            </Col>
            <Col span={24}>
                <Button onClick={() => {removeCustomer(2)}}>Handle Cashier #3</Button>
            </Col>
        </Row>
    )
}

export default RemoveCustomerButtonList;