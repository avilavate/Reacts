
export function Card(params) {
  return (
    <div className="ui card">
      <div className="image">
        <img src='' />
      </div>
      <div className="content">
        <a className="header">Avil Avate</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Avil is a full stack architect.
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  )
}

export default Card;