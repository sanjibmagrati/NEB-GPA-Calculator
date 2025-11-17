// NEB Class 12 subjects by faculty
const facultySubjects = {
    science: {
        compulsory: [
            { name: 'English', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Nepali', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Physics', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Chemistry', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 }
        ],
        elective: [
            { name: 'Computer Science', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 50, practicalTotal: 50 },
            { name: 'Biology', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Mathematics', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Statistics', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Geology', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Environmental Science', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 }
        ]
    },
    management: {
        compulsory: [
            { name: 'English', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Nepali', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 }
        ],
        elective: [
            { name: 'Mathematics', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Social Studies', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Economics', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Business Studies', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Accountancy', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Business Mathematics', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Computer Science', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 50, practicalTotal: 50 },
            { name: 'Marketing', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Hotel Management', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 }
        ]
    },
    humanities: {
        compulsory: [
            { name: 'English', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Nepali', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 }
        ],
        elective: [
            { name: 'Sociology', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Psychology', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'History', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Geography', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Mass Communication', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 }
        ]
    },
    education: {
        compulsory: [
            { name: 'English', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Nepali', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Life Skill Education', compulsory: true, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 }
        ],
        elective: [
            { name: 'Mathematics', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Social Studies', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Mathematics Education', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Science Education', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Social Studies Education', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'English Education', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 75, practicalTotal: 25 },
            { name: 'Health & Physical Education', compulsory: false, hasTheory: true, hasPractical: true, theoryTotal: 50, practicalTotal: 50 }
        ]
    }
};

const gradePoints = {
    'A+': 4.0,
    'A': 3.6,
    'B+': 3.2,
    'B': 2.8,
    'C+': 2.4,
    'C': 2.0,
    'D+': 1.6,
    'D': 1.2,
    'E': 0.8
};

let selectedFaculty = 'science'; 
let inputMode = 'grades'; 
let currentSubjects = []; 

function marksToGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C+';
    if (percentage >= 40) return 'C';
    if (percentage >= 30) return 'D+';
    if (percentage >= 20) return 'D';
    if (percentage >= 0) return 'E';
    return '-';
}

function gradeToPercentage(grade) {
    switch (grade) {
        case 'A+': return 0.9;
        case 'A': return 0.8;
        case 'B+': return 0.7;
        case 'B': return 0.6;
        case 'C+': return 0.5;
        case 'C': return 0.4;
        case 'D+': return 0.3;
        case 'D': return 0.2;
        case 'E': return 0.1;
        default: return 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {

    loadFacultySubjects();

 
    document.querySelectorAll('.faculty-card').forEach(card => {
        card.addEventListener('click', function() {
          
            document.querySelectorAll('.faculty-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            selectedFaculty = this.dataset.faculty;
            loadFacultySubjects();
        });
    });
    const modeCards = document.querySelectorAll('.mode-card');
    modeCards.forEach(card => {
        card.addEventListener('click', function() {
            const currentValues = {};
            currentSubjects.forEach((subject, idx) => {
                const theoryGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="theory-grade"]`);
                const practicalGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="practical-grade"]`);
                const theoryMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="theory-marks"]`);
                const practicalMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="practical-marks"]`);
                
                const subjectData = {};
                if (theoryGradeSelect && theoryGradeSelect.value) { subjectData.theoryGrade = theoryGradeSelect.value; }
                if (practicalGradeSelect && practicalGradeSelect.value) { subjectData.practicalGrade = practicalGradeSelect.value; }
                if (theoryMarksInput && theoryMarksInput.value) { subjectData.theoryMarks = theoryMarksInput.value; }
                if (practicalMarksInput && practicalMarksInput.value) { subjectData.practicalMarks = practicalMarksInput.value; }

                if (Object.keys(subjectData).length > 0) {
                    currentValues[subject.name] = subjectData;
                }
            });

     
            modeCards.forEach(c => c.classList.remove('selected'));
        
            this.classList.add('selected');
            inputMode = this.dataset.mode;
            renderSubjects();

            setTimeout(() => {
                currentSubjects.forEach((subject, idx) => {
                    if (currentValues[subject.name]) {
                        const savedData = currentValues[subject.name];
                        if (inputMode === 'grades') {
                            if (savedData.theoryGrade) {
                                const theoryGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="theory-grade"]`);
                                if (theoryGradeSelect) { theoryGradeSelect.value = savedData.theoryGrade; }
                            }
                            if (savedData.practicalGrade) {
                                const practicalGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="practical-grade"]`);
                                if (practicalGradeSelect) { practicalGradeSelect.value = savedData.practicalGrade; }
                            }
                        } else {
                            if (savedData.theoryMarks) {
                                const theoryMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="theory-marks"]`);
                                if (theoryMarksInput) { theoryMarksInput.value = savedData.theoryMarks; }
                            }
                            if (savedData.practicalMarks) {
                                const practicalMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="practical-marks"]`);
                                if (practicalMarksInput) { practicalMarksInput.value = savedData.practicalMarks; }
                            }
                        }
                    }
                });
            }, 50);
        });
    });

 
    document.getElementById('has-theory').addEventListener('change', function() {
        document.getElementById('theory-marks-group').classList.toggle('hidden', !this.checked);
    });

    document.getElementById('has-practical').addEventListener('change', function() {
        document.getElementById('practical-marks-group').classList.toggle('hidden', !this.checked);
    });
});


