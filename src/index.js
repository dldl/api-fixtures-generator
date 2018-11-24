import md5 from "md5"

const oldFetch = window.fetch

window.fetch = async (url, body) => {
  console.log(url, body)

  const response = await oldFetch(url, body)
  const originalResponse = response.clone()
  const contentType = response.headers["Content-Type"]

  const fileName = `${md5(url + JSON.stringify(body))}.${contentType.split("/")[1]}`
  const downloadLink = document.createElement("a")
  downloadLink.download = fileName
  downloadLink.href = `data:${response.headers["Content-Type"]};base64,${btoa(await response.text())}`
  downloadLink.click()

  return Promise.resolve(originalResponse)
}
