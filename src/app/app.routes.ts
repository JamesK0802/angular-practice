import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComponent } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { CardExample } from './components/card-example/card-example';
import { UserMaster } from './components/user-master/user-master';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { BatchMaster } from './components/batch-master/batch-master';
import { ProjectCompetation } from './components/project-competation/project-competation';

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
        path: "users",
        component: UserMaster
    },
    {
        path: "reactive-form",
        component: ReactiveUser
    },
    {
        path: "batchMaster",
        component: BatchMaster
    },
    {
        path: "competation",
        component: ProjectCompetation
    },
    {
        path: "",
        redirectTo: "databinding",
        pathMatch: "full"
    },
    {
        path: "**",
        component: NotFound
    }
];
