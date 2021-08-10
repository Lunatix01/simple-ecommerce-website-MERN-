const getItem = ( key ) => {
    const ls = window.localStorage
    try {
        return ls.getItem(key)
    } catch (error) {
        console.log(error)
    }
}

const setItem = ( key , value ) => {
    const ls = window.localStorage
    try {
        ls.setItem(key, value)
    } catch (error) {
        console.log(error)
    }
}

const deleteItem = ( key ) => {
    const ls = window.localStorage
    try {
        ls.removeItem(key)
    } catch (error) {
        console.log(error)
    }
} 


export { getItem , setItem , deleteItem }
