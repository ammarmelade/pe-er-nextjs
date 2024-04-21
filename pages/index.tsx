import { WithDefaultLayout } from '../components/DefautLayout';
import { Title } from '../components/Title';
import { Page } from '../types/Page';
import { useAtom } from 'jotai';
import customerListAtom from '@/data/customers';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Button, Card, Col, Divider, Input, Row, Space } from 'antd';

const IndexPage: Page = () => {
    
    const CreateCustomerSchema = z.object({
        customer: z.string()
            .nonempty({ message: 'Customer name cannot be empty.' })
            .max(30, { message: 'Customer name must be less than 30 characters.' })
            .refine((value) => !customers.some(row => row.includes(value)), {message: 'Name already used.'}),
    });

    type CreateCustomerType = z.infer<typeof CreateCustomerSchema>;

    const [customers, setCustomers] = useAtom(customerListAtom);

    const { handleSubmit, formState: { errors }, control, reset} = useForm<CreateCustomerType>({
        resolver: zodResolver(CreateCustomerSchema),
        mode: 'onChange'
    });

    function renderer(arr: string[]) {

        const displayed = arr.slice(0, 3);
        const hidden = arr.length - 3;

        return (
            <>
                {displayed.map((item, index) => (
                    <Card key={index} hoverable={true}>
                        <p>{item}</p>
                    </Card>
                ))}
 
                {hidden > 0 && <Card>{hidden} other(s) are waiting in line.</Card>}
            </>
        )
    }

    function onFormSubmit(formData) {

        const customerName = formData.customer;
        
        const newCustomerList = customers.slice(0);
        newCustomerList[Math.floor(Math.random() * 3)]?.push(customerName);
    
        setCustomers(newCustomerList);

        reset();
    }

    function removeCustomer(cashierNumber: number) {
        
        const newCustomerList = customers.slice(0);
        newCustomerList[cashierNumber]?.shift();
    
        setCustomers(newCustomerList);
    }

    return (
        <div>
            <Title>Home</Title>

            <Row gutter={24} justify="space-evenly">

                <Col className="gutter-row border-r border-gray-500" span={6}>
                    <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                        <Card title="Cashier 1" bordered={true} size='small' hoverable={true}>
                            {/* <Button onClick={() => {removeCustomer(0)}}>Handle</Button>     */}
                        </Card>
                        {customers[0] && renderer(customers[0])}
                    </Space>
                </Col>

                <Col className="gutter-row border-r border-gray-500" span={6}>
                    <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                        <Card title="Cashier 2" bordered={true} size='small' hoverable={true}>
                            {/* <Button onClick={() => {removeCustomer(1)}}>Handle</Button>     */}
                        </Card>
                        {customers[1] && renderer(customers[1])}
                    </Space>
                </Col>
                
                <Col className="gutter-row" span={6}>
                    <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                        <Card title="Cashier 3" bordered={true} size='small' hoverable={true}>
                            {/* <Button onClick={() => {removeCustomer(2)}}>Handle</Button>     */}
                        </Card>
                        {customers[2] && renderer(customers[2])}
                    </Space>
                </Col>
            </Row>

            <Row>

                <Col span={12}>
                    <Divider />
                    <Row className="border border-gray-300 rounded-lg p-4">
                        <Col span={16}>
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <Space direction="vertical" size={"small"} style={{ display: 'flex' }}>
                                    <Row>
                                        <Col span={24}>
                                            <Controller 
                                                name="customer"
                                                control={control}
                                                render={({ field }) => <Input id="customer" placeholder="Customer Name" addonBefore="Name" {...field} />} 
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            {errors.customer && <span className="text-red-500">{errors.customer.message}</span>}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Button type="primary" htmlType="submit" className="bg-blue-500">Add Customer</Button>
                                        </Col>
                                    </Row>

                                </Space>
                            </form>
                        </Col>

                        <Col span={1}>{/* TEMP SPACE */}</Col>

                        <Col span={4}>
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
                        </Col>
                    </Row>
                </Col>

            </Row>

        </div>
    );
}

IndexPage.layout = WithDefaultLayout;
export default IndexPage;
