const ErrorMessage = ({ error }) => {
    return (
        <>
            {error && <p className="text-danger text-center">Error: {error}</p>}
        </>
    )
}

export default ErrorMessage;