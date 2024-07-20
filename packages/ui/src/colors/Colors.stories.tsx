import {BorderColors, Colors, allColorStyles, DividerColors, IconColors, TextColors} from "./Colors";

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
            <div style={{
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
            }}>
              <b>{color.name}</b><br/>
              <p>{color.color}</p>
            </div>
          )
        })}
      </section>
    </section>
  )
}

const Color = () => {
  return (
    <article style={{...allColorStyles, width: '100%', overflow: 'auto'}}>
      <Item title="Palette" colors={Colors}/>
      <Item title="Text" colors={TextColors}/>
      <Item title="Border" colors={BorderColors}/>
      <Item title="Divider" colors={DividerColors}/>
      <Item title="Icon" colors={IconColors}/>
    </article>
  )
}

export default {
  title: 'Colors',
  component: Color,
  tags: ['']
} as any

export const Palette = {
  args: {}
}

