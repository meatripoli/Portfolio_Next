import {Button,Card,Image,Container, Row,Col} from 'react-bootstrap';
import {useState} from 'react';

export default () => {
    const [show, setShow] = useState(false);
    const handleModal = () => show?setShow(false):setShow(true);
    return(<>
        <Button variant="link" onClick={handleModal}>Skills</Button>
        <Card style={show?{display:'inherit',background:'none',border:'none'}:{display:'none',background:'none'}}>
            <Card.Body>
                <Card.Text>
                    
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}