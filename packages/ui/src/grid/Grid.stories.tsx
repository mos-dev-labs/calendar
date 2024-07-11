import {Grid} from "./Grid";

export default {
  title: 'Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' }
  }
} as any

export const Grid32 = {
  args: {
    col: 32,
    children: <div>test</div>
  }
}
