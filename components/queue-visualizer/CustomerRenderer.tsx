import { Card } from "antd";

const cardStyle: React.CSSProperties  = { 
    textAlign: 'center', 
    justifyContent: 'center',
    alignContent: 'center',
    border: '2px solid rgb(150, 150, 150)',
    width: '100px',
    height: '100px',
    margin: '10px auto',
    borderRadius: '50%',
};

function CustomerRenderer({ customersArray }) {

    const displayed = customersArray.slice(0, 3);
    const hidden = customersArray.length - 3;

    return (
        <>
            {displayed.map((item, index) => (
                <Card key={index} hoverable={true} style={cardStyle}>
                    <p>{item}</p>
                </Card>
            ))}

            {hidden > 0 && <Card style={cardStyle}>{hidden} more persons.</Card>}
        </>
    )
}

export default CustomerRenderer;