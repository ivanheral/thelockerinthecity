declare module '*.module.css' {
    interface IClassNames {
        [key: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
