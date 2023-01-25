import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Edit from './svgs/edit'
import Scroll from './svgs/scroll'
import agi from './svgs/agi'

const features = [
  {
    text: 'METAGAME',
    icon: Lightning,
  },
  
  {
    text: 'AGI',
    icon: agi,
  },
  
]

const Features = () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={34} width={34} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)

export default Features