function loadFacultySubjects() {

    const currentValues = {};
    currentSubjects.forEach((subject, idx) => {

        const theoryGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="theory-grade"]`);
        const practicalGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="practical-grade"]`);
        const theoryMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="theory-marks"]`);
        const practicalMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="practical-marks"]`);

        const subjectData = { calculatedGrades: subject.calculatedGrades }; // Also save calculated grades for marks mode
        if (theoryGradeSelect && theoryGradeSelect.value) { subjectData.theoryGrade = theoryGradeSelect.value; }
        if (practicalGradeSelect && practicalGradeSelect.value) { subjectData.practicalGrade = practicalGradeSelect.value; }
        if (theoryMarksInput && theoryMarksInput.value) { subjectData.theoryMarks = theoryMarksInput.value; }
        if (practicalMarksInput && practicalMarksInput.value) { subjectData.practicalMarks = practicalMarksInput.value; }

        if (Object.keys(subjectData).length > 1 || subjectData.calculatedGrades) { // 1 because of calculatedGrades property
            currentValues[subject.name] = subjectData;
        }
    });


    const facultyData = facultySubjects[selectedFaculty];
    currentSubjects = [
        ...facultyData.compulsory,
        ...facultyData.elective.slice(0, 2) 
    ];

    renderSubjects();

   
    setTimeout(() => {
        currentSubjects.forEach((subject, idx) => {
            if (currentValues[subject.name]) {
                const savedData = currentValues[subject.name];
                
 
                if (inputMode === 'grades') {
                    if (savedData.theoryGrade) {
                        const theoryGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="theory-grade"]`);
                        if (theoryGradeSelect) { theoryGradeSelect.value = savedData.theoryGrade; }
                    }
                    if (savedData.practicalGrade) {
                        const practicalGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="practical-grade"]`);
                        if (practicalGradeSelect) { practicalGradeSelect.value = savedData.practicalGrade; }
                    }
                } 

                else {
                    if (savedData.theoryMarks) {
                        const theoryMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="theory-marks"]`);
                        if (theoryMarksInput) { theoryMarksInput.value = savedData.theoryMarks; }
                    }
                    if (savedData.practicalMarks) {
                        const practicalMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="practical-marks"]`);
                        if (practicalMarksInput) { practicalMarksInput.value = savedData.practicalMarks; }
                    }
                }

                if (inputMode === 'marks' && savedData.calculatedGrades) {
                    const totalSpan = document.getElementById(`total-${idx}`);
                    const gradeSpan = document.getElementById(`grade-${idx}`);
                    if (totalSpan && gradeSpan) {
                        totalSpan.textContent = savedData.calculatedGrades.total || '0';
                        gradeSpan.textContent = savedData.calculatedGrades.grade || '-';
                    }
                }
            }
        });

        if (inputMode === 'marks') {
            currentSubjects.forEach((subject, idx) => {
                const theoryInput = document.querySelector(`[data-subject="${idx}"][data-type="theory-marks"]`);
                const practicalInput = document.querySelector(`[data-subject="${idx}"][data-type="practical-marks"]`);
                if ((theoryInput && theoryInput.value) || (practicalInput && practicalInput.value)) {
                    updateTotalAndGrade(idx);
                }
            });
        }
    }, 100); 
}

function renderSubjects() {
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';
    currentSubjects.forEach((subject, index) => {
        const subjectCard = createSubjectCard(subject, index);
        container.appendChild(subjectCard);
    });
}

