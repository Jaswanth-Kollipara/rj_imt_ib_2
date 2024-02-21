import './index.css'

const Countries = props => {
  const {data, changeState} = props
  const {name, isVisited, id} = data
  const onChangeState = () => {
    changeState(id)
  }

  return (
    <li className="con">
      <p>{name}</p>
      {isVisited && <p>Visited</p>}
      {!isVisited && (
        <bytton className="b1" type="button" onClick={onChangeState}>
          Visit
        </bytton>
      )}
    </li>
  )
}

export default Countries
