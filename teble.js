function saveNote() {
    const noteContent = document.getElementById('note').value;
    localStorage.setItem('myNote', noteContent);
    alert('메모가 저장되었습니다.');
}

function loadNote() {
    const noteContent = localStorage.getItem('myNote');
    if(noteContent) {
        document.getElementById('note').value = noteContent;
    } else {
        alert('저장된 메모가 없습니다.');
    }
}
