function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
  
    // Definisi verteks-verteks pada segitiga
    /**
     * A (-0.5, 0.5); B (-0.5, -0.5); C (0.5, -0.5); D (0.5, 0.5)
     */
    var vertices = [
      -0.5, 0.5, 1.0, 0.0, 0.0,      // Titik A 
      -0.5, -0.5, 1.0, 0.0, 0.0,     // Titik B
      0.5, -0.5, 1.0, 0.0, 0.0,      // Titik C
      0.5, -0.5, 0.0, 0.0, 1.0,      // Titik C
      0.5, 0.5, 0.0, 0.0, 1.0,       // Titik D
      -0.5, 0.5, 0.0, 0.0, 1.0       // Titik A 
    ];
  
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
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aPosition);
    gl.enableVertexAttribArray(aColor);
  
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(100, 0, canvas.height, canvas.height);
  
    var primitive = gl.TRIANGLES;
    var offset = 0;
    var count = 6;  // Jumlah verteks yang akan digambar
    gl.drawArrays(primitive, offset, count);

    var dx = 0;
    var dy = 0;
    var dz = 0;
    var uDx = gl.getUniformLocation(shaderProgram, 'dx');
    var uDy = gl.getUniformLocation(shaderProgram, 'dy');
    var uDz = gl.getUniformLocation(shaderProgram, 'dz');
    gl.uniform1f(uDz, dz);

    function render(){
        dx += 0.001;
        dy += 0.001;
        
        gl.uniform1f(uDx, dx);
        gl.uniform1f(uDy, dy);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(primitive, offset, count);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }