<script>
  import { SVG } from '@studiobear/designspek-components'

  export let style = { d: 'none' }
  export let ssr = $$props.ssr || {}
  export let fill
  export let viewBox = '0 0 512 512'
  export let name = 'coronavirus-1'
</script>

<SVG {fill} {viewBox} {...$$props} {style} {ssr}>
  <use xlink:href={`#${name}`} />
</SVG>
