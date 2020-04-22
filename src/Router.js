const Router = (currentRoute, setRoute, url) => {
        
    //check url
    const urlArray = url.split('/')
    const endpoint = urlArray[3]
    const arg = urlArray[4]

    /* if (endpoint == 'reset' && arg) {

        setRoute(endpoint, arg)
    } */
    if (currentRoute != endpoint) {
        setRoute(endpoint)
    }
    //callback route

}

export default Router