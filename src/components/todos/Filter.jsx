import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import TodoContext from '../../context/todos/TodoContext';

const Filter = ({ todos }) => {

    const { filterTodos } =  useContext(TodoContext);

    const handleChange = (event) => {
        filterTodos(event.target.value);
    }

    return (
        <Row>
            <Col md={3} sm={12} className="my-3">
                <label htmlFor="filter">Filter</label>
                <Form.Select aria-label="Filter by number" id='filter' onChange={ (event) => handleChange(event) }>
                    <option>Open this select menu</option>
                    <option value="5">5</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                </Form.Select>
            </Col>
        </Row>
    )
}

export default Filter;