import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComponent } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { CardExample } from './components/card-example/card-example';

export const routes: Routes = [
    {
        path: "databinding",
        component: DataBinding
    },
    {
        path: "signal",
        component: SignalComponent
    },
    {
        path: "variables",
        component: Variables
    },
    {
        path: "control_Flow",
        component: ControlFlow
    },
    {
        path: "dynamic-css-class",
        component: DynamicCssClass
    },
    {
        path: "card",
        component: CardExample
    },
    {
        path:"",
        redirectTo: "databinding",
        pathMatch: "full"
    },
    {
        path:"**",
        component:NotFound
    }
];
