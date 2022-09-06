import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Notion from './svgs/notion'
import Edit from './svgs/edit'
import Scroll from './svgs/scroll'

const features = [
  {
    text: 'DECENTRALISED',
    icon: Lightning,
  },
  
  {
    text: 'HYBRID',
    icon: Wifi,
  },
  
  {
    text: 'MODULAR',
    icon: Jamstack,
  },

  {
    text: 'REALTIME',
    icon: Lighthouse,
  },

  {
    text: 'AUTONOMOUS',
    icon: Plus,
  },
  
]

const Features = () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={24} width={24} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)

export default Features
