/// <reference path="../../localtypings/pxtblockly.d.ts" />
namespace pxtblockly {
    export class FieldImageLabel extends Blockly.FieldImage implements Blockly.FieldCustom {
        public isFieldCustom_ = true;

        constructor(value: string, options: Blockly.FieldCustomOptions, opt_validator?: Function) {
            let width: any, height: any
            let allow = false
            let win = (window as any)
            let labelSize = win.labelSize
            if (labelSize == null) {
                console.log("No LabelSize")
            }
            if (win.labelSize[value] == undefined) {
                console.log("Warn", value)
            }

            super(
                // `https://raw.githubusercontent.com/curlyz/codelab-esp-pngelement/master/png/${value}.png`,
                // require(`file://../../_pngelement/codelab-esp-pngelement/png/${value}.png`),
                // `/static/imagelabel/${value}.png`,
                `docs/static/imagelabel/${value}.png`,
                // `https://learn.garastem.com/api/v1/assets/label/${value}`,
                // 15 * value.length,
                // 20,
                (win.labelSize[value]?.width / win.labelSize[value]?.height) * 34 || 15 * value.length,
                34,
                // 15 * value.length,
                // 20,
                `.`,
            );
        }
        getValue() {
            // getText() returns the value that is set by calls to setValue()
            return `"-"`;
        }

    }
}

/// <reference path="../../localtypings/pxtblockly.d.ts" />
namespace pxtblockly {
    export class FieldImageIcon extends Blockly.FieldImage implements Blockly.FieldCustom {
        public isFieldCustom_ = true;

        constructor(value: string, options: Blockly.FieldCustomOptions, opt_validator?: Function) {
            super(
                value,
                20,
                20,
                "asd",
            );
        }
        getValue() {
            // getText() returns the value that is set by calls to setValue()
            return `"-"`;
        }

    }
}



