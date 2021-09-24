export default CoinSelection;
/**
 * - List of 'Value' object
 */
export type AmountList = any[];
/**
 * - List of UTxO
 */
export type UTxOList = any[];
/**
 * - Coin Selection algorithm core object
 */
export type UTxOSelection = {
    /**
     * - Accumulated UTxO set.
     */
    selection: UTxOList;
    /**
     * - Remaining UTxO set.
     */
    remaining: UTxOList;
    /**
     * - Remaining UTxO set.
     */
    subset: UTxOList;
    /**
     * - UTxO amount of each requested token
     */
    amount: any;
};
/**
 * - ImproveRange
 */
export type ImproveRange = {
    /**
     * - Requested amount * 2
     */
    ideal: any;
    /**
     * - Requested amount * 3
     */
    maximum: any;
};
/**
 * - Coin Selection algorithm return
 */
export type SelectionResult = {
    /**
     * - Accumulated UTxO set.
     */
    input: UTxOList;
    /**
     * - Requested outputs.
     */
    output: any;
    /**
     * - Remaining UTxO set.
     */
    remaining: UTxOList;
    /**
     * - UTxO amount of each requested token
     */
    amount: any;
    /**
     * - Accumulated change amount.
     */
    change: any;
};
export type ProtocolParameters = {
    minUTxO: any;
    minFeeA: any;
    minFeeB: any;
    maxTxSize: any;
};
declare namespace CoinSelection {
    function setLoader(lib: any): void;
    function setProtocolParameters(minUTxO: any, minFeeA: any, minFeeB: any, maxTxSize: any): void;
    function randomImprove(inputs: UTxOList, outputs: any, limit: any): SelectionResult;
}
//# sourceMappingURL=coinSelection.d.ts.map