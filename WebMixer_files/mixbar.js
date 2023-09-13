var mxBarPageSl = Array.prototype.slice.call(document.querySelectorAll('.mix__bar .page__selectors .selector')); var mxBarPages = Array.prototype.slice.call(document.querySelectorAll('.mix__bar .mix__bar__pages .mix__bar__page')); mxBarPageSl.forEach(element => {
    element.addEventListener('click', function () {
        mxBarPageSl.forEach(element => { element.setAttribute('data-selected', '0'); }); mxBarPages.forEach(element => { element.setAttribute('data-selected', '0'); }); this.setAttribute('data-selected', '1'); let selectedId = mxBarPageSl.indexOf(this); mxBarPages[selectedId].setAttribute('data-selected', '1'); mxBarPageSl[selectedId].setAttribute('data-layer', (mxBarPageSl.length - 1).toString()); let f = selectedId + 1; let layer = mxBarPageSl.length - 1; for (let i = 0; i < mxBarPageSl.length - 1; i++) {
            layer--; if (f > mxBarPageSl.length - 1) { f = 0; layer = 0; }
            mxBarPageSl[f].setAttribute('data-layer', Math.abs(layer).toString()); f++;
        }
    });
});