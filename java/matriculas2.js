const datos = [
    { estudiante: 'Juan Pérez', grado: 'Grado 0', curso: '0-05', jornada: 'Mañana', enlace: '#', activo: true },
    { estudiante: 'Ana Gómez', grado: 'Grado 1', curso: '1-05', jornada: 'Tarde', enlace: '#', activo: true },
    { estudiante: 'Luis Martínez', grado: 'Grado 2', curso: '2-05', jornada: 'Noche', enlace: '#', activo: true },
    { estudiante: 'María Rodríguez', grado: 'Grado 3', curso: '3-07', jornada: 'Tarde', enlace: '#', activo: true },
    { estudiante: 'Carlos Sánchez', grado: 'Grado 4', curso: '4-06', jornada: 'Mañana', enlace: '#', activo: true },
    { estudiante: 'Laura Fernández', grado: 'Grado 5', curso: '5-05', jornada: 'Mañana', enlace: '#', activo: true },
    { estudiante: 'Juan Pérez', grado: 'Grado 6', curso: '6-05', jornada: 'Mañana', enlace: '#', activo: true },
    { estudiante: 'Ana Gómez', grado: 'Grado 7', curso: '7-05', jornada: 'Tarde', enlace: '#', activo: true },
    { estudiante: 'Luis Martínez', grado: 'Grado 8', curso: '8-05', jornada: 'Noche', enlace: '#', activo: true },
    { estudiante: 'María Rodríguez', grado: 'Grado 9', curso: '9-07', jornada: 'Tarde', enlace: '#', activo: true },
    { estudiante: 'Carlos Sánchez', grado: 'Grado 10', curso: '10-06', jornada: 'Mañana', enlace: '#', activo: true },
    { estudiante: 'Laura Fernández', grado: 'Grado 11', curso: '11-05', jornada: 'Mañana', enlace: '#', activo: true },
];

function updateTable() {
    const gradoSelect = document.getElementById("gradoSelect").value;
    const jornadaSelect = document.getElementById("jornadaSelect").value;

    const tbody = document.querySelector("#dataTable tbody");
    tbody.innerHTML = "";

    const filteredData = datos.filter(item => 
        item.grado === gradoSelect && 
        item.jornada === jornadaSelect && 
        item.activo // Solo incluye matrículas activas
    );

    // Ordenar los datos por el nombre del estudiante
    filteredData.sort((a, b) => a.estudiante.localeCompare(b.estudiante));

    filteredData.forEach(item => {
        const row = document.createElement("tr");
        const cellEstudiante = document.createElement("td");
        const cellGrado = document.createElement("td");
        const cellCurso = document.createElement("td");
        const cellJornada = document.createElement("td");
        const cellEliminar = document.createElement("td");

        const linkEstudiante = document.createElement("a");
        linkEstudiante.href = item.enlace;
        linkEstudiante.textContent = item.estudiante;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Desactivar";
        botonEliminar.onclick = () => eliminarMatricula(item.estudiante);

        cellEstudiante.appendChild(linkEstudiante);
        cellCurso.textContent = item.curso;
        cellGrado.textContent = item.grado;
        cellJornada.textContent = item.jornada;
        cellEliminar.appendChild(botonEliminar);

        row.appendChild(cellEstudiante);
        row.appendChild(cellGrado);
        row.appendChild(cellCurso);
        row.appendChild(cellJornada);
        row.appendChild(cellEliminar);

        tbody.appendChild(row);
    });

    updateInactiveTable();
}

function updateInactiveTable() {
    const tbody = document.querySelector("#inactiveTable tbody");
    tbody.innerHTML = "";

    const filteredData = datos.filter(item => !item.activo); // Solo incluye matrículas no activas

    // Ordenar los datos por el nombre del estudiante
    filteredData.sort((a, b) => a.estudiante.localeCompare(b.estudiante));

    filteredData.forEach(item => {
        const row = document.createElement("tr");
        const cellEstudiante = document.createElement("td");
        const cellGrado = document.createElement("td");
        const cellCurso = document.createElement("td");
        const cellJornada = document.createElement("td");
        const cellActivar = document.createElement("td");

        const linkEstudiante = document.createElement("a");
        linkEstudiante.href = item.enlace;
        linkEstudiante.textContent = item.estudiante;

        const botonActivar = document.createElement("button");
        botonActivar.textContent = "Activar";
        botonActivar.onclick = () => activarMatricula(item.estudiante);

        cellEstudiante.appendChild(linkEstudiante);
        cellCurso.textContent = item.curso;
        cellGrado.textContent = item.grado;
        cellJornada.textContent = item.jornada;
        cellActivar.appendChild(botonActivar);

        row.appendChild(cellEstudiante);
        row.appendChild(cellGrado);
        row.appendChild(cellCurso);
        row.appendChild(cellJornada);
        row.appendChild(cellActivar);

        tbody.appendChild(row);
    });
}

function eliminarMatricula(estudiante) {
    const matricula = datos.find(item => item.estudiante === estudiante);
    if (matricula) {
        matricula.activo = false; 
    }
    updateTable(); 
    
}

function activarMatricula(estudiante) {
    const matricula = datos.find(item => item.estudiante === estudiante);
    if (matricula) {
        matricula.activo = true; 
    }
    updateTable(); 
}


