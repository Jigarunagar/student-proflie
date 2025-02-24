let students = []; 

function addStudent() {
    const name = document.getElementById('studentName').value;
    const id = document.getElementById('studentId').value;
    const subject = document.getElementById('studentSubject').value;
    const fee = document.getElementById('studentFee').value;
    const standard = document.getElementById('studentStandard').value;
    const imageInput = document.getElementById('studentImage').files[0];

    if (!name || !id || !subject || !fee || !standard || !imageInput) {
        alert("Please fill all fields and select an image!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const student = {
            image: e.target.result,
            name: name,
            id: id,
            subject: subject,
            fee: fee,
            standard: standard
        };

        students.push(student);
        updateTable(); 
    };

    reader.readAsDataURL(imageInput);
    document.getElementById('studentName').value = '';
    document.getElementById('studentId').value = '';
    document.getElementById('studentSubject').value = '';
    document.getElementById('studentFee').value = '';
    document.getElementById('studentStandard').value = '';
    document.getElementById('studentImage').value = '';
}

function deleteRow(index) {
    students.splice(index, 1); 
    updateTable(); 
}

function updateTable() {
    const table = document.getElementById('studentTable');
    table.innerHTML = ''; 

    students.map((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${student.image}" alt="Student Image"></td>
        <td>${student.name}</td>
        <td>${student.id}</td>
        <td>${student.subject}</td>
        <td>${student.fee}</td>
        <td>${student.standard}</td>
        <td><button onclick="deleteRow(${index})">Delete</button></td>
    `;
        table.appendChild(row);
    });
}


