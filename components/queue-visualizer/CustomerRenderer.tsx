import { Card } from "antd";

function CustomerRenderer({ customersArray }) {

    const displayed = customersArray.slice(0, 3);
    const hidden = customersArray.length - 3;

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

export default CustomerRenderer;