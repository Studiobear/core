const SVSTYLE_ID = '_svstyle'
const ssr = {
  data: '',
}

const getSheet = target => {
  try {
    let sheet = target
      ? target.querySelector('#' + SVSTYLE_ID)
      : self[SVSTYLE_ID]
    if (!sheet) {
      // Note to self: head.innerHTML +=, triggers a layout/reflow. Avoid it.
      sheet = (target || document.head).appendChild(
        document.createElement('style'),
      )
      sheet.innerHTML = ' '
      sheet.id = SVSTYLE_ID
    }
    return sheet.firstChild
  } catch (e) {}
  return ssr
}

const update = (css, sheet, append) => {
  sheet.data.indexOf(css) < 0 &&
    (sheet.data = append ? css + sheet.data : sheet.data + css)
}

export const glob = val => {
  const ctx = this || {}

  return update(val, getSheet(ctx.target))
}

export default glob
