import { UseTheme } from "./contexts/theme-context"



export function Card(params) {
  const darkStyle = { backgroundColor: "gray" }
  const lightStyle = { backgroundColor: "white" }

  const { themeMode } = UseTheme();

  return (
    <div>
      <div className="ui card" style={
        themeMode == 'light' ?
          { backgroundColor: "gray" } :
          { backgroundColor: "white" }}>
        <div className="image">
          <img
            src='https://raw.githubusercontent.com/avilavate/Reacts/296d4930507ec84ebbd266809104f346b17886ab/toggle-theme/src/assets/Avil.jpeg' />
        </div>
        <div className="content">
          <a
            className="header">Avil Avate</a>
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

    </div>

  )
}

export default Card;