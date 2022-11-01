import internship from './images/internship.png';
import I4G from './images/I4G.png';

import './App.css';

export const Footer = () => {
    return(
        <div className='footer'>
            <div><img src={internship} className='footer-image'/></div>
            <div className='HNG-text'>HNG Internship 9 Frontend Task</div>
            <div><img src={I4G} className='footer-image'></img></div>
        </div>
    )
}