const host = 'http://localhost:5757'

const http = function ({url, method, data}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}${url}`,
      data: data,
      method: method,
      success(res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

export default http
