const openKalySite = (href, state, kalySite) => {
  kalySite.state = state
  kalySite.href = href
  return kalySite
}

export default openKalySite