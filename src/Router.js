const Router = (currentRoute, setRoute, replaceRoute, url, setMagic) => {
    
    //check url
    const urlArray = url.split('/')
    const endpoint = urlArray[3]
    const arg = urlArray[4]
console.log(url);

    if (endpoint == 'changePass' && arg) {
        setMagic(arg)
        replaceRoute(endpoint)
    }
    if (currentRoute != endpoint) {
        setRoute(endpoint)
    }
    //callback route

}

export default Router