function generateMultiplier() {
    let multiplier;
    do {
        multiplier = +(Math.random() * 1000).toFixed(2);
    } while (multiplier <= 1.00);
    return multiplier;
}

function predictMultipliers() {
    const recentMultiplier = parseFloat(document.getElementById('recent-multiplier').value);
    
    if (recentMultiplier < 1 || recentMultiplier > 1000) {
        alert("Invalid recent multiplier signal.");
        return;
    }

    let predictedMultipliers = [];
    while (predictedMultipliers.length < 4) {
        let nextMultiplier = generateMultiplier();
        if (nextMultiplier < 2.50 && nextMultiplier > 1.00) {
            predictedMultipliers.push(nextMultiplier);
        }
    }

    let minIndex = predictedMultipliers.indexOf(Math.min(...predictedMultipliers));
    let maxIndex = predictedMultipliers.indexOf(Math.max(...predictedMultipliers));

    let multiplierElements = [
        document.getElementById('multiplier1'),
        document.getElementById('multiplier2'),
        document.getElementById('multiplier3'),
        document.getElementById('multiplier4')
    ];

    for (let i = 0; i < multiplierElements.length; i++) {
        multiplierElements[i].innerText = "Multiplier " + (i + 1) + ": " + predictedMultipliers[i];
        // Reset the background color
        multiplierElements[i].classList.remove('green-highlight');
    }

    // Highlight the lowest and highest multipliers
    multiplierElements[minIndex].classList.add('green-highlight');
    multiplierElements[maxIndex].classList.add('green-highlight');
}