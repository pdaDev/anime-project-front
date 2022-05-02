export const TimeEl = ({time}) => {
    const addZero = (time) => {
        return time < 10 ? `0${time}` : time
    }
    return <h3>{addZero(time)}</h3>
}