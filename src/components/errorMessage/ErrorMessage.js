import img from './error.gif'

const ErrorMessage = () => {
    return (
        // <img src={process.env.PUBLIC_URL + '/error.gif'} />
        <img style={{ display: 'block', wigth: "250px", height: "250px", objectFit: 'contain', margin: "0 auto"}} src={img} alt="error"/>
    )
}

export default ErrorMessage;