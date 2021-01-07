function main() {
    var canvas = document.getElementById("myCanvas");

    var gl = canvas.getContext("webgl");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var vertices = [];
  
    var cubePoints = [
      // DEPAN
      [0.6875, 0.375,  0.1],   // A, 1
      [0.8125, 0.375,  0.1],   // B, 2
      [0.8125, 0.59375, 0.1],   // C, 3 
      [0.65625, 0.875, 0.1],   // D, 4
      [0.34375, 0.875, 0.1],   // E, 5
      [0.1875, 0.59375, 0.1],   // F, 6
      [0.1875, 0.1375, 0.1],   // G, 7
      [0.3125, -0.125, 0.1],   // H, 8
      [0.625, -0.125, 0.1],   // I, 9
      [0.6875, -0.25, 0.1],   // J, 10
      [0.6875, -0.5, 0.1],   // K, 11
      [0.625, -0.625, 0.1],   // L, 12
      [0.375, -0.625, 0.1],   // M, 13
      [0.3125, -0.5, 0.1],   // N, 14
      [0.3125, -0.375, 0.1],   // O, 15
      [0.1875, -0.375, 0.1],   // P, 16
      [0.1875, -0.59375, 0.1],   // Q, 17
      [0.34375, -0.875, 0.1],   // R, 18
      [0.65625, -0.875, 0.1],   // S, 19
      [0.8125, -0.59375, 0.1],   // T, 20
      [0.8125, -0.1375, 0.1],   // U, 21
      [0.6875, 0.125, 0.1],   // V, 22
      [0.375, 0.125, 0.1],   // W, 23
      [0.3125, 0.25, 0.1],   // X, 24
      [0.3125, 0.5, 0.1],   // Y, 25
      [0.375, 0.625, 0.1],   // Z, 26
      [0.625, 0.625, 0.1],   // I, 27
      [0.6875, 0.5, 0.1],   // I, 28

      // BELAKANG
      [0.6875, 0.375, 0.0],   // A, 28
      [0.8125, 0.375, 0.0],   // B, 29
      [0.8125, 0.59375, 0.0],   // C, 30 
      [0.65625, 0.875, 0.0],   // D, 31
      [0.34375, 0.875, 0.0],   // E, 32
      [0.1875, 0.59375, 0.0],   // F, 33
      [0.1875, 0.1375, 0.0],   // G, 34
      [0.3125, -0.125, 0.0],   // H, 35
      [0.625, -0.125, 0.0],   // I, 36
      [0.6875, -0.25, 0.0],   // J, 37
      [0.6875, -0.5, 0.0],   // K, 38
      [0.625, -0.625, 0.0],   // L, 39
      [0.375, -0.625, 0.0],   // M, 40
      [0.3125, -0.5, 0.0],   // N, 41
      [0.3125, -0.375, 0.0],   // O, 42
      [0.1875, -0.375, 0.0],   // P, 43
      [0.1875, -0.59375, 0.0],   // Q, 44
      [0.34375, -0.875, 0.0],   // R, 45
      [0.65625, -0.875, 0.0],   // S, 46
      [0.8125, -0.59375, 0.0],   // T, 47
      [0.8125, -0.1375, 0.0],   // U, 48
      [0.6875, 0.125, 0.0],   // V, 49
      [0.375, 0.125, 0.0],   // W, 50
      [0.3125, 0.25, 0.0],   // X, 51
      [0.3125, 0.5, 0.0],   // Y, 52
      [0.375, 0.625, 0.0],   // Z, 53
      [0.625, 0.625, 0.0],   // I, 54
      [0.6875, 0.5, 0.0]   // I, 55
    ];
  
    var cubeColors = [
      [],
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih

      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah
      [1.0, 0.0, 0.0],    // merah

      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau
      [0.0, 1.0, 0.0],    // hijau

      []
    ];
  
    function quad(a, b, c, d) {
      var indices = [a, b, c, c, d, a];
      for (var i=0; i<indices.length; i++) {
        for (var j=0; j<3; j++) {
          vertices.push(cubePoints[indices[i]][j]);
        }
        for (var j=0; j<3; j++) {
          vertices.push(cubeColors[a][j]);
        }
      }
    }
    quad(27, 0, 1, 2); // depan
    quad(0, 1, 2, 27); // depan
    quad(3, 2, 27, 26); // depan
    quad(26, 3, 4, 25); // depan
    quad(25, 4, 5, 24); // depan
    quad(6, 23, 24, 5); // depan
    quad(6, 7, 22, 23); // depan
    quad(7, 8, 21, 22); // depan
    quad(9, 20, 21, 8); // depan
    quad(10, 19, 20, 9); // depan
    quad(11, 18, 19, 10); // depan
    quad(17, 18, 11, 12); // depan
    quad(16, 17, 12, 13); // depan
    quad(16, 13, 14, 15); // depan

    quad(55, 28, 29, 30); // belakang
    quad(28, 29, 30, 55); // belakang
    quad(31, 30, 55, 54); // belakang
    quad(54, 31, 32, 53); // belakang
    quad(53, 32, 33, 52); // belakang
    quad(34, 51, 52, 33); // belakang
    quad(34, 35, 50, 51); // belakang
    quad(35, 36, 49, 50); // belakang
    quad(37, 48, 49, 36); // belakang
    quad(38, 47, 48, 37); // belakang
    quad(39, 46, 47, 38); // belakang
    quad(45, 46, 39, 40); // belakang
    quad(44, 45, 40, 41); // belakang
    quad(44, 41, 42, 43); // belakang

    quad(29, 28, 0, 1);
    quad(0, 1, 29, 28);
    quad(1, 2, 30, 29);
    quad(2, 30, 31, 3);
    quad(3, 31, 32, 4);
    quad(4, 32, 33, 5);
    quad(5, 33, 34, 6);
    quad(35, 7, 6, 34);
    quad(8, 36, 35, 7);
    quad(37, 9, 8, 36);
    quad(38, 10, 9, 37);
    quad(39, 11, 10, 38);
    quad(12, 11, 39, 40);
    quad(12, 40, 41, 13);
    quad(13, 41, 42, 14);
    quad(14, 42, 43, 15);

    quad(15, 43, 44, 16);
    quad(16, 44, 45, 17);
    quad(17, 45, 46, 18);
    quad(18, 46, 47, 19);
    quad(19, 47, 48, 20);
    quad(20, 48, 49, 21);
    quad(21, 49, 50, 22);
    quad(22, 50, 51, 23);
    quad(23, 51, 52, 24);
    quad(24, 52, 53, 25);
    quad(25, 53, 54, 26);
    quad(26, 54, 55, 27);
    quad(27, 55, 28, 0);
  
    // console.log(vertices);
  
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  
    var vertexShaderCode = document.getElementById("vertexShaderCode").text;
  
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
  
    var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;
  
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
  
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    var aColor = gl.getAttribLocation(shaderProgram, "a_Color");
    gl.vertexAttribPointer(
      aPosition, 
      3, 
      gl.FLOAT, 
      false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      0);
    gl.vertexAttribPointer(
      aColor, 
      3, 
      gl.FLOAT, 
      false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aPosition);
    gl.enableVertexAttribArray(aColor);
  
    gl.viewport(100, 0, canvas.width, canvas.height);
    gl.enable(gl.DEPTH_TEST);
  
    var primitive = gl.TRIANGLES;
    var offset = 0;
    var count = 384;  // Jumlah verteks yang akan digambar
  
    var model = glMatrix.mat4.create();
    var view = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(view,
      [0.0, 0.0, 2.0], // di mana posisi kamera (posisi)
      [0.0, 0.0, -2.0], // ke mana kamera menghadap (vektor)
      [0.0, 1.0, 0.0] // ke mana arah atas kamera (vektor)
      );
    var projection = glMatrix.mat4.create();
    glMatrix.mat4.perspective(projection, 
      glMatrix.glMatrix.toRadian(90), // fov dalam radian
      1.0,  // rasio aspek
      0.5,  // near
      10.0  // far
      );
    var uModel = gl.getUniformLocation(shaderProgram, 'model');
    var uView = gl.getUniformLocation(shaderProgram, 'view');
    var uProjection = gl.getUniformLocation(shaderProgram, 'projection');
  
    function render() {
      var theta = glMatrix.glMatrix.toRadian(1); // 1 derajat
      //glMatrix.mat4.rotate(model, model, theta, [1.0, 1.0, 1.0]);
      gl.uniformMatrix4fv(uModel, false, model);
      gl.uniformMatrix4fv(uView, false, view);
      gl.uniformMatrix4fv(uProjection, false, projection);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.drawArrays(primitive, offset, count);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }