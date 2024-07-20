import {BorderColors, allColorStyles, DividerColors, IconColors, TextColors, colorSet} from "./Colors";

// @ts-ignore
const Item = ({title, colors}) => {
  return (
    <section style={{marginBottom: '30px'}}>
      <h3 style={{fontSize: '24px', marginBottom: '10px'}}>{title}</h3>
      <section style={{width: '100%', boxSizing: 'border-box'}}>
        {Object.keys(colors).map(key => {
          // @ts-ignore
          const color: { name: string, color: string } = colors[key]
          return (
            <div
              style={{
                display: "inline-flex",
                flexDirection: 'column',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: `var(${color.name})`,
                alignItems: 'center',
                color: 'black',
                justifyContent: "center",
                margin: '10px',
                border: '1px solid gray'
              }}
              key={color.name}
            >
              <b>{color.name}</b><br/>
              <p>{color.color}</p>
            </div>
          )
        })}
      </section>
    </section>
  )
}

// @ts-ignore
const Color = ({items}) => {
  return (
    <article style={{...allColorStyles, width: '100%', overflow: 'auto'}}>
      {
        // @ts-ignore
        items.map(item => {
          return (
            <Item title={item.title} colors={item.colors} key={item.title}/>
          )
        })
      }
    </article>
  )
}

export default {
  title: 'Colors',
  component: Color,
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'}
  }
} as any

const colorSetTitles = ['Palette', 'Text', 'Border', 'Divider', 'Icon']

export const All = {
  args: {
    items: Array.from({length: colorSet.length}).map((_, index) => (
      {
        title: colorSetTitles[index],
        colors: colorSet[index]
      }
    ))
  }
}

export const Text = {
  args: {
    items: [
      {title: 'Text', colors: TextColors},
    ]
  }
}

export const Border = {
  args: {
    items: [
      {title: 'Border', colors: BorderColors},
    ]
  }
}

export const Divider = {
  args: {
    items: [
      {title: 'Divicer', colors: DividerColors},
    ]
  }
}

export const Icon = {
  args: {
    items: [
      {title: 'Icon', colors: IconColors},
    ]
  }
}
