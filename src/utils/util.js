import saveAs from 'file-saver';

/**
 * 总体路由处理器
 */
export const resolveUrlPath = (url, name) => {
    let reqUrl = url
    if (url.indexOf('#') !== -1 && url.indexOf('http') === -1) {
        // const port = reqUrl.substr(reqUrl.indexOf(':'))
        // reqUrl = `/myiframe/urlPath?src=${baseUrl}${port}${reqUrl.replace('#', '').replace(port, '')}}&name=${name}`
    } else if (url.indexOf('http') !== -1) {
        reqUrl = `/myiframe/urlPath?src=${reqUrl}&name=${name}`
    } else {
        reqUrl = `${reqUrl}`
    }
    // return reqUrl
    return reqUrl
}

/**
 * 总体路由设置器
 */
export const setUrlPath = ($route) => {
    let value = ''
    if ($route.query.src) {
        value = $route.query.src
    } else {
        value = $route.path
    }
    return value
}

export const info = (value) => {
    console.log(`%c KJWL-FET %c ${value} %c`, "background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#4caf50 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff", "background:transparent")
}

export const error = (value) => {
    console.groupCollapsed(`%c KJWL-FET %c ${value} %c`, "background:#35495e; font-weight:normal; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#f44336; font-weight:normal; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff", "background:transparent");
    console.trace()
    console.groupEnd()
}

export const downloadBlob = (blob, fileName) => {
    if (!blob) return false
    saveAs(blob, decodeURIComponent(fileName));
}

export const downloadBlobByRequest = (blobResponse) => {
    try {
        let fileName = blobResponse.headers['content-disposition'].match(/filename="([^"]+)/)[1]
        return downloadBlob(blobResponse.data, fileName)
    } catch (e) {
        console.log(e);
        return downloadBlob(blobResponse && blobResponse.data || null, "文件")
    }
}

