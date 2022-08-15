import { ref } from 'vue'

let vref = ref<string>('input')

let flag = ref(true)

const changeFlag = () => {
  flag.value = !flag.value
}

let Arr = [1, 2, 3, 4, 5, 6]

// props接收值
type Props = {
  title: string
}

// emit
const getCTX = (ctx: any) => {
  ctx.emit('on-click', Arr)
}

const renderDom = (props: Props, ctx: any) => {
  return (
    <div>
      {/* 接收值 */}
      <h1>{props.title}</h1>

      {/* 
      tsx里v-model不会自动解构
      变量使用单括号{}
       */}
      <input v-model={vref.value} type="text" />
      <div>{vref.value}</div>

      {/* on***替代v-on */}
      <button onClick={changeFlag}>切换flag</button>
      <div v-show={flag.value}>VUE3 TSX</div>
      <div>{flag.value ? 'VUE' : 'REACT'}</div>

      {/* map替代v-for */}
      <div>
        {Arr.map((a) => {
          return <div>{a}</div>
        })}
      </div>

      {/* emit */}
      <button onClick={getCTX.bind(this, ctx)}>emitARR</button>
    </div>
  )
}

export default renderDom
