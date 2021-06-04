import './Backdrop.css'
export const Backdrop = ({show,click}) => {
    return (
         show && <div className="backdrop" onClick={click}></div>
    )
}

export default Backdrop;