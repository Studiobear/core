// string assignments for improved minification

const m = 'margin'
const p = 'padding'
const t = 'top'
const T = 'Top'
const r = 'right'
const R = 'Right'
const b = 'bottom'
const B = 'Bottom'
const l = 'left'
const L = 'Left'
const w = 'width'
const h = 'height'
const d = 'display'
const min = 'min'
const max = 'max'
const brd = 'border'
const bx = 'box'
const shd = 'shadow'
const grid = 'grid'
const ap = 'ap'
const gap = `g${ap}`
const sp = 'space'
const end = 'end'
const fst = 'first'
const lst = 'last'
const strt = 'start'
const cent = 'center'
const ev = 'evenly'
const arnd = 'around'
const btwn = 'between'
const slf = 'self'
const str = 'stretch'
const bsl = 'baseline'
const row = 'row'
const rev = 'reverse'
const col = 'col'
const color = `${col}or`
const Color = `Color`
const column = `${col}umn`
const flex = 'flex'
const bas = 'basis'
const no = 'no'
const sf = 'safe'
const unsf = `un${sf}`
const wrap = 'wrap'
const shr = 'shrink'
const grow = 'grow'
const dir = 'dir'
const direction = `${dir}ection`
const ord = 'order'
const template = 'template'
const align = 'align'
const justify = 'justify'
const content = 'content'
const items = 'items'
const area = 'area'
const auto = 'auto'
const flow = 'flow'
const bg = 'bg'
const background = 'background'
const image = 'Image'
const size = 'Size'
const pos = 'pos'
const position = `${pos}ition`
const repeat = 'repeat'
const attachment = 'Attachment'

export const shortHandAttributes = new Map([
  ['m', [m]],
  ['mt', [`${m}${T}`]],
  ['mr', [`${m}${R}`]],
  ['mb', [`${m}${B}`]],
  ['ml', [`${m}${L}`]],
  ['mx', [`${m}${L}`, `${m}${R}`]],
  ['my', [`${m}${T}`, `${m}${B}`]],
  ['p', [p]],
  ['pt', [`${p}-${t}`]],
  ['pr', [`${p}-${r}`]],
  ['pb', [`${p}-${b}`]],
  ['pl', [`${p}-${l}`]],
  ['px', [`${p}-${l}`, `${p}-${r}`]],
  ['py', [`${p}-${t}`, `${p}-${b}`]],
  [bg, [`${background}${Color}`]],
  [`${bg}${image}`, [`${background}${image}`]],
  [`${bg}${size}`, [`${background}${size}`]],
  [`${bg}${pos}`, [`${background}${position}`]],
  [`${bg}${repeat}`, [`${background}${repeat}`]],
  [`${bg}${attachment}`, [`${background}${attachment}`]],
  ['w', [w]],
  ['h', [h]],
  [size, [w, h]],
  ['d', [d]],
  [`${min}w`, [`${min}-${w}`]],
  [`${min}-w`, [`${min}-${w}`]],
  [`${max}w`, [`${max}-${w}`]],
  [`${max}-w`, [`${max}-${w}`]],
  [`${min}h`, [`${min}-${h}`]],
  [`${min}-h`, [`${min}-${h}`]],
  [`${max}h`, [`${max}-${h}`]],
  [`${max}-h`, [`${max}-${h}`]],
  ['brd', [brd]],
  ['bt', [`${brd}-${t}`]],
  ['br', [`${brd}-${r}`]],
  ['bb', [`${brd}-${b}`]],
  ['bl', [`${brd}-${l}`]],
  ['bx', [`${brd}-${l}`, `${brd}-${r}`]],
  ['by', [`${brd}-${t}`, `${brd}-${b}`]],
  ['shd', [`${bx}-${shd}`]],
  [align, [`${align}-${items}`]],
  [content, [`${align}-${content}`]],
  [justify, [`${justify}-${content}`]],
  ['slf', [`${align}-${slf}`]],
  [wrap, [wrap]],
  ['strt', [strt]],
  [`${slf}${strt}`, [`${slf}-${strt}`]],
  [end, [end]],
  [`${slf}${end}`, [`${slf}-${end}`]],
  ['bsl', [bsl]],
  [`${fst}${bsl}`, [`${fst} ${bsl}`]],
  [`${lst}${bsl}`, [`${lst} ${bsl}`]],
  ['str', [str]],
  ['sf', [sf]],
  ['unsf', [unsf]],
  ['cent', [cent]],
  [`${sp}${btwn}`, [`${sp}-${btwn}`]],
  [`${sp}${arnd}`, [`${sp}-${arnd}`]],
  [`${sp}${ev}`, [`${sp}-${ev}`]],
  [`${grow}`, [`${flex}-${grow}`]],
  [direction, [`${flex}-${direction}`]],
  [`${flex}${wrap}`, [`${flex}-${wrap}`]],
  [`${flex}${shr}`, [`${flex}-${shr}`]],
  [`${no}${wrap}`, [`${no}${wrap}`]],
  [`${wrap}${rev}`, [`${wrap}-${rev}`]],
  [`${flex}${dir}`, [`${flex}-${direction}`]],
  [`${flex}${flow}`, [`${flex}-${flow}`]],
  [`${flex}${bas}`, [`${flex}-${bas}`]],
  [`${flex}${strt}`, [`${flex}-${strt}`]],
  [`${flex}${end}`, [`${flex}-${end}`]],
  ['ord', [ord]],
  [gap, [`${grid}-${gap}`]],
  [`${row}`, [`${grid}-${row}`]],
  [`${row}${rev}`, [`${row}-${rev}`]],
  [`${row}${gap}`, [`${grid}-${row}-${gap}`]],
  [`${row}-${gap}`, [`${grid}-${row}-${gap}`]],
  [`${column}`, [`${grid}-${col}`]],
  [`${col}${rev}`, [`${col}-${rev}`]],
  [`${col}${gap}`, [`${grid}-${column}-${gap}`]],
  [`${col}-${gap}`, [`${grid}-${column}-${gap}`]],
  [`${area}`, [`${grid}-${area}`]],
  [`${auto}${flow}`, [`${grid}-${auto}-${flow}`]],
  [`${auto}-${flow}`, [`${grid}-${auto}-${flow}`]],
  [`${auto}${row}s`, [`${grid}-${auto}-${row}s`]],
  [`${auto}-${row}s`, [`${grid}-${auto}-${row}s`]],
  [`${auto}${column}s`, [`${grid}-${auto}-${column}s`]],
  [`${auto}-${column}s`, [`${grid}-${auto}-${column}s`]],
  [`${template}${row}s`, [`${grid}-${template}-${row}s`]],
  [`${template}-${row}s`, [`${grid}-${template}-${row}s`]],
  [`${template}${column}s`, [`${grid}-${template}-${column}s`]],
  [`${template}-${column}s`, [`${grid}-${template}-${column}s`]],
  [`${template}${area}s`, [`${grid}-${area}-${area}s`]],
  [`${template}-${area}s`, [`${grid}-${area}-${area}s`]],
])
