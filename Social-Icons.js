import profileImage from './images/profileImage.png';
import slack1 from './images/slack1.png';
import github from './images/github.png';
import './App.css';


const SocialIcons = () => {
    return(
        <div className='social-icons'> 
            <div className='slack-icon'>  
                <a href='https://slack.com'>
                    <img src={slack1} className='slack-size'/>
                </a>     
            </div>
            <div className='github-icon'>
                <a href='https://github.com'>
                    <img src={github} className='github-size'/>
                </a>
            </div>
        </div>
    )
}

export default SocialIcons;