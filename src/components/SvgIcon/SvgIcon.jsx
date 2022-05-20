import { ReactComponent as ArrowRight } from '../../assets/svgs/arrow-right.svg'
import { ReactComponent as Chat } from '../../assets/svgs/chat.svg'
import { ReactComponent as Location } from '../../assets/svgs/location.svg'
import { ReactComponent as Phone } from '../../assets/svgs/phone.svg'

const IconMap = {
  ArrowRight, Chat, Location, Phone
}

export default function SvgIcon({ name }) {
  const Component = IconMap[name]

  return (
    <Component className="fill-gray-300 w-5 h-5" />
  )
}
