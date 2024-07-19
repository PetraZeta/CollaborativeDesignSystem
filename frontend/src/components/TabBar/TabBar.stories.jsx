import React from 'react';
import TabBar from "./TabBar";

export default {
    title: 'Components/TabBar',
    component: TabBar,
  };
  
  const Template = (args) => <TabBar {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    // Define aquí los props que necesite tu componente
  };
  
  Primary.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/yFDeo1hXBrKWPC75Gq8z5K/In%C3%A9s.Garc%C3%ADa-DS?node-id=140-3066&t=UPf03CF07VtYH5Z5-4',
    },
  };