import { Buffer } from 'buffer';
declare type Endpoints = {
    isEnabled: () => Promise<boolean>;
    enable: () => Promise<void>;
    getAddress: () => Promise<string>;
    getAddressHex: () => Promise<string>;
    getRewardAddress: () => Promise<string>;
    getRewardAddressHex: () => Promise<string>;
    getNetworkId: () => Promise<{
        id: number;
        network: string;
    }>;
    getUtxos: () => Promise<Utxo[]>;
    getAssets: () => Promise<Asset[]>;
    getUtxosHex: () => Promise<string[]>;
    send: (data: Send) => Promise<string>;
    sendMultiple: (data: SendMultiple) => Promise<string>;
    delegate: (data: Delegate) => Promise<string>;
    auxiliary: Auxiliary;
};
declare type Delegate = {
    poolId: string;
    metadata?: any;
    metadataLabel?: string;
};
declare type Utxo = {
    txHash: string;
    txId: number;
    amount: Asset[];
};
declare type Asset = {
    unit: string;
    quantity: string;
};
declare type Send = {
    address: string;
    amount?: number;
    assets?: Asset[];
    metadata?: any;
    metadataLabel?: string;
};
declare type SendMultiple = {
    recipients: {
        address: string;
        amount?: number;
        assets?: Asset[];
    }[];
    metadata?: any;
    metadataLabel?: string;
};
declare type Auxiliary = {
    Buffer: object;
    AsciiToBuffer: (string: string) => Buffer;
    HexToBuffer: (string: string) => Buffer;
    AsciiToHex: (string: string) => string;
    HexToAscii: (string: string) => string;
    BufferToAscii: (buffer: Buffer) => string;
    BufferToHex: (buffer: Buffer) => string;
};
export declare function NamiWalletApi(NamiWalletObject: any, blockfrostApiKey: string, serializationLib?: any): Promise<Endpoints>;
export {};
//# sourceMappingURL=index.d.ts.map