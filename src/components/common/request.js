export function request_get(url, data) {
  return $.get(url, data)
}

export function request_post(url, data) {
  return $.post(url, data)
}
