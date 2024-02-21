import './index.css'

const Visited = props => {
  const {data, changeState} = props
  const {id, name, imageUrl} = data
  const onClickRemove = () => {
    changeState(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" className="img1" />
      <div className="con">
        <p>{name}</p>
        <button type="button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default Visited
