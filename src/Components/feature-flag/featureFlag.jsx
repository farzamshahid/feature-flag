import React from 'react'
import LightDarkMode from '../light-dark-mode/lightDarkMode'
import TreeView from '../Tree-View/index'
import RandomColor from '../Random-color/randomColor'
import Accordian from '../accordian/index'
import { useContext } from 'react'
import { FeatureFlagContext } from './context'
import menus from '../Tree-View/data'
export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />,
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />,
        },
        {
            key: "showAccordian",
            component: <Accordian />,
        },
        {
            key: "showTreeView",
            component: <TreeView menus={menus} />,
        }
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey];
    }

    if (loading) return <h1>Loading data ! Please wait</h1>;

    return (
        <div>
            <h1>Feature Flags</h1>
            {componentsToRender.map((componentItem) =>
                checkEnabledFlags(componentItem.key) ? componentItem.component : null
            )}
        </div>
    );
}