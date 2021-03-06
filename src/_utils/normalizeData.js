import { isArray, isPlainObject, defaultTo } from 'lodash'

export default (data, {
  label: labelKey = 'label',
  value: valueKey = 'value'
} = {}) => {
  // e.g. '10'
  if (!isArray(data)) {
    return [{
      [labelKey]: data,
      [valueKey]: data
    }]
  }

  return data.map(item => {
    // e.g. { label: '10', value: 10 }
    if (isPlainObject(item)) return item

    // e.g. ['10', 10]
    if (isArray(item)) {
      const [label, value, extra] = item
      return {
        [labelKey]: label,
        [valueKey]: defaultTo(value, label),
        ...extra
      }
    }

    // e.g. '10'
    return {
      [labelKey]: item,
      [valueKey]: item
    }
  })
}
