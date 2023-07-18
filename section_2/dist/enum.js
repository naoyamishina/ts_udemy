var SIZEEnum;
(function (SIZEEnum) {
    SIZEEnum[SIZEEnum["Small"] = 0] = "Small";
    SIZEEnum[SIZEEnum["Medium"] = 1] = "Medium";
    SIZEEnum[SIZEEnum["Large"] = 2] = "Large";
})(SIZEEnum || (SIZEEnum = {}));
console.log(SIZEEnum.Small);
// small と表示
console.log(SIZEEnum[0]);
console.log(SIZEEnum[5]);
// エラーがでない
//# sourceMappingURL=enum.js.map