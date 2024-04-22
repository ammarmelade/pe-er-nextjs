import { Card } from "antd";

function CustomerRenderer({ customersArray }) {

    const displayed = customersArray.slice(0, 3);
    const hidden = customersArray.length - 3;

    return (
        <>
            {displayed.map((item, index) => (
                <Card key={index} hoverable={true} className="border-4 border-gray-400 rounded-full flex h-24 w-24 justify-center mx-auto my-2">
                    <p>{item}</p>
                </Card>
            ))}

            {hidden > 0 && <Card className="border-4 border-gray-400 rounded-full flex h-24 w-24 justify-center mx-auto my-2">{hidden} more persons.</Card>}
        </>
    )
}

export default CustomerRenderer;