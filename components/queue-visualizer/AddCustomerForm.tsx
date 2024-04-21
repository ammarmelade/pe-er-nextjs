import customerListAtom from "@/data/customers";
import { useAtom } from "jotai";
import { Button, Col, Input, Row, Space } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const AddCustomerForm = () => {

    const [customers, setCustomers] = useAtom(customerListAtom);
    
    const CreateCustomerSchema = z.object({
        customer: z.string()
            .nonempty({ message: 'Customer name cannot be empty.' })
            .max(30, { message: 'Customer name must be less than 30 characters.' })
            .refine((value) => !customers.some(row => row.includes(value)), {message: 'Name already used.'}),
    });

    type CreateCustomerType = z.infer<typeof CreateCustomerSchema>;

    const { handleSubmit, formState: { errors }, control, reset} = useForm<CreateCustomerType>({
        resolver: zodResolver(CreateCustomerSchema),
        mode: 'onChange'
    });

    function onFormSubmit(formData) {

        const customerName = formData.customer;
        
        const newCustomerList = customers.slice(0);
        newCustomerList[Math.floor(Math.random() * 3)]?.push(customerName);
    
        setCustomers(newCustomerList);

        reset();
    }
    
    return (
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
    );
                
}

export default AddCustomerForm;

