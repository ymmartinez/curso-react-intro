import {ReactComponent as CompleteSVG} from './CompleteIcon.svg';
import {ReactComponent as DeleteSVG} from './DeleteIcon.svg';
import './TodoIcon.css';

const iconTypes = {
    "Complete": (color)=> <CompleteSVG className="Icon-svg" fill={color} />,
    "Delete": (color)=> <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon ({ type, color, onClick}){
return(
    <span 
    className = {`Icon-container Icon-container-${type}`}
    onClick = {onClick}
    >
{iconTypes[type] (color)}
    </span>
);
}

export{TodoIcon};