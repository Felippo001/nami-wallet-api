"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamiWalletApi = void 0;
var ERROR = {
    FAILED_PROTOCOL_PARAMETER: 'Couldnt fetch protocol parameters from blockfrost',
    TX_TOO_BIG: 'Transaction too big'
};
function NamiWalletApi(NamiWalletObject, blockfrostApiKey, serializationLib) {
    return __awaiter(this, void 0, void 0, function () {
        function isEnabled() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Nami.isEnabled()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        function enable() {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, isEnabled()];
                        case 1:
                            if (!!(_a.sent())) return [3 /*break*/, 5];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, Nami.enable()];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            throw error_1;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        }
        function getAddress() {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _b = (_a = S.Address).from_bytes;
                            _d = (_c = Buffer).from;
                            return [4 /*yield*/, getAddressHex()];
                        case 1: return [2 /*return*/, _b.apply(_a, [_d.apply(_c, [_e.sent(), 'hex'])]).to_bech32()];
                    }
                });
            });
        }
        function getAddressHex() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Nami.getChangeAddress()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        function getRewardAddress() {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, _d, _e, _f, _g;
                return __generator(this, function (_h) {
                    switch (_h.label) {
                        case 0:
                            _c = (_b = S.RewardAddress).from_address;
                            _e = (_d = S.Address).from_bytes;
                            _g = (_f = Buffer).from;
                            return [4 /*yield*/, getRewardAddressHex()];
                        case 1: return [2 /*return*/, (_a = _c.apply(_b, [_e.apply(_d, [_g.apply(_f, [_h.sent(), 'hex'])])])) === null || _a === void 0 ? void 0 : _a.to_address().to_bech32()];
                    }
                });
            });
        }
        function getRewardAddressHex() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Nami.getRewardAddress()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        function getNetworkId() {
            return __awaiter(this, void 0, void 0, function () {
                var networkId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Nami.getNetworkId()];
                        case 1:
                            networkId = _a.sent();
                            return [2 /*return*/, {
                                    id: networkId,
                                    network: networkId == 1 ? 'mainnet' : 'testnet'
                                }];
                    }
                });
            });
        }
        function getUtxos() {
            return __awaiter(this, void 0, void 0, function () {
                var Utxos, UTXOS, _i, Utxos_1, utxo, assets;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getUtxosHex()];
                        case 1:
                            Utxos = (_a.sent()).map(function (u) { return S.TransactionUnspentOutput.from_bytes(Buffer.from(u, 'hex')); });
                            UTXOS = [];
                            for (_i = 0, Utxos_1 = Utxos; _i < Utxos_1.length; _i++) {
                                utxo = Utxos_1[_i];
                                assets = _utxoToAssets(utxo);
                                UTXOS.push({
                                    txHash: Buffer.from(utxo.input().transaction_id().to_bytes(), 'hex').toString('hex'),
                                    txId: utxo.input().index(),
                                    amount: assets
                                });
                            }
                            return [2 /*return*/, UTXOS];
                    }
                });
            });
        }
        function getAssets() {
            return __awaiter(this, void 0, void 0, function () {
                var Utxos, AssetsRaw, AssetsMap, _i, AssetsRaw_1, k, quantity;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getUtxos()];
                        case 1:
                            Utxos = _a.sent();
                            AssetsRaw = [];
                            Utxos.forEach(function (u) {
                                AssetsRaw.push.apply(AssetsRaw, u.amount.filter(function (a) { return a.unit != 'lovelace'; }));
                            });
                            AssetsMap = {};
                            for (_i = 0, AssetsRaw_1 = AssetsRaw; _i < AssetsRaw_1.length; _i++) {
                                k = AssetsRaw_1[_i];
                                quantity = parseInt(k.quantity);
                                if (!AssetsMap[k.unit])
                                    AssetsMap[k.unit] = 0;
                                AssetsMap[k.unit] += quantity;
                            }
                            return [2 /*return*/, Object.keys(AssetsMap).map(function (k) { return ({ unit: k, quantity: AssetsMap[k].toString() }); })];
                    }
                });
            });
        }
        function getUtxosHex() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Nami.getUtxos()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        }
        function send(_a) {
            var address = _a.address, _b = _a.amount, amount = _b === void 0 ? 0 : _b, _c = _a.assets, assets = _c === void 0 ? [] : _c, _d = _a.metadata, metadata = _d === void 0 ? null : _d, _e = _a.metadataLabel, metadataLabel = _e === void 0 ? '721' : _e;
            return __awaiter(this, void 0, void 0, function () {
                var PaymentAddress, protocolParameter, utxos, lovelace, ReceiveAddress, multiAsset, outputValue, minAda, outputs, RawTransaction;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0: return [4 /*yield*/, getAddress()];
                        case 1:
                            PaymentAddress = _f.sent();
                            return [4 /*yield*/, _getProtocolParameter()];
                        case 2:
                            protocolParameter = _f.sent();
                            return [4 /*yield*/, getUtxosHex()];
                        case 3:
                            utxos = (_f.sent()).map(function (u) { return S.TransactionUnspentOutput.from_bytes(Buffer.from(u, 'hex')); });
                            lovelace = Math.floor(amount * 1000000).toString();
                            ReceiveAddress = address;
                            multiAsset = _makeMultiAsset(assets);
                            outputValue = S.Value.new(S.BigNum.from_str(lovelace));
                            if (assets.length > 0)
                                outputValue.set_multiasset(multiAsset);
                            minAda = S.min_ada_required(outputValue, S.BigNum.from_str(protocolParameter.minUtxo || "1000000"));
                            if (S.BigNum.from_str(lovelace).compare(minAda) < 0)
                                outputValue.set_coin(minAda);
                            outputs = S.TransactionOutputs.new();
                            outputs.add(S.TransactionOutput.new(S.Address.from_bech32(ReceiveAddress), outputValue));
                            RawTransaction = _txBuilder({
                                PaymentAddress: PaymentAddress,
                                Utxos: utxos,
                                Outputs: outputs,
                                ProtocolParameter: protocolParameter,
                                Metadata: metadata,
                                MetadataLabel: metadataLabel,
                                Delegation: null
                            });
                            return [4 /*yield*/, _signSubmitTx(RawTransaction)];
                        case 4: return [2 /*return*/, _f.sent()];
                    }
                });
            });
        }
        function sendMultiple(_a) {
            var _b = _a.recipients, recipients = _b === void 0 ? [] : _b, _c = _a.metadata, metadata = _c === void 0 ? null : _c, _d = _a.metadataLabel, metadataLabel = _d === void 0 ? '721' : _d;
            return __awaiter(this, void 0, void 0, function () {
                var PaymentAddress, protocolParameter, utxos, outputs, _i, recipients_1, recipient, lovelace, ReceiveAddress, multiAsset, outputValue, minAda, RawTransaction;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, getAddress()];
                        case 1:
                            PaymentAddress = _e.sent();
                            return [4 /*yield*/, _getProtocolParameter()];
                        case 2:
                            protocolParameter = _e.sent();
                            return [4 /*yield*/, getUtxosHex()];
                        case 3:
                            utxos = (_e.sent()).map(function (u) { return S.TransactionUnspentOutput.from_bytes(Buffer.from(u, 'hex')); });
                            outputs = S.TransactionOutputs.new();
                            for (_i = 0, recipients_1 = recipients; _i < recipients_1.length; _i++) {
                                recipient = recipients_1[_i];
                                lovelace = Math.floor((recipient.amount || 0) * 1000000).toString();
                                ReceiveAddress = recipient.address;
                                multiAsset = _makeMultiAsset(recipient.assets || []);
                                outputValue = S.Value.new(S.BigNum.from_str(lovelace));
                                if ((recipient.assets || []).length > 0)
                                    outputValue.set_multiasset(multiAsset);
                                minAda = S.min_ada_required(outputValue, S.BigNum.from_str(protocolParameter.minUtxo || "1000000"));
                                if (S.BigNum.from_str(lovelace).compare(minAda) < 0)
                                    outputValue.set_coin(minAda);
                                outputs.add(S.TransactionOutput.new(S.Address.from_bech32(ReceiveAddress), outputValue));
                            }
                            RawTransaction = _txBuilder({
                                PaymentAddress: PaymentAddress,
                                Utxos: utxos,
                                Outputs: outputs,
                                ProtocolParameter: protocolParameter,
                                Metadata: metadata,
                                MetadataLabel: metadataLabel,
                                Delegation: null
                            });
                            return [4 /*yield*/, _signSubmitTx(RawTransaction)];
                        case 4: return [2 /*return*/, _e.sent()];
                    }
                });
            });
        }
        function delegate(_a) {
            var poolId = _a.poolId, _b = _a.metadata, metadata = _b === void 0 ? null : _b, _c = _a.metadataLabel, metadataLabel = _c === void 0 ? '721' : _c;
            return __awaiter(this, void 0, void 0, function () {
                function getDelegation(rewardAddr) {
                    return __awaiter(this, void 0, void 0, function () {
                        var stake;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _blockfrostRequest("/accounts/" + rewardAddr)];
                                case 1:
                                    stake = _a.sent();
                                    if (!stake || stake.error || !stake.pool_id)
                                        return [2 /*return*/, {}];
                                    return [2 /*return*/, {
                                            active: stake.active,
                                            rewards: stake.withdrawable_amount,
                                            poolId: stake.pool_id,
                                        }];
                            }
                        });
                    });
                }
                var protocolParameter, stakeKeyHash, _d, _e, _f, _g, _h, _j, delegation, _k, pool, poolHex, utxos, PaymentAddress, outputs, transaction, txHash;
                return __generator(this, function (_l) {
                    switch (_l.label) {
                        case 0: return [4 /*yield*/, _getProtocolParameter()];
                        case 1:
                            protocolParameter = _l.sent();
                            _e = (_d = S.RewardAddress).from_address;
                            _g = (_f = S.Address).from_bytes;
                            _j = (_h = Buffer).from;
                            return [4 /*yield*/, getRewardAddressHex()];
                        case 2:
                            stakeKeyHash = _e.apply(_d, [_g.apply(_f, [_j.apply(_h, [_l.sent(), 'hex'])])]).payment_cred().to_keyhash().to_bytes();
                            _k = getDelegation;
                            return [4 /*yield*/, getRewardAddress()];
                        case 3: return [4 /*yield*/, _k.apply(void 0, [_l.sent()])];
                        case 4:
                            delegation = _l.sent();
                            return [4 /*yield*/, _blockfrostRequest("/pools/" + poolId)];
                        case 5:
                            pool = _l.sent();
                            poolHex = pool.hex;
                            return [4 /*yield*/, getUtxosHex()];
                        case 6:
                            utxos = (_l.sent()).map(function (u) { return S.TransactionUnspentOutput.from_bytes(Buffer.from(u, 'hex')); });
                            return [4 /*yield*/, getAddress()];
                        case 7:
                            PaymentAddress = _l.sent();
                            outputs = S.TransactionOutputs.new();
                            outputs.add(S.TransactionOutput.new(S.Address.from_bech32(PaymentAddress), S.Value.new(S.BigNum.from_str(protocolParameter.keyDeposit))));
                            transaction = _txBuilder({
                                PaymentAddress: PaymentAddress,
                                Utxos: utxos,
                                ProtocolParameter: protocolParameter,
                                Outputs: outputs,
                                Delegation: {
                                    poolHex: poolHex,
                                    stakeKeyHash: stakeKeyHash,
                                    delegation: delegation
                                },
                                Metadata: metadata,
                                MetadataLabel: metadataLabel
                            });
                            return [4 /*yield*/, _signSubmitTx(transaction)];
                        case 8:
                            txHash = _l.sent();
                            return [2 /*return*/, txHash];
                    }
                });
            });
        }
        function signData(string) {
            return __awaiter(this, void 0, void 0, function () {
                var address, coseSign1Hex;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getAddressHex()];
                        case 1:
                            address = _a.sent();
                            return [4 /*yield*/, Nami.signData(address, Buffer.from(string, "ascii").toString('hex'))];
                        case 2:
                            coseSign1Hex = _a.sent();
                            return [2 /*return*/, coseSign1Hex];
                    }
                });
            });
        }
        //////////////////////////////////////////////////
        //Auxiliary
        function AsciiToBuffer(string) {
            return Buffer.from(string, "ascii");
        }
        function HexToBuffer(string) {
            return Buffer.from(string, "hex");
        }
        function AsciiToHex(string) {
            return AsciiToBuffer(string).toString('hex');
        }
        function HexToAscii(string) {
            return HexToBuffer(string).toString("ascii");
        }
        function BufferToAscii(buffer) {
            return buffer.toString('ascii');
        }
        function BufferToHex(buffer) {
            return buffer.toString("hex");
        }
        //////////////////////////////////////////////////
        function _makeMultiAsset(assets) {
            var AssetsMap = {};
            for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
                var asset = assets_1[_i];
                var _a = asset.unit.split('.'), policy = _a[0], assetName = _a[1];
                var quantity = asset.quantity;
                if (!Array.isArray(AssetsMap[policy])) {
                    AssetsMap[policy] = [];
                }
                AssetsMap[policy].push({
                    "unit": Buffer.from(assetName, 'ascii').toString('hex'),
                    "quantity": quantity
                });
            }
            var multiAsset = S.MultiAsset.new();
            for (var policy in AssetsMap) {
                var ScriptHash = S.ScriptHash.from_bytes(Buffer.from(policy, 'hex'));
                var Assets = S.Assets.new();
                var _assets = AssetsMap[policy];
                for (var _b = 0, _assets_1 = _assets; _b < _assets_1.length; _b++) {
                    var asset = _assets_1[_b];
                    var AssetName = S.AssetName.new(Buffer.from(asset.unit, 'hex'));
                    var BigNum = S.BigNum.from_str(asset.quantity);
                    Assets.insert(AssetName, BigNum);
                }
                multiAsset.insert(ScriptHash, Assets);
            }
            return multiAsset;
        }
        function _utxoToAssets(utxo) {
            var value = utxo.output().amount();
            var assets = [];
            assets.push({ unit: 'lovelace', quantity: value.coin().to_str() });
            if (value.multiasset()) {
                var multiAssets = value.multiasset().keys();
                for (var j = 0; j < multiAssets.len(); j++) {
                    var policy = multiAssets.get(j);
                    var policyAssets = value.multiasset().get(policy);
                    var assetNames = policyAssets.keys();
                    for (var k = 0; k < assetNames.len(); k++) {
                        var policyAsset = assetNames.get(k);
                        var quantity = policyAssets.get(policyAsset);
                        var asset = Buffer.from(policy.to_bytes()).toString('hex') + "." +
                            Buffer.from(policyAsset.name()).toString('ascii');
                        assets.push({
                            unit: asset,
                            quantity: quantity.to_str(),
                        });
                    }
                }
            }
            return assets;
        }
        function _txBuilder(_a) {
            var PaymentAddress = _a.PaymentAddress, Utxos = _a.Utxos, Outputs = _a.Outputs, ProtocolParameter = _a.ProtocolParameter, _b = _a.Metadata, Metadata = _b === void 0 ? null : _b, _c = _a.MetadataLabel, MetadataLabel = _c === void 0 ? '721' : _c, _d = _a.Delegation, Delegation = _d === void 0 ? null : _d;
            var MULTIASSET_SIZE = 5000;
            var VALUE_SIZE = 5000;
            var totalAssets = 0;
            CoinSelection.setLoader(S);
            CoinSelection.setProtocolParameters(ProtocolParameter.minUtxo.toString(), ProtocolParameter.linearFee.minFeeA.toString(), ProtocolParameter.linearFee.minFeeB.toString(), ProtocolParameter.maxTxSize.toString());
            var selection = CoinSelection.randomImprove(Utxos, Outputs, 20 + totalAssets);
            var inputs = selection.input;
            var txBuilder = S.TransactionBuilder.new(S.LinearFee.new(S.BigNum.from_str(ProtocolParameter.linearFee.minFeeA), S.BigNum.from_str(ProtocolParameter.linearFee.minFeeB)), S.BigNum.from_str(ProtocolParameter.minUtxo.toString()), S.BigNum.from_str(ProtocolParameter.poolDeposit.toString()), S.BigNum.from_str(ProtocolParameter.keyDeposit.toString()), MULTIASSET_SIZE, MULTIASSET_SIZE);
            for (var i = 0; i < inputs.length; i++) {
                var utxo = inputs[i];
                txBuilder.add_input(utxo.output().address(), utxo.input(), utxo.output().amount());
            }
            if (Delegation) {
                var certificates = S.Certificates.new();
                if (!Delegation.delegation.active) {
                    certificates.add(S.Certificate.new_stake_registration(S.StakeRegistration.new(S.StakeCredential.from_keyhash(S.Ed25519KeyHash.from_bytes(Buffer.from(Delegation.stakeKeyHash, 'hex'))))));
                }
                var poolKeyHash = Delegation.poolHex;
                certificates.add(S.Certificate.new_stake_delegation(S.StakeDelegation.new(S.StakeCredential.from_keyhash(S.Ed25519KeyHash.from_bytes(Buffer.from(Delegation.stakeKeyHash, 'hex'))), S.Ed25519KeyHash.from_bytes(Buffer.from(poolKeyHash, 'hex')))));
                txBuilder.set_certs(certificates);
            }
            var AUXILIARY_DATA;
            if (Metadata) {
                var METADATA = S.GeneralTransactionMetadata.new();
                METADATA.insert(S.BigNum.from_str(MetadataLabel), S.encode_json_str_to_metadatum(JSON.stringify(Metadata), 0));
                AUXILIARY_DATA = S.AuxiliaryData.new();
                AUXILIARY_DATA.set_metadata(METADATA);
                //const auxiliaryDataHash = S.hash_auxiliary_data(AUXILIARY_DATA)
                txBuilder.set_auxiliary_data(AUXILIARY_DATA);
            }
            for (var i = 0; i < Outputs.len(); i++) {
                txBuilder.add_output(Outputs.get(i));
            }
            var change = selection.change;
            var changeMultiAssets = change.multiasset();
            // check if change value is too big for single output
            if (changeMultiAssets && change.to_bytes().length * 2 > VALUE_SIZE) {
                var partialChange = S.Value.new(S.BigNum.from_str('0'));
                var partialMultiAssets_1 = S.MultiAsset.new();
                var policies_1 = changeMultiAssets.keys();
                var makeSplit = function () {
                    for (var j = 0; j < changeMultiAssets.len(); j++) {
                        var policy = policies_1.get(j);
                        var policyAssets = changeMultiAssets.get(policy);
                        var assetNames = policyAssets.keys();
                        var assets = S.Assets.new();
                        for (var k = 0; k < assetNames.len(); k++) {
                            var policyAsset = assetNames.get(k);
                            var quantity = policyAssets.get(policyAsset);
                            assets.insert(policyAsset, quantity);
                            //check size
                            var checkMultiAssets = S.MultiAsset.from_bytes(partialMultiAssets_1.to_bytes());
                            checkMultiAssets.insert(policy, assets);
                            var checkValue = S.Value.new(S.BigNum.from_str('0'));
                            checkValue.set_multiasset(checkMultiAssets);
                            if (checkValue.to_bytes().length * 2 >=
                                VALUE_SIZE) {
                                partialMultiAssets_1.insert(policy, assets);
                                return;
                            }
                        }
                        partialMultiAssets_1.insert(policy, assets);
                    }
                };
                makeSplit();
                partialChange.set_multiasset(partialMultiAssets_1);
                var minAda = S.min_ada_required(partialChange, S.BigNum.from_str(ProtocolParameter.minUtxo));
                partialChange.set_coin(minAda);
                txBuilder.add_output(S.TransactionOutput.new(S.Address.from_bech32(PaymentAddress), partialChange));
            }
            txBuilder.add_change_if_needed(S.Address.from_bech32(PaymentAddress));
            var transaction = S.Transaction.new(txBuilder.build(), S.TransactionWitnessSet.new(), AUXILIARY_DATA);
            var size = transaction.to_bytes().length * 2;
            if (size > ProtocolParameter.maxTxSize)
                throw ERROR.TX_TOO_BIG;
            return transaction.to_bytes();
        }
        function _signSubmitTx(transactionRaw) {
            return __awaiter(this, void 0, void 0, function () {
                var transaction, witneses, signedTx, txhash;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            transaction = S.Transaction.from_bytes(transactionRaw);
                            return [4 /*yield*/, Nami.signTx(Buffer.from(transaction.to_bytes()).toString('hex'))];
                        case 1:
                            witneses = _a.sent();
                            signedTx = S.Transaction.new(transaction.body(), S.TransactionWitnessSet.from_bytes(Buffer.from(witneses, "hex")), transaction.auxiliary_data());
                            return [4 /*yield*/, Nami.submitTx(Buffer.from(signedTx.to_bytes()).toString('hex'))];
                        case 2:
                            txhash = _a.sent();
                            return [2 /*return*/, txhash];
                    }
                });
            });
        }
        function _getProtocolParameter() {
            return __awaiter(this, void 0, void 0, function () {
                var latestBlock, p;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, _blockfrostRequest("/blocks/latest")];
                        case 1:
                            latestBlock = _a.sent();
                            if (!latestBlock)
                                throw ERROR.FAILED_PROTOCOL_PARAMETER;
                            return [4 /*yield*/, _blockfrostRequest("/epochs/" + latestBlock.epoch + "/parameters")]; //
                        case 2:
                            p = _a.sent() //
                            ;
                            if (!p)
                                throw ERROR.FAILED_PROTOCOL_PARAMETER;
                            return [2 /*return*/, {
                                    linearFee: {
                                        minFeeA: p.min_fee_a.toString(),
                                        minFeeB: p.min_fee_b.toString(),
                                    },
                                    minUtxo: '1000000',
                                    poolDeposit: p.pool_deposit,
                                    keyDeposit: p.key_deposit,
                                    maxTxSize: p.max_tx_size,
                                    slot: latestBlock.slot,
                                }];
                    }
                });
            });
        }
        function _blockfrostRequest(endpoint) {
            return __awaiter(this, void 0, void 0, function () {
                var networkId, networkEndpoint, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getNetworkId()];
                        case 1: return [4 /*yield*/, (_a.sent()).id];
                        case 2:
                            networkId = _a.sent();
                            networkEndpoint = networkId == 0 ?
                                'https://cardano-testnet.blockfrost.io/api/v0'
                                :
                                    'https://cardano-mainnet.blockfrost.io/api/v0';
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 6, , 7]);
                            return [4 /*yield*/, fetch("" + networkEndpoint + endpoint, {
                                    headers: {
                                        project_id: blockfrostApiKey
                                    }
                                })];
                        case 4: return [4 /*yield*/, (_a.sent()).json()];
                        case 5: return [2 /*return*/, _a.sent()];
                        case 6:
                            error_2 = _a.sent();
                            return [2 /*return*/, null];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        var S, _a, Buffer, Nami, fetch, CoinSelection;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = serializationLib;
                    if (_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('@emurgo/cardano-serialization-lib-asmjs')); })];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    S = _a;
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('buffer')); })];
                case 3:
                    Buffer = (_b.sent()).Buffer;
                    Nami = NamiWalletObject;
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('node-fetch')); })];
                case 4:
                    fetch = (_b.sent()).default || window.fetch;
                    return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require('./coinSelection')); })];
                case 5:
                    CoinSelection = (_b.sent()).default;
                    return [2 /*return*/, {
                            isEnabled: isEnabled,
                            enable: enable,
                            getAddress: getAddress,
                            getAddressHex: getAddressHex,
                            getRewardAddress: getRewardAddress,
                            getRewardAddressHex: getRewardAddressHex,
                            getNetworkId: getNetworkId,
                            getUtxos: getUtxos,
                            getAssets: getAssets,
                            getUtxosHex: getUtxosHex,
                            send: send,
                            sendMultiple: sendMultiple,
                            delegate: delegate,
                            auxiliary: {
                                Buffer: Buffer,
                                AsciiToBuffer: AsciiToBuffer,
                                HexToBuffer: HexToBuffer,
                                AsciiToHex: AsciiToHex,
                                HexToAscii: HexToAscii,
                                BufferToAscii: BufferToAscii,
                                BufferToHex: BufferToHex,
                            }
                        }];
            }
        });
    });
}
exports.NamiWalletApi = NamiWalletApi;
//# sourceMappingURL=index.js.map