function createSubjectCard(subject, index) {
    const card = document.createElement('div');
    card.className = 'subject-card fade-in';

    const createGradeOptions = (total) => {
        let options = '<option value="">- Select Grade -</option>';
        const grades = ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'E'];
        const percentageRanges = [
            [0.9, 1.0], [0.8, 0.89], [0.7, 0.79], [0.6, 0.69], 
            [0.5, 0.59], [0.4, 0.49], [0.3, 0.39], [0.2, 0.29], [0.0, 0.19]
        ];

        grades.forEach((grade, i) => {
            let rangeText = '';
            if (i === grades.length - 1) { // Grade E
                rangeText = `0-${Math.round(total * percentageRanges[i][1])}`;
            } else {
                rangeText = `${Math.round(total * percentageRanges[i][0])}-${Math.round(total * percentageRanges[i][1])}`;
            }
            options += `<option value="${grade}">${grade} (${rangeText})</option>`;
        });
        return options;
    };

    card.innerHTML = `
        <div class="subject-header">
            <div class="subject-name">${subject.name}</div>
            ${subject.compulsory ? '<span class="compulsory-badge">Compulsory</span>' : `<span class="elective-badge">Elective</span> <button class="remove-subject" onclick="removeSubject(${index})">Remove</button>`}
        </div>
        <div class="input-group">
            ${inputMode === 'grades' ?
          
                `
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    ${subject.hasTheory ?
                        `
                        <div style="display: flex; flex-direction: column; gap: 5px;">
                            <label>Theory Grade (out of ${subject.theoryTotal || 75})</label>
                            <select class="grade-select" data-subject="${index}" data-type="theory-grade" style="width: 100%;">
                                ${createGradeOptions(subject.theoryTotal || 75)}
                            </select>
                        </div>
                        ` : ''}
                    ${subject.hasPractical ?
                        `
                        <div style="display: flex; flex-direction: column; gap: 5px;">
                            <label>Practical Grade (out of ${subject.practicalTotal || 25})</label>
                            <select class="grade-select" data-subject="${index}" data-type="practical-grade" style="width: 100%;">
                                ${createGradeOptions(subject.practicalTotal || 25)}
                            </select>
                        </div>
                        ` : ''}
                </div>
                `

                : `
                <div class="marks-input-container">
                    ${subject.hasTheory ?
                        `
                        <div class="marks-input-group">
                            <label>Theory Marks (out of ${subject.theoryTotal || 75})</label>
                            <input type="number" class="marks-input" data-subject="${index}" data-type="theory-marks" placeholder="Enter theory marks" min="0" max="${subject.theoryTotal || 75}" step="0.1" oninput="validateMarks(this, ${subject.theoryTotal || 75}, 'theory')">
                            <div class="marks-info">Max: ${subject.theoryTotal || 75}</div>
                        </div>
                        ` : ''}
                    ${subject.hasPractical ?
                        `
                        <div class="marks-input-group">
                            <label>Practical Marks (out of ${subject.practicalTotal || 25})</label>
                            <input type="number" class="marks-input" data-subject="${index}" data-type="practical-marks" placeholder="Enter practical marks" min="0" max="${subject.practicalTotal || 25}" step="0.1" oninput="validateMarks(this, ${subject.practicalTotal || 25}, 'practical')">
                            <div class="marks-info">Max: ${subject.practicalTotal || 25}</div>
                        </div>
                        ` : ''}
                    ${(subject.hasTheory || subject.hasPractical) ?
                        `
                        <div class="total-marks-display">
                            <strong>Total: <span id="total-${index}">0</span>/${(subject.theoryTotal || 0) + (subject.practicalTotal || 0)}</strong>
                            <div class="grade-display">Grade: <span id="grade-${index}">-</span></div>
                            <div class="marks-warning hidden" id="warning-${index}">Warning: Marks are out of range or incomplete.</div>
                        </div>
                        ` : ''}
                </div>
                `
            }
        </div>
    `;

    if (inputMode === 'marks') {
        const theoryInput = card.querySelector('[data-type="theory-marks"]');
        const practicalInput = card.querySelector('[data-type="practical-marks"]');
        if (theoryInput) {
            theoryInput.addEventListener('input', () => updateTotalAndGrade(index));
        }
        if (practicalInput) {
            practicalInput.addEventListener('input', () => updateTotalAndGrade(index));
        }
    }

    return card;
}

function removeSubject(index) {
    currentSubjects.splice(index, 1);
    renderSubjects(); 
}

