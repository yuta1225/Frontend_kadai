// 分かりやすくするために回転前の座標と回転する角度を入力したら回転後の座標が表示されるように関数rotate()を作成しました。
document.getElementById('form').onsubmit = function rotate(event) {
    event.preventDefault();
    const x = document.getElementById('x-grid').value;
    const y = document.getElementById('y-grid').value;
    const θ = document.getElementById('θ-grid').value * (Math.PI / 180);
    
    //　回転後の座標(a, b)を求める。
    var a = Math.cos(θ) * x - Math.sin(θ) * y;
    var b = Math.sin(θ) * x + Math.cos(θ) * y;

    // 丸め誤差により誤差が生じるため、小数点第2位以下を四捨五入する。
    a = Math.round(10 * a) / 10;
    b = Math.round(10 * b) / 10;
    document.getElementById('output').textContent = `(${a}, ${b})`;
}