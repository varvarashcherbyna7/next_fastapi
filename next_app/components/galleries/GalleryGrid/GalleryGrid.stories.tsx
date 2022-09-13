import { ComponentMeta, ComponentStory } from '@storybook/react';
import GalleryGrid, { IGalleryGrid } from './GalleryGrid';
import { mockGalleryGridProps } from './GalleryGrid.mocks';

export default {
  title: 'galleries/GalleryGrid',
  component: GalleryGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GalleryGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GalleryGrid> = (args) => (
  <GalleryGrid {...args} />
);

// Story using CSS Modules
// export const WithCSSModules = () => (
//   <Template
//     {...args}
//     className={styles.Register} // 👈
//   />
// );

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGalleryGridProps.base,
} as IGalleryGrid;