function addCustomSubject() {
    const name = document.getElementById('custom-subject-name').value.trim();
    const hasTheory = document.getElementById('has-theory').checked;
    const hasPractical = document.getElementById('has-practical').checked;
    const theoryTotal = parseInt(document.getElementById('theory-total').value);
    const practicalTotal = parseInt(document.getElementById('practical-total').value);

    if (!name || (!hasTheory && !hasPractical)) {
        alert('Please enter a subject name and select at least one component (Theory or Practical).');
        return;
    }
    
    if (currentSubjects.some(s => s.name.toLowerCase() === name.toLowerCase())) {
        alert(`Subject "${name}" is already in the list.`);
        return;
    }

    const currentValues = {};
    currentSubjects.forEach((subject, idx) => {
    
        const theoryGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="theory-grade"]`);
        const practicalGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="practical-grade"]`);
        const theoryMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="theory-marks"]`);
        const practicalMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="practical-marks"]`);

        const subjectData = { calculatedGrades: subject.calculatedGrades };
        if (theoryGradeSelect && theoryGradeSelect.value) { subjectData.theoryGrade = theoryGradeSelect.value; }
        if (practicalGradeSelect && practicalGradeSelect.value) { subjectData.practicalGrade = practicalGradeSelect.value; }
        if (theoryMarksInput && theoryMarksInput.value) { subjectData.theoryMarks = theoryMarksInput.value; }
        if (practicalMarksInput && practicalMarksInput.value) { subjectData.practicalMarks = practicalMarksInput.value; }

        if (Object.keys(subjectData).length > 1 || subjectData.calculatedGrades) {
            currentValues[subject.name] = subjectData;
        }
    });

    const newSubject = {
        name: name,
        compulsory: false,
        hasTheory: hasTheory,
        hasPractical: hasPractical,
        theoryTotal: hasTheory ? theoryTotal : 0,
        practicalTotal: hasPractical ? practicalTotal : 0
    };
    currentSubjects.push(newSubject);
    renderSubjects();

    document.getElementById('custom-subject-name').value = '';
    document.getElementById('has-theory').checked = true;
    document.getElementById('has-practical').checked = false;
    document.getElementById('theory-total').value = '75';
    document.getElementById('practical-total').value = '25';
    document.getElementById('theory-marks-group').classList.remove('hidden');
    document.getElementById('practical-marks-group').classList.add('hidden');

    setTimeout(() => {
        currentSubjects.forEach((subject, idx) => {
            if (currentValues[subject.name]) {
                const savedData = currentValues[subject.name];
                

                if (inputMode === 'grades') {
                    if (savedData.theoryGrade) {
                        const theoryGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="theory-grade"]`);
                        if (theoryGradeSelect) { theoryGradeSelect.value = savedData.theoryGrade; }
                    }
                    if (savedData.practicalGrade) {
                        const practicalGradeSelect = document.querySelector(`[data-subject="${idx}"][data-type="practical-grade"]`);
                        if (practicalGradeSelect) { practicalGradeSelect.value = savedData.practicalGrade; }
                    }
                } 

                else {
                    if (savedData.theoryMarks) {
                        const theoryMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="theory-marks"]`);
                        if (theoryMarksInput) { theoryMarksInput.value = savedData.theoryMarks; }
                    }
                    if (savedData.practicalMarks) {
                        const practicalMarksInput = document.querySelector(`[data-subject="${idx}"][data-type="practical-marks"]`);
                        if (practicalMarksInput) { practicalMarksInput.value = savedData.practicalMarks; }
                    }
                }
        
                if (inputMode === 'marks' && savedData.calculatedGrades) {
                    const totalSpan = document.getElementById(`total-${idx}`);
                    const gradeSpan = document.getElementById(`grade-${idx}`);
                    if (totalSpan && gradeSpan) {
                        totalSpan.textContent = savedData.calculatedGrades.total || '0';
                        gradeSpan.textContent = savedData.calculatedGrades.grade || '-';
                    }
                }
            }
        });

        if (inputMode === 'marks') {
            currentSubjects.forEach((subject, idx) => {
                const theoryInput = document.querySelector(`[data-subject="${idx}"][data-type="theory-marks"]`);
                const practicalInput = document.querySelector(`[data-subject="${idx}"][data-type="practical-marks"]`);
                if ((theoryInput && theoryInput.value) || (practicalInput && practicalInput.value)) {
                    updateTotalAndGrade(idx);
                }
            });
        }
    }, 50);
}

