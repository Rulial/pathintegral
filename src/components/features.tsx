import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Edit from './svgs/edit'
import Scroll from './svgs/scroll'

const features = [
  {
    text: 'DECENTRALISED-AUTONOMY',
    icon: Lightning,
  },
  
  {
    text: 'MODULAR',
    icon: Jamstack,
  },

  {
    text: 'REALTIME',
    icon: Lighthouse,
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
