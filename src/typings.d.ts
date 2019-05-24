/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module "*.json" {
    const value: any;
    export default value;
}

type BigInt = number
declare const BigInt: typeof Number