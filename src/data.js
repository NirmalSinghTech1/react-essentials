import componentLogo from "./assets/components.png";
import jsxLogo from "./assets/jsx-ui.png";
import propsLogo from "./assets/config.png";
import stateLogo from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
    {
        title: 'Components',
        description: 'The core UI building block - compose the user interface by combining multiple components.',
        image: componentLogo,
    },
    {
        title: 'JSX',
        description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
        image: jsxLogo,
    },
    {
        title: 'Props',
        description: 'Make components configurable (and therefore reusable) by passing input data to them.',
        image: propsLogo,
    },
    {
        title: 'State',
        description: 'React-managed data which, when changed, causes the component to re-render & the UI to update.',
        image: stateLogo,
    },
]