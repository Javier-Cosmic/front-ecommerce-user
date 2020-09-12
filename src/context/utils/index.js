export const clear = (type, dispatch, time = 5000) => {
    setTimeout(() => {
        dispatch({
            type: type
        })

    }, time)
}
