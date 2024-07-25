import { UseTheme } from "./contexts/theme-context"

export function ToggleButton(params) {
    const themeMetaData = UseTheme();


    return (
        <>
            <div className="ui toggle checkbox">
                <input
                    type="checkbox"
                    name="toggle"
                    onChange={() => {
                        themeMetaData.toggleTheme()
                    }}
                // checked={themeMetaData.themeMode='dark'}
                />
                <label>Toggle Theme</label>
            </div>
        </>
    )


}

export default ToggleButton