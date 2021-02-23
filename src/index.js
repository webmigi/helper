import "@/scss/index.scss"
import {Input} from '@/components/input/Input'
import {Components} from '@/core/Components'

const element = new Components('#app', {
  components: [Input]
})

element.render()