function validateMarks(input, maxMarks, type) {
    const value = parseFloat(input.value);
    const subjectIndex = input.dataset.subject;
    const warningSpan = document.getElementById(`warning-${subjectIndex}`);

    if (value > maxMarks || value < 0) {
        input.classList.add('marks-warning-border');
        if (warningSpan) {
            warningSpan.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} marks must be between 0 and ${maxMarks}.`;
            warningSpan.classList.remove('hidden');
        }
    } else {
        input.classList.remove('marks-warning-border');
        if (warningSpan && warningSpan.textContent.includes(type.charAt(0).toUpperCase() + type.slice(1))) {
            warningSpan.classList.add('hidden');
        }
    }
    updateTotalAndGrade(subjectIndex);
}

function updateTotalAndGrade(subjectIndex) {
    const subject = currentSubjects[subjectIndex];
    if (!subject) return;

    const theoryInput = document.querySelector(`[data-subject="${subjectIndex}"][data-type="theory-marks"]`);
    const practicalInput = document.querySelector(`[data-subject="${subjectIndex}"][data-type="practical-marks"]`);
    const totalSpan = document.getElementById(`total-${subjectIndex}`);
    const gradeSpan = document.getElementById(`grade-${subjectIndex}`);

    if (!totalSpan || !gradeSpan) return;

    let theoryMarks = 0;
    let practicalMarks = 0;
    let totalMarks = 0;


    if (subject.hasTheory && theoryInput && theoryInput.value) {
        theoryMarks = parseFloat(theoryInput.value) || 0;
    }
    if (subject.hasPractical && practicalInput && practicalInput.value) {
        practicalMarks = parseFloat(practicalInput.value) || 0;
    }
    
    if (subject.hasTheory && subject.hasPractical) {

        const theoryPercentage = (theoryMarks / (subject.theoryTotal || 75)) * 100;
        const practicalPercentage = (practicalMarks / (subject.practicalTotal || 25)) * 100;

        totalMarks = theoryMarks + practicalMarks;

        const totalPossible = (subject.theoryTotal || 75) + (subject.practicalTotal || 25);
        const finalPercentage = (totalMarks / totalPossible) * 100;

        totalSpan.textContent = totalMarks.toFixed(1);
        gradeSpan.textContent = totalMarks > 0 ? marksToGrade(finalPercentage) : '-';
    } else if (subject.hasTheory) {
        const percentage = (theoryMarks / (subject.theoryTotal || 75)) * 100;
        totalSpan.textContent = theoryMarks.toFixed(1);
        gradeSpan.textContent = theoryMarks > 0 ? marksToGrade(percentage) : '-';
    } else if (subject.hasPractical) {

        const percentage = (practicalMarks / (subject.practicalTotal || 25)) * 100;
        totalSpan.textContent = practicalMarks.toFixed(1);
        gradeSpan.textContent = practicalMarks > 0 ? marksToGrade(percentage) : '-';
    }
    
    if (subject && totalMarks > 0) {
        if (!subject.calculatedGrades) { subject.calculatedGrades = {}; }
        subject.calculatedGrades.total = totalSpan.textContent;
        subject.calculatedGrades.grade = gradeSpan.textContent;
    }
}


function calculateGPA() {
    let totalGradePoints = 0;
    let totalSubjects = 0;
    const subjectPerformances = [];
    const missingInputs = [];
    
    currentSubjects.forEach((subject, index) => {
        let finalGrade = '-';
        let gradePoint = 0;
        let totalMarks = 0;
        let theoryMarks = 0;
        let practicalMarks = 0;

        if (inputMode === 'grades') {
            const theoryGradeSelect = document.querySelector(`[data-subject="${index}"][data-type="theory-grade"]`);
            const practicalGradeSelect = document.querySelector(`[data-subject="${index}"][data-type="practical-grade"]`);

            if (subject.hasTheory && (!theoryGradeSelect || theoryGradeSelect.value === '')) {
                missingInputs.push(`${subject.name} - Theory Grade`);
                return;
            }
            if (subject.hasPractical && (!practicalGradeSelect || practicalGradeSelect.value === '')) {
                missingInputs.push(`${subject.name} - Practical Grade`);
                return;
            }

            let theoryGrade = theoryGradeSelect ? theoryGradeSelect.value : null;
            let practicalGrade = practicalGradeSelect ? practicalGradeSelect.value : null;
            let finalPercentage = 0;

            if (theoryGrade && practicalGrade) {
                const theoryPercentage = gradeToPercentage(theoryGrade);
                const practicalPercentage = gradeToPercentage(practicalGrade);
                finalPercentage = Math.min(theoryPercentage, practicalPercentage);

        
               
                const theoryGP = gradePoints[theoryGrade] || 0;
                const practicalGP = gradePoints[practicalGrade] || 0;
                gradePoint = Math.min(theoryGP, practicalGP); 
                finalGrade = gradePoint === theoryGP ? theoryGrade : practicalGrade; 
                if (theoryGP < 1.2 || practicalGP < 1.2) { 
                    finalGrade = (theoryGP < practicalGP) ? theoryGrade : practicalGrade;
                    gradePoint = Math.min(theoryGP, practicalGP);
                }

            } else if (theoryGrade) {
                finalGrade = theoryGrade;
                gradePoint = gradePoints[finalGrade] || 0;
            } else if (practicalGrade) {
                finalGrade = practicalGrade;
                gradePoint = gradePoints[finalGrade] || 0;
            }

        } else {
            const theoryMarksInput = document.querySelector(`[data-subject="${index}"][data-type="theory-marks"]`);
            const practicalMarksInput = document.querySelector(`[data-subject="${index}"][data-type="practical-marks"]`);


            if (subject.hasTheory && (!theoryMarksInput || theoryMarksInput.value === '')) {
                missingInputs.push(`${subject.name} - Theory Marks`);
                return;
            }
            if (subject.hasPractical && !subject.hasTheory && (!practicalMarksInput || practicalMarksInput.value === '')) {
                missingInputs.push(`${subject.name} - Practical Marks`);
                return;
            }

      
            if (subject.hasTheory && theoryMarksInput && theoryMarksInput.value !== '') {
                theoryMarks = parseFloat(theoryMarksInput.value);
                if (theoryMarks < 0 || theoryMarks > (subject.theoryTotal || 75)) {
                    alert(`Invalid theory marks for ${subject.name}. Please enter marks between 0 and ${subject.theoryTotal || 75}.`);
                    return;
                }
            }
            if (subject.hasPractical && practicalMarksInput && practicalMarksInput.value !== '') {
                practicalMarks = parseFloat(practicalMarksInput.value);
                if (practicalMarks < 0 || practicalMarks > (subject.practicalTotal || 25)) {
                    alert(`Invalid practical marks for ${subject.name}. Please enter marks between 0 and ${subject.practicalTotal || 25}.`);
                    return;
                }
            }
            
            if (subject.hasTheory && subject.hasPractical) {
                totalMarks = theoryMarks + practicalMarks;
                const totalPossible = (subject.theoryTotal || 75) + (subject.practicalTotal || 25);
                const percentage = (totalMarks / totalPossible) * 100;
                finalGrade = marksToGrade(percentage);
            } else if (subject.hasTheory) {
                totalMarks = theoryMarks;
                const percentage = (theoryMarks / (subject.theoryTotal || 75)) * 100;
                finalGrade = marksToGrade(percentage);
            } else if (subject.hasPractical) {
                totalMarks = practicalMarks;
                const percentage = (practicalMarks / (subject.practicalTotal || 25)) * 100;
                finalGrade = marksToGrade(percentage);
            }
            
    
            gradePoint = gradePoints[finalGrade] || 0;
        }

       
        if (gradePoint > 0 || finalGrade !== '-') { 
            totalGradePoints += gradePoint;
            totalSubjects++;

            subjectPerformances.push({
                name: subject.name,
                grade: finalGrade,
                gradePoint: gradePoint
            });
        }
    });
    if (missingInputs.length > 0) {
        alert('Please fill in all required inputs before calculating GPA:\n\n' + missingInputs.join('\n'));
        document.getElementById('results-section').classList.add('hidden');
        return;
    }

    if (totalSubjects === 0) {
        alert('No subject results were entered or all inputs are missing. Please enter your grades/marks.');
        document.getElementById('results-section').classList.add('hidden');
        return;
    }
    
    if (totalSubjects < 5) {
        alert(`You have only entered results for ${totalSubjects} subjects. A minimum of 5 subjects for your selected faculty must be included for accurate GPA calculation.`);
        return;
    }

    const gpa = totalGradePoints / totalSubjects;

    document.getElementById('results-section').classList.remove('hidden');
    document.getElementById('results-section').classList.add('fade-in');

    document.getElementById('gpa-value').textContent = gpa.toFixed(2);

    const gpaPercentage = (gpa / 4.0) * 100;
    document.getElementById('gpa-bar').style.width = gpaPercentage + '%';
    updatePerformanceAnalysis(subjectPerformances, gpa);

    document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
}

function updatePerformanceAnalysis(performances, gpa) {
   
    const sortedPerformances = [...performances].sort((a, b) => b.gradePoint - a.gradePoint);


    const topSubjects = sortedPerformances.filter(p => p.gradePoint >= 3.2).slice(0, 3);
    const topContainer = document.getElementById('top-subjects');
    topContainer.innerHTML = '';
    if (topSubjects.length > 0) {
        topSubjects.forEach(subject => {
            const div = document.createElement('div');
            div.className = 'subject-performance';
            div.innerHTML = `
                <span>${subject.name}</span>
                <span>${subject.grade} (${subject.gradePoint.toFixed(1)} GP)</span>
            `;
            topContainer.appendChild(div);
        });
    } else {
        topContainer.innerHTML = '<p>Enter more results to see top subjects</p>';
    }

  
    const improvementSubjects = sortedPerformances.filter(p => p.gradePoint < 2.8).slice(-3);
    const improvementContainer = document.getElementById('improvement-subjects');
    improvementContainer.innerHTML = '';
    if (improvementSubjects.length > 0) {
        improvementSubjects.forEach(subject => {
            const div = document.createElement('div');
            div.className = 'subject-performance';
            div.innerHTML = `
                <span>${subject.name}</span>
                <span>${subject.grade} (${subject.gradePoint.toFixed(1)} GP)</span>
            `;
            improvementContainer.appendChild(div);
        });
    } else {
        improvementContainer.innerHTML = '<p>Great job! All subjects are performing well.</p>';
    }

    const suggestions = [];


    if (gpa >= 3.6) {
        suggestions.push("Excellent work! You are eligible for top tier universities and scholarships.");
        suggestions.push("Focus on extracurricular activities and standardized tests (like SAT, TOEFL/IELTS) for global opportunities.");
    } else if (gpa >= 3.2) {
        suggestions.push("Very good performance. Maintain this momentum for strong university admissions.");
        suggestions.push("Identify areas for minor improvement to achieve an A+ grade in core subjects.");
    } else if (gpa >= 2.8) {
        suggestions.push("Solid results! You are well-positioned for most university programs.");
        suggestions.push("Consider targeted review sessions and tutoring in subjects where you scored below B+ grade.");
    } else if (gpa >= 2.0) {
        suggestions.push("Good foundation. Focus on consistency and improving your core subjects to increase your GPA.");
        suggestions.push("Consider targeted review sessions and tutoring in subjects where you scored below C+ grade.");
        suggestions.push("Develop better study habits and time management skills.");
    } else {
        suggestions.push("There's significant room for improvement. Don't lose hope - success is achievable!");
        suggestions.push("Focus on understanding fundamental concepts and seek help from teachers.");
        suggestions.push("Consider retaking exams in subjects with very low grades if possible.");
    }

    if (selectedFaculty === 'science') {
        if (performances.some(p => ['Physics', 'Chemistry', 'Mathematics'].includes(p.name) && p.gradePoint < 2.8)) {
            suggestions.push("Strong performance in core science subjects (Physics, Chemistry, Math) is crucial for engineering and medical programs.");
        }
    } else if (selectedFaculty === 'management') {
        if (performances.some(p => ['Accountancy', 'Economics'].includes(p.name) && p.gradePoint < 2.8)) {
            suggestions.push("Focus on Accountancy and Economics as they form the foundation for business studies.");
        }
    }
    
    const lowPerforming = performances.filter(p => p.gradePoint < 2.4);
    if (lowPerforming.length > 0) {
        suggestions.push(`Pay special attention to ${lowPerforming.map(p => p.name).join(', ')} - these subjects need immediate focus.`);
    }

    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
    });
}

function saveResults() {
    const gpaValue = document.getElementById('gpa-value').textContent;
    const currentDate = new Date().toLocaleDateString();

    if (gpaValue === '0.00') {
        alert('Please calculate your GPA first before saving the results.');
        return;
    }

    const subjectData = currentSubjects.map((subject, index) => {
        let result = '';
        let marks = '';

        if (inputMode === 'grades') {
            const theoryGradeSelect = document.querySelector(`[data-subject="${index}"][data-type="theory-grade"]`);
            const practicalGradeSelect = document.querySelector(`[data-subject="${index}"][data-type="practical-grade"]`);
            
            let theoryResult = theoryGradeSelect ? theoryGradeSelect.value : '';
            let practicalResult = practicalGradeSelect ? practicalGradeSelect.value : '';

            if (theoryResult && practicalResult) {
                result = (gradePoints[theoryResult] < gradePoints[practicalResult]) ? theoryResult : practicalResult; // Simplified final grade
                marks = `Theory: ${theoryResult}, Practical: ${practicalResult}`;
            } else if (theoryResult) {
                result = theoryResult;
                marks = `Theory: ${theoryResult}`;
            } else if (practicalResult) {
                result = practicalResult;
                marks = `Practical: ${practicalResult}`;
            }

        } else {
            const theoryMarksInput = document.querySelector(`[data-subject="${index}"][data-type="theory-marks"]`);
            const practicalMarksInput = document.querySelector(`[data-subject="${index}"][data-type="practical-marks"]`);
            
            let theoryMarks = 0;
            let practicalMarks = 0;
            let totalMarks = 0;
            
            if (subject.hasTheory && theoryMarksInput && theoryMarksInput.value) { theoryMarks = parseFloat(theoryMarksInput.value); }
            if (subject.hasPractical && practicalMarksInput && practicalMarksInput.value) { practicalMarks = parseFloat(practicalMarksInput.value); }

            if (subject.hasTheory && subject.hasPractical) {
                totalMarks = theoryMarks + practicalMarks;
                const totalPossible = (subject.theoryTotal || 75) + (subject.practicalTotal || 25);
                const percentage = (totalMarks / totalPossible) * 100;
                result = marksToGrade(percentage);
                marks = `Theory: ${theoryMarks}/${subject.theoryTotal || 75}, Practical: ${practicalMarks}/${subject.practicalTotal || 25} (Total: ${totalMarks}/${totalPossible})`;
            } else if (subject.hasTheory) {
                const percentage = (theoryMarks / (subject.theoryTotal || 75)) * 100;
                result = marksToGrade(percentage);
                marks = `Theory: ${theoryMarks}/${subject.theoryTotal || 75}`;
            } else if (subject.hasPractical) {
                const percentage = (practicalMarks / (subject.practicalTotal || 25)) * 100;
                result = marksToGrade(percentage);
                marks = `Practical: ${practicalMarks}/${subject.practicalTotal || 25}`;
            }
        }
        
        return {
            name: subject.name,
            compulsory: subject.compulsory,
            grade: result,
            marks: marks,
            inputMode: inputMode,
            hasTheory: subject.hasTheory,
            hasPractical: subject.hasPractical
        };
    }).filter(subject => subject.grade !== '');

    if (subjectData.length === 0) {
        alert('No subject data to save.');
        return;
    }

    const resultsHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NEB Class 12 GPA Report</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; }
                .header { text-align: center; border-bottom: 2px solid #7c3aed; padding-bottom: 10px; margin-bottom: 20px; }
                .header h1 { color: #7c3aed; font-size: 1.5rem; }
                .info-section { margin-bottom: 30px; background: #f3f4f6; padding: 15px; border-radius: 8px; }
                .info-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
                .gpa-result { text-align: center; background: #7c3aed; color: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
                .gpa-value-print { font-size: 3rem; font-weight: bold; }
                .subjects-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
                .subjects-table th, .subjects-table td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                .subjects-table th { background-color: #e5e7eb; color: #333; }
                .compulsory { background-color: #e0f2f1; }
                .elective { background-color: #fef3c7; }
                .footer { margin-top: 40px; text-align: center; font-size: 0.9rem; color: #666; border-top: 1px solid #ddd; padding-top: 20px; }
                .print-btn { background: #7c3aed; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 20px 0; }

                @media print {
                    .print-btn { display: none; }
                    body { padding: 0; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🎓 NEB Class 12 GPA Report 2082</h1>
                <p>National Examination Board Grade Point Average Report</p>
            </div>
            <div class="info-section">
                <div class="info-row">
                    <strong>Faculty:</strong> <span>${selectedFaculty.charAt(0).toUpperCase() + selectedFaculty.slice(1)}</span>
                </div>
                <div class="info-row">
                    <strong>Input Method Used:</strong> <span>${inputMode === 'grades' ? 'Grades (A+, A, B+, etc.)' : 'Marks (0-100)'}</span>
                </div>
                <div class="info-row">
                    <strong>Report Generated:</strong> <span>${currentDate}</span>
                </div>
                <div class="info-row">
                    <strong>Total Subjects Evaluated:</strong> <span>${subjectData.length}</span>
                </div>
            </div>

            <div class="gpa-result">
                <p>FINAL CALCULATED GPA</p>
                <div class="gpa-value-print">${gpaValue}</div>
            </div>

            <h2>Subject-wise Performance</h2>
            <table class="subjects-table">
                <thead>
                    <tr>
                        <th>Subject Name</th>
                        <th>Status</th>
                        <th>Final Grade</th>
                        <th>Marks/Grades Entered</th>
                    </tr>
                </thead>
                <tbody>
                    ${subjectData.map(s => `
                        <tr class="${s.compulsory ? 'compulsory' : 'elective'}">
                            <td>${s.name}</td>
                            <td>${s.compulsory ? 'Compulsory' : 'Elective'}</td>
                            <td><strong>${s.grade}</strong></td>
                            <td>${s.marks}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <div style="text-align: center;">
                <button class="print-btn" onclick="window.print()">🖨️ Print Report</button>
            </div>

            <div class="footer">
                This GPA is calculated based on the results entered above using the NEB Class 12 Grading System.
            </div>
        </body>
        </html>
    `;

    // Open a new window and print the results
    const printWindow = window.open('', '_blank');
    printWindow.document.write(resultsHTML);
    printWindow.document.close();
    
    // Attempt to print automatically after the content is loaded
    printWindow.onload = function() {
        printWindow.print();
    };
    
    alert('Results are ready to be saved/printed in a new window.');
}

function resetCalculator() {
    if (confirm('Are you sure you want to reset the calculator? All entered data will be lost.')) {
        // Reset global state
        selectedFaculty = 'science';
        inputMode = 'grades';
        currentSubjects = []; // This will be reset by loadFacultySubjects() anyway

        // Reset UI elements
        
        // Reset faculty selection
        document.querySelectorAll('.faculty-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector('.faculty-card[data-faculty="science"]').classList.add('selected');

        // Reset input mode selection
        document.querySelectorAll('.mode-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector('.mode-card[data-mode="grades"]').classList.add('selected');

        // Hide results section
        document.getElementById('results-section').classList.add('hidden');
        
        // Reset subjects to default
        loadFacultySubjects();
        
        // Clear custom subject input
        document.getElementById('custom-subject-name').value = '';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}