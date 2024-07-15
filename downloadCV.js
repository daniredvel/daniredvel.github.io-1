function downloadCV() {
    window.open('Daniel Redondo Velasco CV.pdf', '_blank');
    const link = document.createElement('a');
    link.download = 'Daniel Redondo Velasco CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
