import Base from './base';

function get(url) {
  return Base.get(url).then(response => {
    return response
  })
}

function post(url, request, type) {
  return Base.post(url, request, type).then(response => {
    return response
  })
}

export {
  get,
  post
}