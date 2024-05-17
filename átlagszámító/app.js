let subjects = [];

function addSubject() {
    const name = document.getElementById('subjectName').value;
    const credits = parseInt(document.getElementById('credits').value);
    const grade = parseInt(document.getElementById('grade').value);

    if (name && credits && grade) {
        subjects.push({ name, credits, grade });
        updateTable();
        calculateResults();
        document.getElementById('subjectForm').reset();
    }
}

function removeSubject(index) {
    subjects.splice(index, 1);
    updateTable();
    calculateResults();
}

function updateTable() {
    const tableBody = document.querySelector('#subjectsTable tbody');
    tableBody.innerHTML = '';

    subjects.forEach((subject, index) => {
        const row = `<tr>
            <td>${subject.name}</td>
            <td>${subject.credits}</td>
            <td>${subject.grade}</td>
            <td><button onclick="removeSubject(${index})">Antifasz</button></td>
        </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function calculateResults() {
    let totalCredits = 0;
    let weightedSum = 0;

    subjects.forEach((subject) => {
        totalCredits += subject.credits;
        weightedSum += subject.credits * subject.grade;
    });

    const average = totalCredits ? (weightedSum / totalCredits).toFixed(2) : '0.00';

    document.getElementById('totalCredits').innerText = totalCredits;
    document.getElementById('average').innerText = average;
    document.getElementById('subjectCount').innerText = subjects.length;
}
