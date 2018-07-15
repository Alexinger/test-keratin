import { TestBed, async, TestModuleMetadata } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModulePro } from 'app/typescripts/pro';
import { MDBBootstrapModule } from 'app/typescripts/free';
import { APP_BASE_HREF } from '@angular/common';

const resetTestingModule = TestBed.resetTestingModule,
    preventAngularFromResetting = () => TestBed.resetTestingModule = () => TestBed;

global.setupTestBed = (moduleDef: TestModuleMetadata) => {
    if (!moduleDef.imports) {
        moduleDef.imports = [];
    }
    if (!moduleDef.providers) {
        moduleDef.providers = [];
    }
    moduleDef.schemas = [NO_ERRORS_SCHEMA];
    moduleDef.imports.push(RouterModule.forRoot([]));
    moduleDef.imports.push(MDBBootstrapModule.forRoot());
    moduleDef.imports.push(MDBBootstrapModulePro.forRoot());
    moduleDef.providers.push([{ provide: APP_BASE_HREF, useValue: '/' }]);
    beforeAll(async(async () => {
        resetTestingModule();
        preventAngularFromResetting();
        TestBed.configureTestingModule(moduleDef);
        await TestBed.compileComponents();
    }));

    moduleDef.providers.push({ provide: APP_BASE_HREF, useValue: '/' });
    afterAll(() => resetTestingModule());
};
