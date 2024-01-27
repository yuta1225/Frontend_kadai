var before_element = ''; // 直前の文字
var before_element02 = ''; //　後ろから2番目の文字
var formula = ''; // JavaScriptで演算可能な数式に変換してformulaに代入
var result = document.getElementById('result');

// 数式をリセットする
del = () =>  {
    result.value = '';
}
// 直前の文字を削除する
cle = () => {
    result.value = result.value.slice(0, result.value.length - 1);
}
// 数値に関する処理
display = (number) => {
    if ('0' === number.value && '0' === result.value) { // 数値が0の時、連続で0を追加しない
        return;
    }
    else { 
        result.value += number.value;
    }
}
// 演算子に関する処理
operate = (operator) => {
    // 数式の先頭に使えない演算子が来たら演算子を追加しない
    if(result.value === '') {
        switch (operator.value) {
            case '%':
                return;
            case '/':
                return;
            case '*':
                return;
        }
    }
    // 連続で演算子もしくは小数点が来たら演算子を追加しない
    var expression = ''; // 画面上で分かりやすい表記にしてexpressionに代入
    before_element = result.value.slice(-1);
    before_element02 = result.value.slice(-2);
    if ('%' === before_element || '÷' === before_element || '×' === before_element || '−' === before_element || '＋' === before_element || '.' === before_element) {
        return;
    } else if (' ' === before_element || ('%' === before_element02 || '÷' === before_element02 || '×' === before_element02 || '−' === before_element02 || '＋' === before_element02 || '.' === before_element02)) {
        return;
    } else {
        switch (operator.value) {
            case '÷':
                expression = ' ÷ '
                break;
        
            case '×':
                expression = ' × ';
                break;
        }
        switch (operator.value) {
            case '%':
                expression = ' % ';
                break;
        
            case '−':
                expression = ' − ';
                break;

            case '＋':
                expression = ' ＋ ';
        }
        result.value += expression;
    }
}
// 少数(demical)に関する処理
demical = (point) => {
    before_element = result.value.slice(-1);
    before_element02 = result.value.slice(-2);
    if (result.value === '') { // 先頭に小数点を追加しない
        return;
    } else if ('%' === before_element || '÷' === before_element || '×' === before_element || '−' === before_element || '＋' === before_element || '.' === before_element || ' ' === before_element) {
        return; // 演算子の次に小数点を追加しない
    } else if (' ' === before_element && ('%' === before_element02 || '÷' === before_element02 || '×' === before_element02 || '−' === before_element02 || '＋' === before_element02 || '.' === before_element02)) {
        return;
    } 
    else {
        result.value += point.value;
    }
}
// 数式(formula)を計算して出力する
calculate = () => {
    formula = result.value.replace(/＋/g, '+').replace(/−/g, '-').replace(/×/g, '*').replace(/÷/g, '/')

    // 文字列formulaをFunction関数によって計算する
    fin = Function('"use strict";return ('+formula+')')();
    if (fin < 0) { // 分かりやすくするために負の演算子を全角表示にする
        fin = `− ${Math.abs(fin)}`;
    }
    result.value = fin;
}
