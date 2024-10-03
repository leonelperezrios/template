import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {SidebarModule} from "primeng/sidebar";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputSwitchModule} from "primeng/inputswitch";
import {HttpClientModule} from "@angular/common/http";
import {BadgeModule} from "primeng/badge";
import {RouterModule} from "@angular/router";
import {MenuModule} from "primeng/menu";
import {SvgThemeColorDirective} from "@directives";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PasswordModule,
        CheckboxModule,
        ReactiveFormsModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        NgOptimizedImage,
        SidebarModule,
        RadioButtonModule,
        InputSwitchModule,
        FormsModule,
        HttpClientModule,
        BadgeModule,
        RouterModule,
        MenuModule,
        PasswordModule,

        SvgThemeColorDirective,
    ],
    exports: [
        CommonModule,
        PasswordModule,
        CheckboxModule,
        ReactiveFormsModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        NgOptimizedImage,
        SidebarModule,
        RadioButtonModule,
        InputSwitchModule,
        FormsModule,
        HttpClientModule,
        BadgeModule,
        RouterModule,
        MenuModule,
        PasswordModule,

        SvgThemeColorDirective,
    ]
})
export class SharedModule {
}
