import PropTypes from 'prop-types'

export default function IconButton({ icon, onClick }) {
  return (
    <div className="rounded-full w-9 h-9 flex items-center justify-around bg-gray-100 cursor-pointer" onClick={onClick}>
      {icon}
    </div>
  )
}

IconButton.propTypes= {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func
}
