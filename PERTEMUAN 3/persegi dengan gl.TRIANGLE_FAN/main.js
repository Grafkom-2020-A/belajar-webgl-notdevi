function main() {
    var canvas = document.getElementById("myCanvas");   // pointer canvas
    var gl = canvas.getContext("webgl");    // pointer ke context webGL

    // Definisi vertices pada segitiga
    /**
     * A (-0.5, 0.5); B (-0.5, -0.5); C (0.5, -0.5); D (0.5, 0.5)
     */
    var vertices = [
        [-0.8, 0.7],      // Titik A 
        [-0.2, -0.7],     // Titik B
        [0.2, -0.7],      // Titik C
        [-0.4, 0.7],        // Titik D

        [0.8, 0.7],
        [0.2, -0.7],
        [-0.2, -0.7],
        [0.4, 0.7]
    ];

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
        // mutuskan bind

    var vertexShaderCode = document.getElementById("vertexShaderCode").text;
    
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        // dokumen yang menampung listing code pada string vertexShaderCode
    gl.shaderSource(vertexShader, vertexShaderCode);
        // masukkin code dari vertexShaderCode ke dokumen kosong vertexShader
    gl.compileShader(vertexShader);
        // ibarat dari shader.c jadi shader.o (jadi object)
    
    var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;

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
        // ngehubungin buffer lagi
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
        // pointer yang nyambungin JS dengan attribut di vertex shader
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
        // attribute nge-point ke position buffer
        // stride : mulai dari index buffer brp data yang di point itu
        // misal : position 2 elem., color 3 elem., maka stride color -> 2
    gl.enableVertexAttribArray(aPosition);
        // menjamin proses buffer sudah berjalan

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    var primitive = gl.TRIANGLE_FAN;
        // bedanya triangle fan -> titik akhir nyambung ke titik yang paling awal (D-A), baru di fill
        // (A-B, A-C, C-B -- A-C, A-D, D-C) -> selalu ada titik pusatnya
        // triangle strip -> nyambung ke yang paling dekat dengan titik yang baru
        // (A-B, B-C, C-A -- B-C, C-D, D-B)
        var offset = 0;
    //var count = 4;  // Jumlah vertex yang akan digambar
        // Jumlah definisi titik
    gl.drawArrays(primitive, offset, vertices.length);
}
