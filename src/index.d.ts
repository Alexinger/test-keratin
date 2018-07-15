declare namespace NodeJS {
    export interface Global {
        setupTestBed: any;
        $: any;
        jQuery: any;
    }
}

declare var setupTestBed: any;