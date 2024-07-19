
import Header from "./Header";


export default{
    title: "Components/Header",
    component: Header, 
/*     tags: ['autodocs'],
    parameters: {
      layout: 'fullscreen',
    },
    args:{
      onLogin: fn(),
      onLogout: fn(),
      onCreateAccount: fn(),
    }, */
};
const Template = (args) => <Header {...args} />;

export const LoggedIn= Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

   