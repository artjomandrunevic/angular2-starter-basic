"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var project_component_1 = require('./project/project.component');
var project_detail_component_1 = require('./project/project-detail.component');
var not_found_component_1 = require('./404/not-found.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'project', component: project_component_1.ProjectComponent },
    { path: 'project/:username', component: project_detail_component_1.DetailProjectComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map