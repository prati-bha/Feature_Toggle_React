const apiRequest = async (url, option) => {
    let apiData;
    let options = {
        method: option.method,
        headers: { 'Content-Type': 'application/json' }
    }
    if (option.data) {
        options.body = JSON.stringify(option.data)
    }
    const res = await fetch(url, options)

    if (res.status === 401) {
        const data = await parseJson(res);
        apiData = data;
    }
    if (res.status === 200) {
        const data = await parseJson(res);
        apiData = data;
    }
    if (res.status === 500) {
        const data = await parseJson(res);
        apiData = data;

    }
    if (res.status === 400) {
        const data = await parseJson(res);
        apiData = data;
    }
    return apiData


}

const parseJson = (data) => {
    let apiData = data.json();
    return apiData
}
export default apiRequest;
