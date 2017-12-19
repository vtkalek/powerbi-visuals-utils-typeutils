/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
export var PixelConverter;
(function (PixelConverter) {
    const PxPtRatio = 4 / 3;
    const PixelString = "px";
    /**
     * Appends 'px' to the end of number value for use as pixel string in styles
     */
    function toString(px) {
        return px + PixelString;
    }
    PixelConverter.toString = toString;
    /**
     * Converts point value (pt) to pixels
     * Returns a string for font-size property
     * e.g. fromPoint(8) => '24px'
     */
    function fromPoint(pt) {
        return toString(fromPointToPixel(pt));
    }
    PixelConverter.fromPoint = fromPoint;
    /**
     * Converts point value (pt) to pixels
     * Returns a number for font-size property
     * e.g. fromPoint(8) => 24px
     */
    function fromPointToPixel(pt) {
        return (PxPtRatio * pt);
    }
    PixelConverter.fromPointToPixel = fromPointToPixel;
    /**
     * Converts pixel value (px) to pt
     * e.g. toPoint(24) => 8
     */
    function toPoint(px) {
        return px / PxPtRatio;
    }
    PixelConverter.toPoint = toPoint;
})(PixelConverter || (PixelConverter = {}));
//# sourceMappingURL=pixelConverter.js.map