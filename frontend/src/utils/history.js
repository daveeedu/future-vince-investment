const history = {
 push: url => {
  window.history.pushState({}, "", `/#/${url}`);
  window.location.reload()
 }
}
export default history