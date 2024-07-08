import PropTypes from 'prop-types';
const Card = (props) => {
    return (
        <>
            <div className="card border-0 shadow mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className={props.className === "Success"? "text-success": props.className === "Danger"? "text-danger": props.className === "Warning"? "text-warning": props.className === "Primary" ? "text-primary":"bg-success-subtle"}>₹ {props.amount}</h4>
                        <i className={`bi bi-receipt fs-2 ${props.className === "Success"? "text-success": props.className === "Danger"? "text-danger": props.className === "Warning"? "text-warning": props.className === "Primary" ? "text-primary":"bg-success-subtle"}`}></i>
                    </div>
                </div>
                <div className={`card-footer ${props.className === "Success"? "bg-success-subtle": props.className === "Danger"? "bg-danger-subtle": props.className === "Warning"? "bg-warning-subtle": props.className === "Primary" ? "bg-primary-subtle":"bg-success-subtle"} border-0`}>
                    <div className={`text-center ${props.className === "Success"? "text-success": props.className === "Danger"? "text-danger": props.className === "Warning"? "text-warning": props.className === "Primary" ? "text-primary":"bg-success-subtle"} text-uppercase`}>{props.title}</div>
                </div>
            </div>
        </>
    )
}
Card.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    amount: PropTypes.number
}

export default Card
