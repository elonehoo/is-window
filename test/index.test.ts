import { describe, expect, it } from 'vitest'
import isWindow from '../src/index'

describe('should', () => {
  it('is-window', () => {
    expect(isWindow(1)).toEqual(false)
    expect(isWindow('1')).toEqual(false)
    expect(isWindow(true)).toEqual(false)
    expect(isWindow(null)).toEqual(false)
    expect(isWindow({})).toEqual(false)
    expect(isWindow(function(){})).toEqual(false)
    expect(isWindow([])).toEqual(false)
  })
})

