export function css(node, style = {}) {
  const stylesheet = node.style
  Object.entries(style)
    .filter(Boolean)
    .filter((entry) => entry.every(Boolean))
    .forEach((elem) => {
      stylesheet[elem[0]] = elem[1]
    })
}

export function classNames(...args) {
  return args

    .filter((o) => o)
    .map((o) => {
      if (typeof o === 'string') {
        return o.trim()
      }
      return Array.from(Object.entries(o))
        .map(([e1, e2]) => {
          if (e2) {
            if (typeof e2 === 'boolean') {
              return e1
            }
            return `${e2?.trim()} ${e1}`
          }
          return ''
        })
        .filter((o) => o)
        .join(' ')
        .trim()
    })
    .filter((o) => o)
    .join(' ')
    .trim()
}

export function renameProps({
  style,
  alignContent,
  alignItems,
  justifyContent,
  gap,
  wrap,
  reverse,
  inline,
  basis: flexBasis,
  grow: flexGrow,
  shrink: flexShrink,
  order,
  colStart: gridColumnStart,
  colEnd: gridColumnEnd,
  rowStart: gridRowStart,
  rowEnd: gridRowEnd,
  col: gridColumn,
  row: gridRow,
  area: gridArea,
  justifySelf,
  alignSelf,
  autoCols: gridAutoColumns,
  autoRows: gridAutoRows,
  colGap: gridColumnGap,
  rowGap: gridRowGap,
  templateAreas: gridTemplateAreas,
  templateCols: gridTemplateColumns,
  templateRows: gridTemplateRows
}) {
  return {
    ...style,
    alignContent,
    alignItems,
    justifyContent,
    gap,
    wrap,
    reverse,
    inline,
    alignSelf,
    flexBasis,
    flexGrow,
    flexShrink,
    order,
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
    gridColumn,
    gridRow,
    gridArea,
    justifySelf,
    alignSelf,
    alignContent,
    alignItems,
    gridAutoColumns,
    gridAutoRows,
    justifyContent,
    gridColumnGap,
    gridRowGap,
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows
  }
}
