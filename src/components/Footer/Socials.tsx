import './Socials.scss';
import { socialDatas } from './SocialData';

const Socials = () => {
  return (
    <ul className="socials">
      {socialDatas.map(data =>
        <li key={data.url}>
          <a className='socials__link' href={data.url} target='_blank'>
            {data.icon}
          </a>
        </li>
      )}
    </ul>
  )
}

export default Socials;