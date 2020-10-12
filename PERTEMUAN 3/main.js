function main() {
    var canvas = document.getElementById("myCanvas");   // pointer canvas
    var gl = canvas.getContext("webgl");    // pointer ke context webGL

    /**
        * A (-0.5, 0.5); B (-0.5, -0.5); C (0.5, -0.5)
        */
    var vertices = [
    -0.5, 0.5,      // Titik A 
    -0.5, -0.5,     // Titik B
    0.5, -0.5       // Titik C
    ];

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = document.getElementById("vertexShaderCode").text;

    /* var vertexShaderCode = `
        void main() {
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    `;     // masih sekedar string biasa */
    
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        // dokumen yang menampung listing code pada string vertexShaderCode
    gl.shaderSource(vertexShader, vertexShaderCode);
        // masukkin code dari vertexShaderCode ke dokumen kosong vertexShader
    gl.compileShader(vertexShader);
        // ibarat dari shader.c jadi shader.o (jadi object)
    
    var vertexShaderCode = document.getElementById("fragmentShaderCode").text;

    /* var fragmentShaderCode = `      
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `;     // fragment shader */

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
        // file penampung hasil object linking
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    var primitive = gl.POINTS;
    var offset = 0;
    var count = 3;  // Jumlah vertex yang akan digambar
    gl.drawArrays(primitive, offset, count);
}
