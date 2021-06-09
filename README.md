# SOLID Principle

# Service

Easy example:
https://stackoverflow.com/questions/37002522/is-it-possible-to-inject-interface-with-angular2

```typescript
export declare const APP_INITIALIZER: InjectionToken<readonly (() => Observable<unknown> | Promise<unknown> | void)[]>;

@NgModule({
    declarations: [...],
    imports: [...],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: (appConfigurationService: AppConfigurationService) => appConfigurationService.loadConfiguration();,
        deps: [AppConfigurationService],
        multi: true
    }]
})
```

```typescript
export declare const LOGGER: InjectionToken<Logger[]>;

@NgModule({
    declarations: [...],
    imports: [...],
    providers: [{
        provide: LOGGER,
        useClass: ConsoleLogger,
        multi: true
    },{
        provide: LOGGER,
        useClass: ApplicationInsightLogger,
        multi: true
    }]
})
```    

## Suggestion

1. libs -> repositories
1. libs -> infrastructure -> `technology name`
1. libs -> services -> abstractions
1. libs -> services


## Reference
GitHub:     https://github.com/nirkaufman/taeqwondi
Video: https://www.youtube.com/watch?v=CVH0v3EmCfs&t=252s


# NGRX Best Practice
https://blog.strongbrew.io/Redux-best-practices/

https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7



## Generate

ng generate @nrwl/angular:library --name=hero --directory=domain --enableIvy --buildable --unitTestRunner=karma --tags=scope:domain,type:feature 
ng generate @nrwl/angular:library --name=hero --directory=repository --enableIvy --buildable --unitTestRunner=karma --tags=scope:repository,type:feature 
ng generate @nrwl/angular:library --name=hero --directory=application --enableIvy --buildable --unitTestRunner=karma --tags=scope:application,type:feature 
ng generate @nrwl/angular:library --name=hero --directory=infrastructure --enableIvy --buildable --unitTestRunner=karma --tags=scope:infrastructure,type:feature 
ng generate @nrwl/angular:library --name=hero --directory=presentation --enableIvy --buildable --unitTestRunner=karma --tags=scope:presentation,type:feature 

ng generate @nrwl/angular:library --name=edit-hero --directory=presentation --enableIvy --buildable --unitTestRunner=karma --tags=scope:presentation,type:feature 

ng generate @nrwl/angular:library --name=pipes/to-string --directory=shared --enableIvy --buildable --unitTestRunner=karma --tags=scope:shared,type:pipe 

## component
ng generate @schematics/angular:component --name=hero-ui --project=presentation-hero --module=presentation-hero --style=scss --changeDetection=OnPush --path=libs/presentation/hero/src/lib

## pipe
ng generate @schematics/angular:pipe --name=truncate --project=shared-pipes-truncate --module=shared-pipes-truncate --export
ng generate @schematics/angular:pipe --name=toString --project=shared-pipes-to-string --module=shared-pipes-to-string --export

## remove libs
ng generate @nrwl/workspace:remove --projectName=hero
ng generate @nrwl/workspace:remove --projectName=shared-pipes-join-array

ng generate @nrwl/angular:ngrx --name=hero --module=libs/hero2/src/lib/hero2.module.ts --barrels --facade

feature
-- domain
-- -- [class] domains
-- -- -- aggregate
-- -- -- value object

-- repository
-- -- [interface] repositories

-- application
-- -- [interface] services
-- -- [class] services

-- infrastructure
-- -- [class] repositories

-- presentation
-- -- smart container

domains
-- hero




https://angular.io/guide/dependency-injection-in-action#alias-providers-useexisting