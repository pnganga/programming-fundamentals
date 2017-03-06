function grade(s) {
    if (s <= 100 && s >= 80) {
        return 'A';
    } else if (s < 80 && s >= 60) {
        return 'B';
    } else if (s < 60 && s >= 50) {
        return 'C';
    } else if (s < 50 && s >= 40) {
        return 'D';
    } else if (s < 40 && s >= 30) {
        return 'E';
    } else if (s >= 0 && s < 30) {
        return 'F';
    }
}