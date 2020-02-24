// string assignments for improved minification

const a = 'a'
const A = 'A'
const c = 'c'
const C = 'C'
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
const W = 'Width'
const H = 'Height'
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
const end = 'End'
const fst = 'first'
const lst = 'last'
const strt = 'Start'
const cent = 'center'
const ev = 'Evenly'
const arnd = 'Around'
const btwn = 'Between'
const slf = 'self'
const str = 'stretch'
const bsl = 'baseline'
const row = 'row'
const rev = 'reverse'
const col = 'col'
const color = `${col}or`
const column = `${col}umn`
const cont = 'cont'
const content = `${cont}ent`
const flex = 'flex'
const bas = 'Basis'
const no = 'no'
const sf = 'safe'
const unsf = `un${sf}`
const wrap = 'Wrap'
const shr = 'Shrink'
const grow = 'Grow'
const dir = 'dir'
const Dir = 'Direction'
const direction = `${dir}ection`
const ord = 'order'
const template = 'template'
const align = 'align'
const just = 'justify'
const items = 'Items'
const area = 'area'
const auto = 'auto'
const flow = 'flow'
const bg = 'bg'
const bkgd = 'background'
const image = 'Image'
const size = 'Size'
const pos = 'pos'
const position = `${pos}ition`
const repeat = 'repeat'
const attachment = 'Attachment'
const lign = 'lign'
const olor = 'olor'

export const shortHandAttributes = new Map([
  ['m', [m]],
  ['mt', [`${m}${T}`]],
  ['mr', [`${m}${R}`]],
  ['mb', [`${m}${B}`]],
  ['ml', [`${m}${L}`]],
  ['mx', [`${m}${L}`, `${m}${R}`]],
  ['my', [`${m}${T}`, `${m}${B}`]],
  ['p', [p]],
  ['pt', [`${p}${T}`]],
  ['pr', [`${p}${R}`]],
  ['pb', [`${p}${B}`]],
  ['pl', [`${p}${L}`]],
  ['px', [`${p}${L}`, `${p}${R}`]],
  ['py', [`${p}${T}`, `${p}${B}`]],
  [bg, [`${bkgd}${C}${olor}`]],
  [`${bg}${image}`, [`${bkgd}${image}`]],
  [`${bg}${size}`, [`${bkgd}${size}`]],
  [`${bg}${pos}`, [`${bkgd}${position}`]],
  [`${bg}${repeat}`, [`${bkgd}${repeat}`]],
  [`${bg}${attachment}`, [`${bkgd}${attachment}`]],
  ['w', [w]],
  ['h', [h]],
  [size, [w, h]],
  ['d', [d]],
  [`${min}w`, [`${min}${W}`]],
  [`${min}-w`, [`${min}${W}`]],
  [`${max}w`, [`${max}${W}`]],
  [`${max}-w`, [`${max}${W}`]],
  [`${min}h`, [`${min}${H}`]],
  [`${min}-h`, [`${min}${H}`]],
  [`${max}h`, [`${max}${H}`]],
  [`${max}-h`, [`${max}${H}`]],
  ['brd', [brd]],
  ['brdCol', [`${brd}${C}${olor}`]],
  ['bt', [`${brd}${T}`]],
  ['br', [`${brd}${R}`]],
  ['bb', [`${brd}${B}`]],
  ['bl', [`${brd}${L}`]],
  ['bx', [`${brd}${L}`, `${brd}${R}`]],
  ['by', [`${brd}${T}`, `${brd}${B}`]],
  ['shd', [`${bx}-${shd}`]],
  [content, [content]],
  [align, [`${align}${items}`]],
  [`${align}${C}`, [`${align}Content`]],
  [`just${C}`, [`${just}Content`]],
  ['slf', [`${align}Self`]],
  ['wrap', ['wrap']],
  ['strt', 'Start'],
  [`${slf}${strt}`, [`${slf}${strt}`]],
  ['end', ['end']],
  [`${slf}${end}`, [`${slf}${end}`]],
  ['bsl', [bsl]],
  [`${fst}${bsl}`, [`${fst} ${bsl}`]],
  [`${lst}${bsl}`, [`${lst} ${bsl}`]],
  ['str', [str]],
  ['sf', [sf]],
  ['unsf', [unsf]],
  ['cent', [cent]],
  [`${sp}${btwn}`, [`${sp}${btwn}`]],
  [`${sp}${arnd}`, [`${sp}${arnd}`]],
  [`${sp}${ev}`, [`${sp}${ev}`]],
  [`${flex}${grow}`, [`${flex}${grow}`]],
  [direction, [`${flex}${Dir}`]],
  [`${flex}`, [`${flex}`]],
  [`${flex}${wrap}`, [`${flex}${wrap}`]],
  [`${flex}${shr}`, [`${flex}${shr}`]],
  [`${no}${wrap}`, [`${no}${wrap}`]],
  [`${wrap}rev`, [`${wrap}${rev}`]],
  [`${flex}${dir}`, [`${flex}${Dir}`]],
  [`${flex}${flow}`, [`${flex}${flow}`]],
  [`${flex}bas`, [`${flex}${bas}`]],
  [`${flex}${strt}`, [`${flex}${strt}`]],
  [`${flex}${end}`, [`${flex}${end}`]],
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
