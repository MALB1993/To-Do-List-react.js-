import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <Spinner animation="grow" role="status" size="sm">
            <span className="visually-hidden">
                Loading...
            </span>
        </Spinner>

    )
}

export default Loading;