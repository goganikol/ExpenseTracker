import './Card.css';

function Card (props){
    const classnames = 'card '+ props.className;

    return (<div className={classnames}>`{props.children}</div>)
};

export default Card;