import md5 from "md5"

const oldFetch = window.fetch

window.fetch = async (url, body) => {
  const response = await oldFetch(url, body)
  const originalResponse = response.clone()
  const contentType = response.headers.get("Content-Type")

  const hash = md5(url + JSON.stringify(body))
  const format = contentType.split("/")[1].split(";")[0]

  const fileName = `${hash}.${format}`

  const downloadLink = document.createElement("a")
  downloadLink.download = fileName
  downloadLink.href = `data:${contentType};base64,${btoa(await response.text())}`
  downloadLink.click()

  return Promise.resolve(originalResponse)
}
