const url = "https://striveschool.herokuapp.com/api/product/"

/// javascript basic auth fetch
//function getEvents()
getProducts = async () => {
    let response = await fetch(url,
        {
            headers: {
                "Authorization": "Basic " + btoa("user6:4SdE6yRXfXAUHrKM")
            }
        })
    return await response.json()
}

createProduct = async (product) => {
    let response = await fetch(url,
        {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa("user6:4SdE6yRXfXAUHrKM"),
                "Content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
    return await response.json()
}