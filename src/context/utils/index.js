export const clear = (type, dispatch) => {
    setTimeout(() => {
        dispatch({
            type: type
        })
    }, 5000)
}
