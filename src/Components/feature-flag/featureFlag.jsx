import React from 'react'
import LightDarkMode from '../light-dark-mode/lightDarkMode'
import TreeView from '../Tree-View/index'
import RandomColor from '../Random-color/randomColor'
import Accordian from '../accordian/index'
import { useContext } from 'react'
import { FeatureFlagContext } from './context'

const FeatureFlag = () => {
    const [loading, enabledFlags] = useContext(FeatureFlagContext)
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />
        }, {
            key: 'showAccordian',
            component: <Accordian />
        }, {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        }
    ]
    function checkedEnabledFlags(getCurrentId) {
        return enabledFlags(getCurrentId)
    }
    if (loading) return <h1>Loading data please wait</h1>
    return (
        <div>
            <h1>

                feature-flag
            </h1>
            {
                componentsToRender.map(component => checkedEnabledFlags(component.key) ? component.component : null)
            }
        </div>
    )
}

export default FeatureFlag