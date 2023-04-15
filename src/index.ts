function isWindow(arg: any): boolean {
  if (arg == null)
    return false

  return arg === Object(arg) && arg === arg.window
}

export default isWindow
